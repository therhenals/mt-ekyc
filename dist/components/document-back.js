import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const documentBackCss = ":host{display:block}";

const DocumentBack$1 = /*@__PURE__*/ proxyCustomElement(class DocumentBack extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get style() { return documentBackCss; }
}, [1, "document-back"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["document-back"];
  components.forEach(tagName => { switch (tagName) {
    case "document-back":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, DocumentBack$1);
      }
      break;
  } });
}

const DocumentBack = DocumentBack$1;
const defineCustomElement = defineCustomElement$1;

export { DocumentBack, defineCustomElement };

//# sourceMappingURL=document-back.js.map