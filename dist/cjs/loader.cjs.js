'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-49b666f1.js');

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return undefined;
  return index.bootstrapLazy([["camera-preview.cjs",[[1,"camera-preview"]]],["document-back.cjs",[[1,"document-back"]]],["document-front.cjs",[[1,"document-front"]]]], options);
};

exports.setNonce = index.setNonce;
exports.defineCustomElements = defineCustomElements;

//# sourceMappingURL=loader.cjs.js.map