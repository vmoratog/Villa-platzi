var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var fondo = {url: "tile.png",cargaOK: false};
var vaca = {url: "vaca.png",cargaOK: false};
var cerdo = {url: "cerdo.png",cargaOK: false};
var pollo = {url: "pollo.png",cargaOK: false};
var lobo = {url: "lobito.png",cargaOK: false};
var teclas = {UP: 38,DOWN: 40,LEFT: 37,RIGHT: 39}; 

var cantidadVacas = aleatorio(0,8);
var cantidadPollos = aleatorio(0,12);
var cantidadCerdos = aleatorio(0,10);
var xLobo = 150, ylobo = 150;

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

lobo.imagen = new Image();
lobo.imagen.src = lobo.url;  
lobo.imagen.addEventListener("load", cargarLobo);

document.addEventListener("keydown", moverLobo);


function moverLobo(evento) {
    var movimiento = 10 

     switch (evento.keyCode) {
        case teclas.UP:
            if (ylobo > 0) { 
                ylobo = ylobo - movimiento;
                dibujar();
            }
        break;

        case teclas.DOWN:
            if (ylobo < 420) {
                ylobo = ylobo + movimiento;
                dibujar();
             }
        break;
          
        case teclas.LEFT:
            if (xLobo > 0) { // ensayar con 50 en lugar de 0 y cambiar x,y inicial a 50,50
                xLobo = xLobo - movimiento;
                dibujar();
            }
        break;

        case teclas.RIGHT:
            if(xLobo < 420) {
                xLobo = xLobo + movimiento;
                dibujar();
            }
        break;
        default:
        console.log("Presione otra tecla");
     }
}

function cargarFondo() {
  fondo.cargaOK = true;
  dibujar();
}

function cargarVacas() {
    vaca.cargaOK = true;
    vaca.x = [];
    vaca.y = [];
    mantenerPosicion();
  }

  function cargarCerdos() {
    cerdo.cargaOK = true;
    cerdo.x = [];
    cerdo.y = [];
    mantenerPosicion();  
}

function cargarLobo() {
    lobo.cargaOK = true;
    dibujar();  
}

  function cargarPollos() {
    pollo.cargaOK = true;
    pollo.x = [];
    pollo.y = [];
    mantenerPosicion();
  }


  function mantenerPosicion() {

    if (vaca.cargaOK == true) {
        for (i=0; i<cantidadVacas; i++) {
           // var x = aleatorio(0, 420); // 420 pq fondo es 500x500px y vaca es 80x80px, para que no salga cortada, pero asi pueden salir una encima de la otra
            var x = aleatorio(0, 6)*80; // 6 pq se divide 500 el px de fondo entre80 los px de la vaca
            var y = aleatorio(0, 6)*80;
            vaca.x[i] = x;
            vaca.y[i] = y;
        }
    }

    if (pollo.cargaOK == true) {
        for (i=0; i<cantidadPollos; i++) {
           // var x = aleatorio(0, 420); // 420 pq fondo es 500x500px y vaca es 80x80px, para que no salga cortada, pero asi pueden salir una encima de la otra
            var x = aleatorio(0, 6)*80; // 6 pq se divide 500 el px de fondo entre80 los px de la vaca
            var y = aleatorio(0, 6)*80;
            pollo.x[i] = x;
            pollo.y[i] = y;
        }
    }

    if (cerdo.cargaOK == true) {
        for (i=0; i<cantidadCerdos; i++) {
           // var x = aleatorio(0, 420); // 420 pq fondo es 500x500px y vaca es 80x80px, para que no salga cortada, pero asi pueden salir una encima de la otra
            var x = aleatorio(0, 6)*80; // 6 pq se divide 500 el px de fondo entre80 los px de la vaca
            var y = aleatorio(0, 6)*80;
            cerdo.x[i] = x;
            cerdo.y[i] = y;
        }
    }
    dibujar();
  }


function dibujar() {

    if (fondo.cargaOK == true) {
   papel.drawImage(fondo.imagen, 0, 0);
    }

    if (vaca.cargaOK) {
        for (var i = 0; i < cantidadVacas; i++) {
          papel.drawImage(vaca.imagen, vaca.x[i], vaca.y[i]);
        }
    }

    if (pollo.cargaOK) {
        for (var i = 0; i < cantidadPollos; i++) {
          papel.drawImage(pollo.imagen, pollo.x[i], pollo.y[i]);
        }
    }
      if (cerdo.cargaOK) {
        for (var i = 0; i < cantidadCerdos; i++) {
            papel.drawImage(cerdo.imagen, cerdo.x[i], cerdo.y[i]);
          }
    }

    if (lobo.cargaOK) {
        papel.drawImage(lobo.imagen, xLobo, ylobo);
  }
}

function aleatorio (min, max) {
    var resultado;
    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
}