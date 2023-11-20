import { Host, h } from "@stencil/core";
export class DocumentBack {
  render() {
    return (h(Host, null, h("slot", null)));
  }
  static get is() { return "document-back"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["document-back.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["document-back.css"]
    };
  }
}
//# sourceMappingURL=document-back.js.map
