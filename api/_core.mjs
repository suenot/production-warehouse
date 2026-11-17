// Read-only MCP core for the Production Warehouse. No dependencies, no I/O of its own:
// the caller passes loaders, so the same file serves stdio (local) and the Vercel function (remote).
//
//   const mcp = createServer({ loadItems, loadPages, mediaBase, siteBase });
//   const reply = await mcp.handle(jsonRpcMessage);   // object, array (batch) or undefined for notifications
//
// Data: items = the video catalog (items.json), pages = techniques and skills articles (techniques.json).

const SUPPORTED = ["2025-06-18", "2025-03-26", "2024-11-05"];
const MAX_LIMIT = 50;
const MAX_QUERY = 200;
const MAX_DOC = 60000;

const str = (v, max = MAX_QUERY) => (typeof v === "string" ? v.trim().slice(0, max) : "");
const norm = (s) => String(s ?? "").toLowerCase();
const clampInt = (v, lo, hi, dflt) => {
  const n = Number.isFinite(v) ? Math.trunc(v) : dflt;
  return Math.min(hi, Math.max(lo, n));
};

class ToolError extends Error {}

function words(query) {
  return norm(query).split(/\s+/).filter(Boolean).slice(0, 8);
}

// Every word must appear somewhere; hits in the title weigh most, then tags and author, then the prompt.
function score(item, ws) {
  const title = norm(item.title);
  const meta = norm([item.author, item.category, (item.tags || []).join(" "), item.source].join(" "));
  const prompt = norm(item.prompt);
  let s = 0;
  for (const w of ws) {
    const inTitle = title.includes(w);
    const inMeta = meta.includes(w);
    const inPrompt = prompt.includes(w);
    if (!inTitle && !inMeta && !inPrompt) return 0;
    s += (inTitle ? 6 : 0) + (inMeta ? 3 : 0) + (inPrompt ? 1 : 0);
  }
  return s;
}

const preview = (text, n = 220) => {
  const t = String(text ?? "").replace(/\s+/g, " ").trim();
  return t.length > n ? t.slice(0, n - 1) + "…" : t;
};

export function createServer({ loadItems, loadPages, mediaBase, siteBase, fetchText, version = "1.0.0" }) {
  const abs = (p) => (p ? (/^https?:/.test(p) ? p : mediaBase + p) : null);

  const summary = (it) => ({
    id: it.id,
    title: it.title,
    author: it.author ?? null,
    category: it.category ?? null,
    tags: it.tags ?? [],
    published: it.published ?? null,
    source: it.source,
    has_original: Boolean(it.videos?.original),
    has_remake: Boolean(it.videos?.remake),
    prompt_preview: preview(it.prompt),
  });

  const full = (it) => ({
    ...summary(it),
    prompt: it.prompt ?? null,
    summary: it.summary ?? null,
    author_url: it.author_url ?? null,
    post_url: it.post_url ?? null,
    source_url: it.source_url ?? null,
    stats: it.stats ?? null,
    videos: Object.fromEntries(Object.entries(it.videos || {}).map(([k, v]) => [k, abs(v)])),
    poster: abs(it.poster),
    how_url: abs(it.how),
    style_url: abs(it.style_doc),
    prompt_preview: undefined,
  });

  const pageUrl = (p) => `${siteBase}/${p.route || ""}`;

  const tools = [
    {
      name: "search_videos",
      description:
        "Search the motion-video catalog (about 800 videos with the prompts that made them). All words in `query` must match the title, tags, author or prompt. Filters narrow the result. Returns short summaries; use get_video for the full prompt and links.",
      inputSchema: {
        type: "object",
        properties: {
          query: { type: "string", description: "Words to find, e.g. 'three.js shader'. Empty lists the newest." },
          category: { type: "string", description: "One category from list_filters, e.g. motion, 3d, explainer, interactive." },
          tag: { type: "string", description: "One tag from list_filters." },
          source: { type: "string", description: "Part of a source name, e.g. skillry or higgsfield." },
          has_remake: { type: "boolean", description: "Only videos that have a remake." },
          limit: { type: "integer", minimum: 1, maximum: MAX_LIMIT, default: 10 },
          offset: { type: "integer", minimum: 0, default: 0 },
        },
        additionalProperties: false,
      },
      run: async (a) => {
        const items = await loadItems();
        const ws = words(a.query);
        const cat = norm(str(a.category));
        const tag = norm(str(a.tag));
        const src = norm(str(a.source));
        let rows = [];
        for (const it of items) {
          if (cat && norm(it.category) !== cat) continue;
          if (tag && !(it.tags || []).some((t) => norm(t) === tag)) continue;
          if (src && !norm(it.source).includes(src)) continue;
          if (a.has_remake === true && !it.videos?.remake) continue;
          const s = ws.length ? score(it, ws) : 1;
          if (s > 0) rows.push([s, it]);
        }
        rows.sort((x, y) => y[0] - x[0] || norm(y[1].published).localeCompare(norm(x[1].published)));
        const limit = clampInt(a.limit, 1, MAX_LIMIT, 10);
        const offset = clampInt(a.offset, 0, 1e6, 0);
        return { total: rows.length, offset, limit, items: rows.slice(offset, offset + limit).map(([, it]) => summary(it)) };
      },
    },
    {
      name: "get_video",
      description: "Get one video by id: the full generation prompt, author, tags, absolute links to the original and remake videos, the poster and the how/style documents.",
      inputSchema: {
        type: "object",
        properties: { id: { type: "string", description: "The id from search_videos." } },
        required: ["id"],
        additionalProperties: false,
      },
      run: async (a) => {
        const id = str(a.id, 300);
        const it = (await loadItems()).find((x) => x.id === id);
        if (!it) throw new ToolError(`No video with id "${id}". Use search_videos to find ids.`);
        return full(it);
      },
    },
    {
      name: "get_video_doc",
      description: "Read the how-it-was-made or style document (markdown) of a video, when get_video lists a how_url or style_url.",
      inputSchema: {
        type: "object",
        properties: {
          id: { type: "string" },
          doc: { type: "string", enum: ["how", "style"] },
        },
        required: ["id", "doc"],
        additionalProperties: false,
      },
      run: async (a) => {
        const id = str(a.id, 300);
        const it = (await loadItems()).find((x) => x.id === id);
        if (!it) throw new ToolError(`No video with id "${id}".`);
        const url = abs(a.doc === "style" ? it.style_doc : it.how);
        if (!url) throw new ToolError(`Video "${id}" has no ${a.doc} document.`);
        if (!url.startsWith(mediaBase + "/")) throw new ToolError("The document is not on the media host.");
        const text = await fetchText(url);
        return { id, doc: a.doc, url, markdown: text.slice(0, MAX_DOC), truncated: text.length > MAX_DOC };
      },
    },
    {
      name: "list_filters",
      description: "List the categories, sources and tags (with counts) that search_videos accepts as filters.",
      inputSchema: { type: "object", properties: {}, additionalProperties: false },
      run: async () => {
        const items = await loadItems();
        const count = (pick) => {
          const m = new Map();
          for (const it of items) for (const k of pick(it)) m.set(k, (m.get(k) || 0) + 1);
          return [...m].sort((a, b) => b[1] - a[1]).map(([name, n]) => ({ name, count: n }));
        };
        return {
          total_videos: items.length,
          categories: count((it) => (it.category ? [it.category] : [])),
          sources: count((it) => [it.source]),
          tags: count((it) => it.tags || []),
        };
      },
    },
    {
      name: "list_techniques",
      description:
        "List the motion-design technique articles (each has a worked demo on the site) plus the hub and the skills list. Returns id, title, one-line summary and page link.",
      inputSchema: { type: "object", properties: {}, additionalProperties: false },
      run: async () => {
        const pages = await loadPages();
        return {
          total: pages.length,
          pages: [...pages].sort((a, b) => a.order - b.order).map((p) => ({ id: p.id, title: p.title, summary: p.summary, url: pageUrl(p) })),
        };
      },
    },
    {
      name: "get_technique",
      description: "Read one technique, the techniques hub (motion-techniques) or the skills list (motion-skills-list) as markdown, by id from list_techniques.",
      inputSchema: {
        type: "object",
        properties: { id: { type: "string", description: "For example technique-speed-ramp." } },
        required: ["id"],
        additionalProperties: false,
      },
      run: async (a) => {
        const id = str(a.id, 200).replace(/^technique-/, "");
        const pages = await loadPages();
        const p = pages.find((x) => x.id === a.id || x.id === `technique-${id}` || x.id === id);
        if (!p) throw new ToolError(`No page "${str(a.id)}". Use list_techniques.`);
        return { id: p.id, title: p.title, summary: p.summary, url: pageUrl(p), markdown: p.markdown };
      },
    },
    {
      name: "search_techniques",
      description: "Search the technique and skills articles by words. Returns the matching pages with a text snippet around the first hit.",
      inputSchema: {
        type: "object",
        properties: {
          query: { type: "string" },
          limit: { type: "integer", minimum: 1, maximum: 20, default: 8 },
        },
        required: ["query"],
        additionalProperties: false,
      },
      run: async (a) => {
        const ws = words(a.query);
        if (!ws.length) throw new ToolError("query is empty.");
        const rows = [];
        for (const p of await loadPages()) {
          const title = norm(p.title);
          const body = norm(p.markdown);
          let s = 0;
          for (const w of ws) {
            const t = title.includes(w);
            const b = body.includes(w);
            if (!t && !b) { s = 0; break; }
            s += (t ? 5 : 0) + (b ? 1 : 0);
          }
          if (!s) continue;
          const at = body.indexOf(ws[0]);
          const snippet = at >= 0 ? preview(p.markdown.slice(Math.max(0, at - 80), at + 200), 280) : preview(p.summary, 280);
          rows.push([s, { id: p.id, title: p.title, url: pageUrl(p), snippet }]);
        }
        rows.sort((x, y) => y[0] - x[0]);
        const limit = clampInt(a.limit, 1, 20, 8);
        return { total: rows.length, pages: rows.slice(0, limit).map(([, r]) => r) };
      },
    },
  ];

  const byName = new Map(tools.map((t) => [t.name, t]));
  const listed = tools.map(({ name, description, inputSchema }) => ({
    name,
    description,
    inputSchema,
    annotations: { readOnlyHint: true, destructiveHint: false, idempotentHint: true, openWorldHint: false },
  }));

  const ok = (id, result) => ({ jsonrpc: "2.0", id, result });
  const fail = (id, code, message) => ({ jsonrpc: "2.0", id: id ?? null, error: { code, message } });

  async function one(msg) {
    if (!msg || typeof msg !== "object" || msg.jsonrpc !== "2.0" || typeof msg.method !== "string") {
      return fail(msg?.id, -32600, "Invalid Request");
    }
    const { id, method, params } = msg;
    if (id === undefined) return undefined; // a notification, e.g. notifications/initialized
    switch (method) {
      case "initialize": {
        const want = params?.protocolVersion;
        return ok(id, {
          protocolVersion: SUPPORTED.includes(want) ? want : SUPPORTED[0],
          capabilities: { tools: { listChanged: false } },
          serverInfo: { name: "production-warehouse", title: "Production Warehouse", version },
          instructions:
            "Read-only access to the Production Warehouse: about 800 motion videos with their generation prompts (search_videos, get_video) and 40+ motion-design technique articles (list_techniques, get_technique). Nothing here changes data.",
        });
      }
      case "ping":
        return ok(id, {});
      case "tools/list":
        return ok(id, { tools: listed });
      case "tools/call": {
        const tool = byName.get(params?.name);
        if (!tool) return fail(id, -32602, `Unknown tool: ${str(params?.name, 80)}`);
        try {
          const data = await tool.run(params?.arguments && typeof params.arguments === "object" ? params.arguments : {});
          return ok(id, { content: [{ type: "text", text: JSON.stringify(data, null, 1) }], structuredContent: data, isError: false });
        } catch (e) {
          const text = e instanceof ToolError ? e.message : "The data source is unavailable. Try again later.";
          return ok(id, { content: [{ type: "text", text }], isError: true });
        }
      }
      default:
        return fail(id, -32601, `Method not found: ${method}`);
    }
  }

  return {
    async handle(msg) {
      if (Array.isArray(msg)) {
        if (!msg.length) return fail(null, -32600, "Invalid Request");
        const out = (await Promise.all(msg.slice(0, 20).map(one))).filter(Boolean);
        return out.length ? out : undefined;
      }
      return one(msg);
    },
  };
}

// Shared data loaders: a URL (fetch, cached for ttl ms) or, in Node, a local file path.
export function makeLoaders({ itemsSrc, pagesSrc, fetchImpl = fetch, readFile, ttlMs = 10 * 60 * 1000 }) {
  const cache = new Map();
  const load = (src) => async () => {
    const hit = cache.get(src);
    if (hit && Date.now() - hit.at < ttlMs) return hit.data;
    let data;
    if (/^https?:/.test(src)) {
      const r = await fetchImpl(src, { headers: { accept: "application/json" } });
      if (!r.ok) throw new Error(`${src}: HTTP ${r.status}`);
      data = await r.json();
    } else {
      data = JSON.parse(await readFile(src, "utf8"));
    }
    cache.set(src, { at: Date.now(), data });
    return data;
  };
  return { loadItems: load(itemsSrc), loadPages: load(pagesSrc) };
}

export async function fetchTextLimited(url, fetchImpl = fetch) {
  const r = await fetchImpl(url);
  if (!r.ok) throw new Error(`${url}: HTTP ${r.status}`);
  return await r.text();
}
