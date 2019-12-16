const express = require('express')
var bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
let dataPieChart = require('./Data/DataPieChart')
let dataRankingChart = require('./Data/DataRankingChart')
let dataHeatMapChart = require('./Data/DataHeatMapChart')
let dataLineChart = require('./Data/DataLineChart')
const _ = require('lodash');
const nameOsArr = _.map(dataPieChart, (n) => ({ x: n.x }));
app.get('/', (req, res) => {
  res.send('hello from server!')
})

app.get('/api/get_data_pie_chart', (req, res) => {
  let coppyDataPieChart = [
    { x: "Android", y: _.random(0, 100) },
    { x: "Windows", y: _.random(0, 100) },
    { x: "Ios", y: _.random(0, 100) },
    { x: "Os X", y: _.random(0, 100) },
    { x: "Unknown", y: _.random(0, 100) },
    { x: "Linux", y: _.random(0, 100) }
  ]
  let dataPieChartChooseByOs = _.filter(coppyDataPieChart, (o) => _.includes(req.query.OsChooseArr, o.x))
  if (req.query.objDate !== undefined && req.query.OsChooseArr !== undefined) {
    setTimeout(() => {
      res.send(dataPieChartChooseByOs);
    }, 1000);
  }
  else {
    setTimeout(() => {
      res.send(coppyDataPieChart);
    }, 1000);
  }
})

app.get('/api/get_data_ranking_chart', (req, res) => {
  if (req.query.from_date !== undefined) {
    dataRankingChart = [
      { x: "PUBG", y: _.random(10000000, 100000000) },
      { x: "Minecraft", y: _.random(10000000, 100000000) },
      { x: "Diablo III", y: _.random(10000000, 100000000) },
      { x: "WOW", y: _.random(10000000, 100000000) },
      { x: "Terraria", y: _.random(10000000, 100000000) },
      { x: "The Sims", y: _.random(10000000, 100000000) }
    ]
  }
  setTimeout(() => {
    res.send(dataRankingChart);
  }, 15000);
})

app.get('/api/get_data_heat_map_chart', (req, res) => {
  if (req.query.from_date !== undefined) {
    dataHeatMapChart = _.map(
      ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
      (day) => ({
        name: day,
        data: _.map(_.range(0, 24), time => ({
          x: `${time}:00`,
          y: _.random(0, 2) !== 2 ? _.random(0, 30) : _.random(0, 50)
        }))
      })
    )
  }
  setTimeout(() => {
    res.send(dataHeatMapChart);
  }, 5000);
})

app.get('/api/get_data_line_chart', (req, res) => {
  setTimeout(() => {
    res.send(dataLineChart);
  }, 7000);
})

app.get('/api/get_data_pie_chart_choose_by_os', (req, res) => {
  const objOsChoose = req.query;
  let coppyDataPieChart = [
    { x: "Android", y: _.random(0, 100) },
    { x: "Windows", y: _.random(0, 100) },
    { x: "Ios", y: _.random(0, 100) },
    { x: "Os X", y: _.random(0, 100) },
    { x: "Unknown", y: _.random(0, 100) },
    { x: "Linux", y: _.random(0, 100) }
  ]
  //lọc mảng coppyDataPieChart nếu như x(Os) có tồn tại trong mảng objOsChoose thì để lại không thì lọc bỏ đi
  let dataPieChartChooseByOs = _.filter(coppyDataPieChart, (o) => _.includes(objOsChoose.data, o.x))
  if (objOsChoose.date !== undefined && objOsChoose.data !== undefined) {
    setTimeout(() => {
      res.send(dataPieChartChooseByOs);
    }, 2000);
  }
})

app.get('/api/get_name_os_arr', (req, res) => {
  res.send(nameOsArr);
})

app.listen(5000, () => {
  console.log('App listening on port 5000')
})