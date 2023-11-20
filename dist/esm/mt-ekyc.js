import { p as promiseResolve, b as bootstrapLazy } from './index-708bf438.js';
export { s as setNonce } from './index-708bf438.js';

/*
 Stencil Client Patch Browser v4.7.2 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["camera-preview",[[1,"camera-preview"]]],["document-back",[[1,"document-back"]]],["document-front",[[1,"document-front"]]]], options);
});

//# sourceMappingURL=mt-ekyc.js.map