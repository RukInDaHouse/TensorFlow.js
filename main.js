$(document).ready(function() {
  const video = $('#webcam')[0];
  const ctrack = new clm.tracker();
  ctrack.init();

  function onStreaming(stream) {
    video.srcObject = stream;
    ctrack.start(video);
  }

  navigator.mediaDevices.getUserMedia({ video: true }).then(onStreaming);
});