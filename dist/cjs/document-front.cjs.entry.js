'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-2648c039.js');

const documentFrontCss = ":host{display:block}";

const DocumentFront = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null)));
  }
};
DocumentFront.style = documentFrontCss;

exports.document_front = DocumentFront;

//# sourceMappingURL=document-front.cjs.entry.js.map