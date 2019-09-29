//definimos variables globales para los colores, en string
//1 para cada cyadrabte y para los que caen en las medianas
var color1 = "#ef9a9a",
  color2 = "#7986cb",
  color3 = "#ab47bc",
  color4 = "#66bb6a",
  colorLinea = "#333333";

// datos por defecto
var Defaultdata = [
  { x: 162, y: 94.6 },
  { x: 154, y: 93 },
  { x: 148, y: 93.9 },
  { x: 116, y: 92.7 },
  { x: 152, y: 92.8 },
  { x: 136, y: 92.5 },
  { x: 158, y: 93.5 },
  { x: 126, y: 91.5 },
  { x: 140, y: 93.8 },
  { x: 160, y: 93.6 },
  { x: 160, y: 92.6 },
  { x: 160, y: 94.1 },
  { x: 144, y: 92.9 },
  { x: 120, y: 91 },
  { x: 126, y: 92 },
  { x: 134, y: 92.4 },
  { x: 164, y: 93.4 },
  { x: 162, y: 93.6 },
  { x: 132, y: 92.3 },
  { x: 130, y: 91.1 },
  { x: 170, y: 93 },
  { x: 148, y: 91.4 },
  { x: 144, y: 93 },
  { x: 112, y: 91.6 },
  { x: 126, y: 92 },
  { x: 160, y: 94 },
  { x: 110, y: 91.3 },
  { x: 138, y: 92.5 },
  { x: 140, y: 92 },
  { x: 150, y: 92.2 },
  { x: 134, y: 92 },
  { x: 162, y: 93.5 },
  { x: 180, y: 95.2 },
  { x: 142, y: 92.1 },
  { x: 152, y: 92.4 },
  { x: 170, y: 92.9 },
  { x: 150, y: 91.5 },
  { x: 160, y: 93 },
  { x: 104, y: 91 },
  { x: 130, y: 92.5 },
  { x: 160, y: 93.1 },
  { x: 138, y: 93 },
  { x: 152, y: 93.4 },
  { x: 130, y: 93.4 },
  { x: 110, y: 92 },
  { x: 120, y: 92.5 },
  { x: 110, y: 92.3 },
  { x: 152, y: 92.8 },
  { x: 172, y: 92 },
  { x: 126, y: 92.6 }
];

var tablaValores = [
  { puntos: 20, limite: 5 },
  { puntos: 21, limite: 5 },
  { puntos: 22, limite: 5 },
  { puntos: 23, limite: 6 },
  { puntos: 24, limite: 6 },
  { puntos: 25, limite: 7 },
  { puntos: 26, limite: 7 },
  { puntos: 27, limite: 7 },
  { puntos: 28, limite: 8 },
  { puntos: 29, limite: 8 },
  { puntos: 30, limite: 9 },
  { puntos: 31, limite: 9 },
  { puntos: 32, limite: 9 },
  { puntos: 33, limite: 9 },
  { puntos: 34, limite: 10 },
  { puntos: 35, limite: 10 },
  { puntos: 36, limite: 11 },
  { puntos: 37, limite: 12 },
  { puntos: 38, limite: 12 },
  { puntos: 39, limite: 12 },
  { puntos: 40, limite: 13 },
  { puntos: 41, limite: 13 },
  { puntos: 42, limite: 14 },
  { puntos: 43, limite: 14 },
  { puntos: 44, limite: 15 },
  { puntos: 45, limite: 15 },
  { puntos: 46, limite: 15 },
  { puntos: 47, limite: 16 },
  { puntos: 48, limite: 16 },
  { puntos: 49, limite: 17 },
  { puntos: 50, limite: 17 },
  { puntos: 51, limite: 18 },
  { puntos: 52, limite: 18 },
  { puntos: 53, limite: 18 },
  { puntos: 54, limite: 19 },
  { puntos: 55, limite: 19 },
  { puntos: 56, limite: 20 },
  { puntos: 57, limite: 20 },
  { puntos: 58, limite: 21 },
  { puntos: 59, limite: 21 },
  { puntos: 60, limite: 21 },
  { puntos: 61, limite: 22 },
  { puntos: 62, limite: 22 },
  { puntos: 63, limite: 23 },
  { puntos: 64, limite: 23 },
  { puntos: 65, limite: 24 },
  { puntos: 66, limite: 24 },
  { puntos: 67, limite: 25 },
  { puntos: 68, limite: 25 },
  { puntos: 69, limite: 25 },
  { puntos: 70, limite: 26 },
  { puntos: 71, limite: 26 },
  { puntos: 72, limite: 27 },
  { puntos: 73, limite: 27 },
  { puntos: 74, limite: 28 },
  { puntos: 75, limite: 28 },
  { puntos: 76, limite: 28 },
  { puntos: 77, limite: 29 },
  { puntos: 78, limite: 29 },
  { puntos: 79, limite: 30 },
  { puntos: 80, limite: 20 },
  { puntos: 81, limite: 31 },
  { puntos: 82, limite: 31 },
  { puntos: 83, limite: 32 },
  { puntos: 84, limite: 32 },
  { puntos: 85, limite: 32 },
  { puntos: 86, limite: 33 },
  { puntos: 87, limite: 33 },
  { puntos: 88, limite: 34 },
  { puntos: 89, limite: 34 },
  { puntos: 90, limite: 35 }
];
// almacenamos cada variable en su propio arreglo
var x = [];
var y = [];
Defaultdata.forEach(value => {
  x.push(value.x);
  y.push(value.y);
});
// calculamos los minimos,maximos y medianas de cada variable para graficar en el diagrama
xMedian = ss.median(x);
yMedian = ss.median(y);
xMin = ss.min(x);
xMax = ss.max(x);
yMin = ss.min(y);
yMax = ss.max(y);

//definimos arreglos que almacenan los puntos de cada cuadrante
var array1 = [],
  array2 = [],
  array3 = [],
  array4 = [];
//ForEach para los condicionales de clasificacion de los cuadrantes
Defaultdata.forEach(value => {
  //condicionales
  // cuadrante 1
  if (value.x > xMedian && value.y > yMedian) array1.push(value);
  // cuadrante 2
  if (value.x < xMedian && value.y > yMedian) array2.push(value);
  // cuadrante 3
  if (value.x < xMedian && value.y < yMedian) array3.push(value);
  // cuadrante 4
  if (value.x > xMedian && value.y < yMedian) array4.push(value);
});

resultados();
function resultados() {
  var suma = array1.length + array2.length + array3.length + array4.length;
  document.getElementById("totalPuntos").innerText += "  " + Defaultdata.length;
  document.getElementById("medianas").innerText +=
    " Temperatura " + xMedian + "  Rendimiento: " + yMedian;
  document.getElementById("puntosRestantes").innerText += "  " + suma;
  document.getElementById("puntosCuadrantes").innerHTML +=
    "Cuadrante I: " +
    array1.length +
    "puntos" +
    "<br>" +
    "Cuadrante II: " +
    array2.length +
    "puntos" +
    "<br>" +
    "Cuadrante III: " +
    array3.length +
    "puntos" +
    "<br>" +
    "Cuadrante IV: " +
    array4.length +
    "puntos";

  //-finaliza la impresion de cuadrantes
  let sumaOpuestos13 = array1.length + array3.length;
  let sumaOpuestos24 = array2.length + array4.length;
  let opuestos =
    sumaOpuestos13 < sumaOpuestos24
      ? " I y III con: " + sumaOpuestos13 + " puntos" + "( VALOR DE PRUEBA)"
      : " II y IV con: " + sumaOpuestos24 + " puntos" + "( VALOR DE PRUEBA)";
  document.getElementById("opuestos").innerHTML += opuestos;
  //correlacion
  let valorPrueba =
    sumaOpuestos13 < sumaOpuestos24 ? sumaOpuestos13 : sumaOpuestos24;
  verificarCor = verificarCorrelacion(tablaValores, suma, valorPrueba);
  let resCorrelacion =
    verificarCor.correlacion == true
      ? "SI existe una correlacion con una probabilidad de error inferior al 5% debido a que el valor de prueba es inferior al limite establecido.    "
      : "NO existe correlacion.  ";
  resCorrelacion += " " + verificarCor.comparacion;
  console.log(verificarCorrelacion(tablaValores, suma, valorPrueba));
  document.getElementById("correlacion").innerHTML += resCorrelacion;
}

plot2();
function plot2() {
  var ctx = document.getElementById("myChart").getContext("2d");

  // los dos puntos que permitiran cada divisor de los cuadrantes
  dataFirstDivider = [{ x: xMedian, y: yMin }, { x: xMedian, y: yMax }];
  dataSecondDivider = [{ y: yMedian, x: xMin }, { y: yMedian, x: xMax }];

  var scatterChart = new Chart(ctx, {
    type: "scatter",
    data: {
      datasets: [
        {
          label: "Mediana de la temperatura",
          data: dataFirstDivider,
          showLine: true,
          fill: false
        },
        {
          label: "Mediana del rendimiento",
          data: dataSecondDivider,
          showLine: true,
          fill: false
        },
        {
          label: "cuadrante1",
          data: array1,
          backgroundColor: color1
        },
        {
          label: "cuadrante2",
          data: array2,
          backgroundColor: color2
        },
        {
          label: "cuadrante3",
          data: array3,
          backgroundColor: color3
        },
        {
          label: "cuadrante4",
          data: array4,
          backgroundColor: color4
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
      title: {
        display: true,
        text: "Test de medianas",
        fontSize: 18
      },
      scales: {
        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "RENDIMIENTO"
            }
          }
        ],
        xAxes: [
          {
            type: "linear",
            position: "bottom",
            ticks: {
              beginAtZero: false
            },
            scaleLabel: {
              display: true,
              labelString: "TEMPERATURA"
            }
          }
        ]
      }
    }
  });
}

function verificarCorrelacion(tablaValores, nPuntos, valorPrueba) {
  for (let index = 0; index < tablaValores.length; index++) {
    const element = tablaValores[index];
    if (element.puntos == nPuntos) {
      console.log(element);
      flag = element.limite > valorPrueba ? true : false;
      return {
        correlacion: flag,
        comparacion:
          "Valor de prueba:" + valorPrueba + " Limite:" + element.limite + " "
      };
    }
  }
}
