import { h } from "@stencil/core";
export class CameraPreview {
  constructor() {
    this.test = 'hello';
  }
  componentDidLoad() {
    this.play();
  }
  async play() {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        aspectRatio: 1.7777777778,
        facingMode: 'environment',
      },
    });
    this.camera.srcObject = stream;
    await this.camera.play();
  }
  takePhoto() {
    const canvas = document.createElement('canvas');
    canvas.width = this.camera.videoWidth;
    canvas.height = this.camera.videoHeight;
    canvas.getContext('2d').drawImage(this.camera, 0, 0);
    const base64Image = canvas.toDataURL('image/webp');
    this.photo.src = base64Image;
    this.photoTaked.emit(base64Image);
  }
  render() {
    return (h("div", null, h("video", { ref: el => (this.camera = el) }), h("img", { ref: el => (this.photo = el) }), h("button", { onClick: () => this.takePhoto() }, "Take photo")));
  }
  static get is() { return "camera-preview"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["camera-preview.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["camera-preview.css"]
    };
  }
  static get events() {
    return [{
        "method": "photoTaked",
        "name": "photoTaked",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        }
      }];
  }
}
//# sourceMappingURL=camera-preview.js.map
