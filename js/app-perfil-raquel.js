
function addOverlay(contentSelector, overlaySelector) {
  const content = document.querySelector(contentSelector);
  const overlay = content.querySelector(overlaySelector);

  content.style.position = 'relative';
  content.style.display = 'inline-block';


  overlay.style.position = 'absolute';
  overlay.style.top = '0';
  overlay.style.bottom = '0';
  overlay.style.left = '0';
  overlay.style.right = '0';
  overlay.style.opacity = '0';
  overlay.style.transition = '.3s ease';
  overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  
  overlay.style.visibility = 'hidden';


  overlay.querySelector('p').style.color = 'white';
  overlay.querySelector('p').style.fontSize = '15px';
  overlay.querySelector('p').style.fontWeight = 'bold';
  overlay.querySelector('p').style.position = 'relative';
  overlay.querySelector('p').style.top = '50%';
  overlay.querySelector('p').style.left = '50%';
  overlay.querySelector('p').style.transform = 'translate(-50%, -50%)';
  overlay.querySelector('p').style.textAlign = 'center';

  content.addEventListener('mouseover', () => {
    overlay.style.opacity = '1';
    overlay.style.visibility = 'visible';
  });

  content.addEventListener('mouseout', () => {
    overlay.style.opacity = '0';
    overlay.style.visibility = 'hidden';
  });
}


function openOptions() {
  document.getElementById("options").style.display = "block";
}

function closeOptions() {
  document.getElementById("options").style.display = "none";
}

function reproduzirVideo() {
  var video = document.getElementById("meuVideo");
  video.style.display = "block";
  video.play();
}



function fecharVideo() {
  var video = document.getElementById("meuVideo");
  video.pause(); // Pausa a reprodução do vídeo
  video.style.display = "none"; // Oculta o elemento de vídeo
}