# Site Audit Output

Run the public-site crawler with:

```bash
npm run audit:site -- https://example.com
```

It writes:

- `pages.json`
- `assets.json`
- `sitemap.txt`

Use these files to replace the sample physicians, services, locations, and contact details in `src/lib/content.ts`.
