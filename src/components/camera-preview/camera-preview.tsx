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

  test = 'hello';

  videoDevices: MediaDeviceInfo[];

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
    return (
      <div>
        <video ref={el => (this.camera = el as HTMLVideoElement)}></video>

        <img ref={el => (this.photo = el as HTMLImageElement)} />

        <button onClick={() => this.takePhoto()}>Take photo</button>
      </div>
    );
  }
}
