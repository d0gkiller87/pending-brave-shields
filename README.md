## Summary

When all of the following conditions are met:

* Brave Shields is enabled and set to `Allow all trackers & ads`
* The page registers a service worker that returns a non-`undefined` value from the `fetch` event handler (for example, `self.addEventListener('fetch', () => null)`)
* A request is redirected to an extension resource

the redirected resource remains in the `Pending` state indefinitely and never completes.

If the affected request is a blocking resource, for example:

```html
<head>
  <script src="https://example.com/redirect_me.js"></script>
</head>
```

then subsequent page loading is also blocked.

## Steps to Reproduce

1. Clone the repository and install either `extension_v2` or `extension_v3` (both implement the same redirection logic)
2. Open https://d0gkiller87.github.io/pending-brave-shields/
3. Click `register service worker`
4. Refresh the page

## Actual Result

The redirected extension resource remains in the `Pending` state indefinitely, causing the page load to hang.

## Expected Result

The redirected extension resource should load normally and the page should continue loading without blocking.
