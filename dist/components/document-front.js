import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const documentFrontCss = ":host{display:block}";

const DocumentFront$1 = /*@__PURE__*/ proxyCustomElement(class DocumentFront extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get style() { return documentFrontCss; }
}, [1, "document-front"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["document-front"];
  components.forEach(tagName => { switch (tagName) {
    case "document-front":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, DocumentFront$1);
      }
      break;
  } });
}

const DocumentFront = DocumentFront$1;
const defineCustomElement = defineCustomElement$1;

export { DocumentFront, defineCustomElement };

//# sourceMappingURL=document-front.js.map