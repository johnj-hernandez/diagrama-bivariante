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

var x = [];
var y = [];
Defaultdata.forEach(value => {
  x.push(value.x);
  y.push(value.y);
});
xMedian = ss.median(x);
yMedian = ss.median(y);

plot2();

function exampleChart() {
  var ctx = document.getElementById("myChart").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)"
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)"
          ],
          borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  });
}

function plotLineChart() {
  var ctx = document.getElementById("myChart").getContext("2d");
  var speedData = {
    labels: x,
    datasets: [
      {
        label: "Car Speed",
        data: y
      }
    ]
  };

  var chartOptions = {
    legend: {
      display: true,
      position: "top",
      labels: {
        boxWidth: 80,
        fontColor: "black"
      }
    }
  };
  var myLineChart = new Chart(ctx, {
    type: "line",
    data: speedData,
    options: chartOptions,
    lineAtIndex: [2, 4, 8]
  });
}
function plot() {
  var ctx = document.getElementById("myChart").getContext("2d");
  var scatterChart = new Chart(ctx, {
    type: "scatter",
    data: {
      datasets: [
        {
          label: "Scatter Dataset",
          data: Defaultdata,
          showLine: true,
          fill: false
        }
      ]
    },
    options: {
      scales: {
        xAxes: [
          {
            type: "linear",
            position: "bottom"
          }
        ]
      }
    }
  });
}

function plot2() {
  var ctx = document.getElementById("myChart").getContext("2d");
  var scatterChart = new Chart(ctx, {
    type: "scatter",
    data: {
      datasets: [
        {
          label: "Scatter Dataset",
          data: [{ x: 0, y: 0 }, { x: 5, y: 5 }],
          showLine: true,
          fill: false
        },
        {
          label: "Scatter Dataset",
          data: [{ x: 0, y: 0 }, { x: 2, y: 5 }],
          showLine: true,
          fill: false
        },
        {
          label: "Scatter Dataset",
          data: Defaultdata
        }
      ]
    },
    options: {
      scales: {
        xAxes: [
          {
            type: "linear",
            position: "bottom"
          }
        ]
      }
    }
  });
}
