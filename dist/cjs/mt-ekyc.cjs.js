'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-49b666f1.js');

/*
 Stencil Client Patch Browser v4.7.2 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('mt-ekyc.cjs.js', document.baseURI).href));
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["camera-preview.cjs",[[1,"camera-preview"]]],["document-back.cjs",[[1,"document-back"]]],["document-front.cjs",[[1,"document-front"]]]], options);
});

exports.setNonce = index.setNonce;

//# sourceMappingURL=mt-ekyc.cjs.js.map