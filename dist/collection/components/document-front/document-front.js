import { Host, h } from "@stencil/core";
export class DocumentFront {
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get is() { return "document-front"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["document-front.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["document-front.css"]
    };
  }
}
//# sourceMappingURL=document-front.js.map
