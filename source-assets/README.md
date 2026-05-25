# Source Assets

Drop manually downloaded physician photos, logos, or other current-site assets here.

Recommended photo filenames:

- `maya-patel.jpg`
- `andrew-miller.jpg`
- `lena-chen.jpg`
- `samuel-brooks.jpg`

Then run:

```bash
npm run assets:ingest
```

The script copies supported image files into `public/physicians` and writes `content/audit/asset-manifest.json`.
