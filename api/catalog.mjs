// Catalog API for the viewer (deployed as api/catalog.mjs, served at /catalog.json).
//   GET /catalog.json          the list without prompts and long fields: about 190 KB, 23 KB gzipped (the full file is 1 MB)
//   GET /catalog.json?id=<id>  one full item (prompt, links, documents)
// Both are cut from the same items.json the MCP server reads, and cached at the edge.
import { makeLoaders } from "./_core.mjs";

const MEDIA = process.env.MVW_MEDIA || "https://media.production-warehouse.suenot.com";
const { loadItems } = makeLoaders({ itemsSrc: process.env.MVW_ITEMS || `${MEDIA}/items.json`, pagesSrc: "" });

const CACHE = "public, max-age=300, s-maxage=3600, stale-while-revalidate=86400";

// What a card and the filters need. p is 1 when the item has a prompt; the prompt itself loads on demand.
export const slim = (it) => {
  const o = { id: it.id, title: it.title ?? null, source: it.source, author: it.author ?? null, category: it.category ?? null, poster: it.poster ?? null, p: it.prompt ? 1 : 0 };
  o.videos = it.videos?.original ? { original: it.videos.original } : {};
  return o;
};

export default async function handler(req, res) {
  res.setHeader("access-control-allow-origin", "*");
  if (req.method === "OPTIONS") {
    res.setHeader("access-control-allow-methods", "GET, OPTIONS");
    return res.status(204).end();
  }
  if (req.method !== "GET" && req.method !== "HEAD") return res.status(405).json({ error: "Use GET." });
  try {
    const items = await loadItems();
    const id = new URL(req.url, "http://x").searchParams.get("id");
    if (id) {
      const it = id.length <= 300 ? items.find((x) => x.id === id) : null;
      if (!it) {
        res.setHeader("cache-control", "public, max-age=60");
        return res.status(404).json({ error: "No such item." });
      }
      res.setHeader("cache-control", CACHE);
      return res.status(200).json(it);
    }
    res.setHeader("cache-control", CACHE);
    return res.status(200).json(items.map(slim));
  } catch {
    res.setHeader("cache-control", "no-store");
    return res.status(502).json({ error: "The data source is unavailable." });
  }
}
