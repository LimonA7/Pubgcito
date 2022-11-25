function moverPosicionRandom(elm) {
  elm.style.position = 'absolute';
  elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeight) + 'px';
  elm.style.left = Math.random() * (window.innerHeight - elm.offsetHeight) + 'px';
}

let btnSi = document.getElementById("btn_si")
let btnNo = document.getElementById("btn_no")
let divModoGamer = document.getElementsByClassName("modo_gamer")[0]

btnNo.addEventListener('mouseenter', function(e) { moverPosicionRandom(e.target) })

btnSi.addEventListener('click', function(e) {
  alert('Sabia que dirias que Siiiiiuuuu... TE AMOOOOO ❤💕');

  divModoGamer.style.display = 'block';
  const cancion = new Audio('Img\\PUBG Mobile Theme.mp3');
  cancion.play();
})