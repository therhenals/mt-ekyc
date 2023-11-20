'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-2648c039.js');

const cameraPreviewCss = ":host{display:block}video{width:100%;height:200px;border-radius:8px}img{width:100%;border-radius:8px}";

const CameraPreview = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.photoTaked = index.createEvent(this, "photoTaked", 7);
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
    return (index.h("div", null, index.h("video", { ref: el => (this.camera = el) }), index.h("img", { ref: el => (this.photo = el) }), index.h("button", { onClick: () => this.takePhoto() }, "Take photo")));
  }
};
CameraPreview.style = cameraPreviewCss;

exports.camera_preview = CameraPreview;

//# sourceMappingURL=camera-preview.cjs.entry.js.map