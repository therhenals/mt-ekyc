export async function loadDevices() {
  const constraints = { video: true, audio: false };
  const stream = await navigator.mediaDevices.getUserMedia(constraints);
  const devices = await navigator.mediaDevices.enumerateDevices();
  var cameraDevices: MediaDeviceInfo[] = [];
  for (var i = 0; i < devices.length; i++) {
    var device = devices[i];
    if (device.kind == 'videoinput') {
      cameraDevices.push(device);
    }
  }
  this.devices = cameraDevices;

  const tracks = stream.getTracks();
  for (let i = 0; i < tracks.length; i++) {
    const track = tracks[i];
    track.stop();
  }
}
