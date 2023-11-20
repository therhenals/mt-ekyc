import { EventEmitter } from '../../stencil-public-runtime';
export declare class CameraPreview {
  camera: HTMLVideoElement;
  photo: HTMLImageElement;
  photoTaked: EventEmitter<string>;
  test: string;
  videoDevices: MediaDeviceInfo[];
  componentDidLoad(): void;
  play(): Promise<void>;
  takePhoto(): void;
  render(): any;
}
