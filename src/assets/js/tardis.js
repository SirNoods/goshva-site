// TARDIS@joshs.tech
const TARDIS = ['t','a','r','d','i','s'];
let buffer = [];

window.addEventListener('keydown', e => {
  buffer.push(e.key.toLowerCase());
  // last 6 keys only
  if (buffer.length > 6) buffer.shift();

  if (buffer.join('') === TARDIS.join('')) {
    activateTardisMode();
    buffer = [];
  }
});

function activateTardisMode() {
  console.log("%cHello, Sweetie", "color:#83a598;font-size:14px;");
  const sound = new Audio('/assets/itscalledatardis.mp3');
  sound.volume = 0.7;
  sound.play();

  document.body.classList.add('tardis-mode');

  const overlay = document.createElement('div');
  overlay.className = 'tardis-overlay';
  overlay.innerText = "Bigger on the inside...";
  document.body.appendChild(overlay);

  setTimeout(() => {
    document.body.classList.add('tardis-fadeout');
  }, 7000);

  setTimeout(() => {
    document.body.classList.remove('tardis-mode', 'tardis-fadeout');
    overlay.remove();
  }, 10000);
}
