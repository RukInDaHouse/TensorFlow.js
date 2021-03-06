$(document).ready(function() {
  const video = $('#webcam')[0];
  const ctrack = new clm.tracker();
  ctrack.init();
  const overlay = $('#overlay')[0];
const overlayCC = overlay.getContext('2d');

function trackingLoop() {
  // Проверим, обнаружено ли в видеопотоке лицо, 
  // и если это так - начнём его отслеживать.
  requestAnimationFrame(trackingLoop);

  let currentPosition = ctrack.getCurrentPosition();
  overlayCC.clearRect(0, 0, 400, 300);

  if (currentPosition) {
    ctrack.draw(overlay);
  }
}

  function onStreaming(stream) {
    video.srcObject = stream;
    ctrack.start(video);

  }

  navigator.mediaDevices.getUserMedia({ video: true }).then(onStreaming);
});