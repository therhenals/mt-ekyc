import { r as registerInstance, h, H as Host } from './index-f3f9573a.js';

const documentFrontCss = ":host{display:block}";

const DocumentFront = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
};
DocumentFront.style = documentFrontCss;

export { DocumentFront as document_front };

//# sourceMappingURL=document-front.entry.js.map