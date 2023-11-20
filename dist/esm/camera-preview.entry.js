import { r as registerInstance, c as createEvent, h } from './index-f3f9573a.js';

const cameraPreviewCss = ":host{display:block}video{width:100%;height:200px;border-radius:8px}img{width:100%;border-radius:8px}";

const CameraPreview = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
};
CameraPreview.style = cameraPreviewCss;

export { CameraPreview as camera_preview };

//# sourceMappingURL=camera-preview.entry.js.map