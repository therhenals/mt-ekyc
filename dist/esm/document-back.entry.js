import { r as registerInstance, h, H as Host } from './index-f3f9573a.js';

const documentBackCss = ":host{display:block}";

const DocumentBack = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
};
DocumentBack.style = documentBackCss;

export { DocumentBack as document_back };

//# sourceMappingURL=document-back.entry.js.map