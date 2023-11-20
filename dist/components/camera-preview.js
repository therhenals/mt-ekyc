import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';

const cameraPreviewCss = ":host{display:block}video{width:100%;border-radius:8px}img{width:100%;border-radius:8px}";

const CameraPreview$1 = /*@__PURE__*/ proxyCustomElement(class CameraPreview extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.photoTaked = createEvent(this, "photoTaked", 7);
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
  static get style() { return cameraPreviewCss; }
}, [1, "camera-preview"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["camera-preview"];
  components.forEach(tagName => { switch (tagName) {
    case "camera-preview":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CameraPreview$1);
      }
      break;
  } });
}

const CameraPreview = CameraPreview$1;
const defineCustomElement = defineCustomElement$1;

export { CameraPreview, defineCustomElement };

//# sourceMappingURL=camera-preview.js.map