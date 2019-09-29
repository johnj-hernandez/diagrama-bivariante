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
      ? " I y III con: " + sumaOpuestos13 + " puntos"
      : " II y IV con: " + sumaOpuestos24 + " puntos";
  document.getElementById("opuestos").innerHTML += opuestos;
}
// los dos puntos que permitiran cada divisor de los cuadrantes
dataFirstDivider = [{ x: xMedian, y: yMin }, { x: xMedian, y: yMax }];
dataSecondDivider = [{ y: yMedian, x: xMin }, { y: yMedian, x: xMax }];

plot2();
function plot2() {
  var ctx = document.getElementById("myChart").getContext("2d");
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
