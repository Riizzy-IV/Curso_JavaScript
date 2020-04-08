var pl = document.getElementById("play");
var st = document.getElementById("stop");

var p = 0;
var mv;

pl.onclick = function () {
  function movimenta() {
    p += 10;
    document.getElementById("img").style.marginLeft = p + "px";
  }
  mv = window.setInterval(movimenta, 00);
};
st.onclick = function () {
  clearTimeout(mv);
};
