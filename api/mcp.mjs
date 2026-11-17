// Remote MCP endpoint (Streamable HTTP, stateless, JSON replies only). Deployed as api/mcp.mjs; /mcp is rewritten to it.
// Read-only and public: no auth, CORS open, body capped. The data is the public catalog.
import { createServer, fetchTextLimited, makeLoaders } from "./_core.mjs";

const SITE = process.env.MVW_SITE || "https://production-warehouse.suenot.com";
const MEDIA = process.env.MVW_MEDIA || "https://media.production-warehouse.suenot.com";
const { loadItems, loadPages } = makeLoaders({
  itemsSrc: process.env.MVW_ITEMS || `${MEDIA}/items.json`,
  pagesSrc: process.env.MVW_PAGES || `${SITE}/techniques.json`,
});
const mcp = createServer({ loadItems, loadPages, mediaBase: MEDIA, siteBase: SITE, fetchText: fetchTextLimited });

const MAX_BODY = 100_000;
const CORS = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "POST, OPTIONS",
  "access-control-allow-headers": "content-type, accept, mcp-protocol-version, mcp-session-id",
  "access-control-max-age": "86400",
};

async function readBody(req) {
  if (req.body !== undefined && req.body !== null) {
    return typeof req.body === "string" ? req.body : Buffer.isBuffer(req.body) ? req.body.toString("utf8") : JSON.stringify(req.body);
  }
  let size = 0;
  const chunks = [];
  for await (const c of req) {
    size += c.length;
    if (size > MAX_BODY) throw new Error("too large");
    chunks.push(c);
  }
  return Buffer.concat(chunks).toString("utf8");
}

export default async function handler(req, res) {
  for (const [k, v] of Object.entries(CORS)) res.setHeader(k, v);
  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST") {
    res.setHeader("allow", "POST, OPTIONS");
    return res.status(405).json({ jsonrpc: "2.0", id: null, error: { code: -32000, message: "Use POST with a JSON-RPC message." } });
  }
  let msg;
  try {
    const raw = await readBody(req);
    if (raw.length > MAX_BODY) throw new Error("too large");
    msg = JSON.parse(raw);
  } catch {
    return res.status(400).json({ jsonrpc: "2.0", id: null, error: { code: -32700, message: "Parse error or body over 100 KB" } });
  }
  const reply = await mcp.handle(msg);
  if (reply === undefined) return res.status(202).end();
  res.setHeader("cache-control", "no-store");
  return res.status(200).json(reply);
}
