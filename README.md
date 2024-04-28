Hono Sessions seems to have a dependency on node:crypto that causes a failure when running on Cloudflare
```txt
npm install
npm run build
npm run preview
```

Returns the error:

```
✘ [ERROR] 1 error(s) and 0 warning(s) when compiling Worker.
▲ [WARNING] Failed to bundle _worker.js. Error: Build failed with 1 error:
  _worker.js:1:538: ERROR: Could not resolve "crypto"
      at failureErrorWithLog (/Users/anthony/dev/my-app/node_modules/esbuild/lib/main.js:1636:15)
      at /Users/anthony/dev/my-app/node_modules/esbuild/lib/main.js:1048:25
      at /Users/anthony/dev/my-app/node_modules/esbuild/lib/main.js:1512:9
      at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
    errors: [
      {
        detail: undefined,
        id: '',
        location: [Object],
        notes: [Array],
        pluginName: '',
        text: 'Could not resolve "crypto"'
      }
    ],
    warnings: []
  }
```

This fails even when enabling NodeJS compatibility in wrangler.toml which gives access to some of the Node crypto APIs:

```toml
compatibility_flags = [ "nodejs_compat" ]
```