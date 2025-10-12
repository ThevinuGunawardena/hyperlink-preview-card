import * as cheerio from "cheerio";
import { LRUCache } from "lru-cache";

export interface LinkMetadata {
  title?: string;
  description?: string;
  image?: string;
  url: string;
  siteName?: string;
}

const cache = new LRUCache<string, LinkMetadata>({ max: 500, ttl: 1000 * 60 * 60 });

export async function extractMetadata(targetUrl: string): Promise<LinkMetadata> {
  const cached = cache.get(targetUrl);
  if (cached) return cached;

  const res = await fetch(targetUrl, { headers: { "User-Agent": "HyperlinkPreviewBot/1.0" } });
  const html = await res.text();
  const $ = cheerio.load(html);

  const metadata: LinkMetadata = {
    title: $('meta[property="og:title"]').attr("content") || $("title").text() || "",
    description: $('meta[property="og:description"]').attr("content") || $('meta[name="description"]').attr("content") || "",
    image: $('meta[property="og:image"]').attr("content") || "",
    siteName: $('meta[property="og:site_name"]').attr("content") || "",
    url: targetUrl
  };

  cache.set(targetUrl, metadata);
  return metadata;
}
