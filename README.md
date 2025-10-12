# hyperlink-preview-card 🔗

> High-performance OpenGraph metadata extraction and link preview generator with built-in LRU caching.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue)](https://www.typescriptlang.org/)

## Features
- ⚡ **Blazing Fast**: Sub-10ms response times for cached URLs using in-memory LRU storage.
- 🛡️ **Resilient Parser**: Gracefully handles missing tags, redirects, and irregular HTML.
- 📦 **Zero-Config**: Plug into any Next.js, Express, or Fastify API route.

## Installation
```bash
npm install hyperlink-preview-card
```

## Quick Start
```typescript
import { extractMetadata } from "hyperlink-preview-card";

const preview = await extractMetadata("https://github.com/ThevinuGunawardena");
console.log(preview.title, preview.image);
```

## License
MIT © [Thevinu Gunawardena](https://github.com/ThevinuGunawardena)
