var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var mapa = "tile.png";

var fondo = {
    url: "tile.png",
    cargaOK: false
}

var vaca = {
    url: "vaca.png",
    cargaOK: false
}

var cerdo = {
    url: "cerdo.png",
    cargaOK: false
}

var pollo = {
    url: "pollo.png",
    cargaOK: false
}

var cantidadVacas = aleatorio(0,8);
var cantidadCerdos = aleatorio(0,5);
var cantidadPollos = aleatorio(0,12);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;  
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;  
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;  
pollo.imagen.addEventListener("load", cargarPollos);

function cargarFondo() {
  fondo.cargaOK = true;
  dibujar();
}

function cargarVacas() {
    vaca.cargaOK = true;
    dibujar();
  }

  function cargarCerdos() {
    cerdo.cargaOK = true;
    dibujar();
  }

  function cargarPollos() {
    pollo.cargaOK = true;
    dibujar();
  }

function dibujar() {

    if (fondo.cargaOK == true) {
   papel.drawImage(fondo.imagen, 0, 0);
    }

    if (vaca.cargaOK == true) {
        for (v=0; v<cantidadVacas; v++) {
           // var x = aleatorio(0, 420); // 420 pq fondo es 500x500px y vaca es 80x80px, para que no salga cortada, pero asi pueden salir una encima de la otra
            var x = aleatorio(0, 6); // 6 pq se divide 500 el px de fondo entre80 los px de la vaca
            var y = aleatorio(0, 6);
            x = x*80;
            y = y*80;
            papel.drawImage(vaca.imagen, x, y);
        }
    }

    if (cerdo.cargaOK == true) {
        for (c=0; c<cantidadCerdos; c++) {
           // var x = aleatorio(0, 420); // 420 pq fondo es 500x500px y vaca es 80x80px, para que no salga cortada, pero asi pueden salir una encima de la otra
            var x = aleatorio(0, 6); // 6 pq se divide 500 el px de fondo entre80 los px de la vaca
            var y = aleatorio(0, 6);
            x = x*80;
            y = y*80;
            papel.drawImage(cerdo.imagen, x, y);
        }
    }

    if (pollo.cargaOK == true) {
        for (p=0; p<cantidadPollos; p++) {
           // var x = aleatorio(0, 420); // 420 pq fondo es 500x500px y vaca es 80x80px, para que no salga cortada, pero asi pueden salir una encima de la otra
            var x = aleatorio(0, 6); // 6 pq se divide 500 el px de fondo entre80 los px de la vaca
            var y = aleatorio(0, 6);
            x = x*80;
            y = y*80;
            papel.drawImage(pollo.imagen, x, y);
        }
    }
}

function aleatorio (min, max) {
    var resultado;
    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
}