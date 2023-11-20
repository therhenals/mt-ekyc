import { Component, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'camera-preview',
  styleUrl: 'camera-preview.css',
  shadow: true,
})
export class CameraPreview {
  camera: HTMLVideoElement;
  photo: HTMLImageElement;

  @Event() photoTaked: EventEmitter<string>;

  videoDevices: MediaDeviceInfo[];

  componentDidLoad() {
    this.play();
  }

  async play() {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        width: {
          min: 1280,
          ideal: 1920,
          max: 2560,
        },
        height: {
          min: 720,
          ideal: 1080,
          max: 1440,
        },
        facingMode: 'environment',
      },
    });

    this.camera.srcObject = stream;

    await this.camera.play();
  }

  takePhoto() {
    const canvas = document.createElement('canvas');

    const resolutionMultiplier = 3;

    canvas.width = this.camera.clientWidth * resolutionMultiplier;
    canvas.height = this.camera.clientHeight * resolutionMultiplier;

    const videoAspectRatio = this.camera.videoWidth / this.camera.videoHeight;
    const canvasAspectRatio = canvas.width / canvas.height;

    let sx: number, sy: number, sw: number, sh: number;

    if (videoAspectRatio > canvasAspectRatio) {
      // El video es más ancho, recorta en la alturas
      sw = this.camera.videoHeight * canvasAspectRatio;
      sh = this.camera.videoHeight;
      sx = (this.camera.videoWidth - sw) / 2;
      sy = 0;
    } else {
      // El video es más alto o tiene el mismo aspect ratio, recorta en la anchura
      sw = this.camera.videoWidth;
      sh = this.camera.videoWidth / canvasAspectRatio;
      sx = 0;
      sy = (this.camera.videoHeight - sh) / 2;
    }

    canvas.getContext("2d").drawImage(this.camera, sx, sy, sw, sh, 0, 0, canvas.width, canvas.height);

    // canvas.getContext('2d').drawImage(this.camera, 0, 0);

    const base64Image = canvas.toDataURL('image/webp');

    this.photo.src = base64Image;

    this.photoTaked.emit(base64Image);
  }

  render() {
    return (
      <div>
        <div class="video-container">
          <video ref={el => (this.camera = el as HTMLVideoElement)}></video>
        </div>

        <img ref={el => (this.photo = el as HTMLImageElement)} />

        <button onClick={() => this.takePhoto()}>Take photo</button>
      </div>
    );
  }
}
