window.onload = function () {
  this.movimentar();
};
var p = 200;
var cx = document.getElementById("saida");
// function movimentar() {
//   if (p >= 400) {
//     p = 400;
//   } else {
//     p += 5;
//   }
//   p += 5;
//   cx.style.width = p + "px";
// }
function movimentar() {
  if (p >= 400) {
    clearInterval();
  } else {
    p += 5;
  }
  p += 5;
  cx.style.width = p + "px";
}
window.setInterval(movimentar, 500);
