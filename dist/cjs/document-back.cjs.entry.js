'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-2648c039.js');

const documentBackCss = ":host{display:block}";

const DocumentBack = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("slot", null)));
  }
};
DocumentBack.style = documentBackCss;

exports.document_back = DocumentBack;

//# sourceMappingURL=document-back.cjs.entry.js.map