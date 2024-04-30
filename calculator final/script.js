document.getElementById("cubecalcbtn").addEventListener("click", calcCube);
document.getElementById("sphcalcbtn").addEventListener("click", calcSph);
document.getElementById("cylcalcbtn").addEventListener("click", calcCyl);
document.getElementById("conecalcbtn").addEventListener("click", calcCone);
document.getElementById("pyrcalcbtn").addEventListener("click", calcPyr);
document.getElementById("rectcalcbtn").addEventListener("click", calcRect);

document.getElementById("cubebtn").addEventListener("click", showCube);
document.getElementById("sphbtn").addEventListener("click", showSph);
document.getElementById("cylbtn").addEventListener("click", showCyl);
document.getElementById("conebtn").addEventListener("click", showCone);
document.getElementById("pyrbtn").addEventListener("click", showPyr);
document.getElementById("rectbtn").addEventListener("click", showRect);

var s;
var r;
var h;
var l;
var w;
var unit;

function showCube() {
  document.getElementById("cube").style.display = "block";

  document.getElementById("sphere").style.display = "none";
  document.getElementById("cylinder").style.display = "none";
  document.getElementById("cone").style.display = "none";
  document.getElementById("pyramid").style.display = "none";
  document.getElementById("rectangularprism").style.display = "none";
  document.getElementById("calcbox").style.padding = "20px 0px";
}

function showSph() {
  document.getElementById("sphere").style.display = "block";

  document.getElementById("cube").style.display = "none";
  document.getElementById("cylinder").style.display = "none";
  document.getElementById("cone").style.display = "none";
  document.getElementById("pyramid").style.display = "none";
  document.getElementById("rectangularprism").style.display = "none";
  document.getElementById("calcbox").style.padding = "20px 0px";
}

function showCyl() {
  document.getElementById("cylinder").style.display = "block";

  document.getElementById("sphere").style.display = "none";
  document.getElementById("cube").style.display = "none";
  document.getElementById("cone").style.display = "none";
  document.getElementById("pyramid").style.display = "none";
  document.getElementById("rectangularprism").style.display = "none";
  document.getElementById("calcbox").style.padding = "20px 0px";
}

function showCone() {
  document.getElementById("cone").style.display = "block";

  document.getElementById("sphere").style.display = "none";
  document.getElementById("cylinder").style.display = "none";
  document.getElementById("cube").style.display = "none";
  document.getElementById("pyramid").style.display = "none";
  document.getElementById("rectangularprism").style.display = "none";
  document.getElementById("calcbox").style.padding = "20px 0px";
}

function showPyr() {
  document.getElementById("pyramid").style.display = "block";

  document.getElementById("sphere").style.display = "none";
  document.getElementById("cylinder").style.display = "none";
  document.getElementById("cone").style.display = "none";
  document.getElementById("cube").style.display = "none";
  document.getElementById("rectangularprism").style.display = "none";
  document.getElementById("calcbox").style.padding = "20px 0px";
}

function showRect() {
  document.getElementById("rectangularprism").style.display = "block";

  document.getElementById("sphere").style.display = "none";
  document.getElementById("cylinder").style.display = "none";
  document.getElementById("cone").style.display = "none";
  document.getElementById("pyramid").style.display = "none";
  document.getElementById("cube").style.display = "none";
  document.getElementById("calcbox").style.padding = "20px 0px";
}

function calcCube() {
  s = document.getElementById("cubecalc").value;
  unit = document.getElementById("cubeunit").value;

  var cubeSA = 6 * parseInt(s) ** 2;
  var cubeV = parseInt(s) ** 3;

  document.getElementById("cubeSA").innerHTML = cubeSA + unit;
  document.getElementById("cubeV").innerHTML = cubeV + unit;

  document.getElementById("cubecalc").value = "";
  document.getElementById("cubeunit").value = "";
}

function calcSph() {
  r = document.getElementById("sphcalc").value;
  unit = document.getElementById("sphunit").value;

  var sphSA = 4 * Math.PI * parseInt(r) ** 2;
  var sphV = (4 / 3) * Math.PI * parseInt(r) ** 3;

  document.getElementById("sphSA").innerHTML = sphSA + unit;
  document.getElementById("sphV").innerHTML = sphV + unit;

  document.getElementById("sphcalc").value = "";
  document.getElementById("sphunit").value = "";
}

function calcCyl() {
  r = document.getElementById("cylcalc").value;
  h = document.getElementById("cylcalc2").value;
  unit = document.getElementById("cylunit").value;

  var cylSA =
    2 * Math.PI * parseInt(r) * parseInt(h) + 2 * Math.PI * parseInt(r) ** 2;
  var cylV = Math.PI * parseInt(r) ** 2 * parseInt(h);

  document.getElementById("cylSA").innerHTML = cylSA + unit;
  document.getElementById("cylV").innerHTML = cylV + unit;

  document.getElementById("cylcalc").value = "";
  document.getElementById("cylcalc2").value = "";
  document.getElementById("cylunit").value = "";
}

function calcCone() {
  r = document.getElementById("conecalc").value;
  s = document.getElementById("conecalc2").value;
  h = document.getElementById("conecalc3").value;
  unit = document.getElementById("coneunit").value;

  var coneSA = Math.PI * parseInt(r) * parseInt(s) + Math.PI * parseInt(r) ** 2;
  var coneV = (1 / 3) * Math.PI * parseInt(r) ** 2 * h;

  document.getElementById("coneSA").innerHTML = coneSA;
  document.getElementById("coneV").innerHTML = coneV;

  document.getElementById("conecalc").value = "";
  document.getElementById("conecalc2").value = "";
  document.getElementById("conecalc3").value = "";
  document.getElementById("coneunit").value = "";
}

function calcPyr() {
  l = document.getElementById("pyrcalc").value;
  w = document.getElementById("pyrcalc2").value;
  h = document.getElementById("pyrcalc3").value;
  s = document.getElementById("pyrcalc4").value;
  unit = document.getElementById("pyrunit").value;

  var pyrSA = parseInt(l) ** 2 + 2 * parseInt(s) * parseInt(l);
  var pyrV = (parseInt(l) * parseInt(w) * parseInt(h)) / 3;

  document.getElementById("pyrSA").innerHTML = pyrSA + unit;
  document.getElementById("pyrV").innerHTML = pyrV + unit;

  document.getElementById("pyrcalc").value = "";
  document.getElementById("pyrcalc2").value = "";
  document.getElementById("pyrcalc3").value = "";
  document.getElementById("pyrcalc4").value = "";
  document.getElementById("pyrunit").value = "";
}

function calcRect() {
  l = document.getElementById("rectcalc").value;
  w = document.getElementById("rectcalc2").value;
  h = document.getElementById("rectcalc3").value;
  unit = document.getElementById("rectunit").value;

  var rectSA = +l * +w + +w * +h + +l * +h;
  var rectV = +l * +w * +h;

  document.getElementById("rectSA").innerHTML = rectSA + unit;
  document.getElementById("rectV").innerHTML = rectV + unit;

  document.getElementById("rectcalc").value = "";
  document.getElementById("rectcalc2").value = "";
  document.getElementById("rectcalc3").value = "";
  document.getElementById("rectunit").value = "";
}
