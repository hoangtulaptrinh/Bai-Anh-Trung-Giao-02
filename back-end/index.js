const express = require('express')
var bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
const dataPieChart = require('./Data/DataPieChart')
const dataRankingChart = require('./Data/DataRankingChart')
const dataHeatMapChart = require('./Data/DataHeatMapChart')

app.get('/', (req, res) => {
  res.send('hello from server!')
})

app.get('/api/get_data_pie_chart', (req, res) => {
  setTimeout(function () {
    res.send(dataPieChart);
  }, 10000);
})

app.get('/api/get_data_ranking_chart', (req, res) => {
  setTimeout(function () {
    res.send(dataRankingChart);
  }, 15000);
})

app.get('/api/get_data_heat_map_chart', (req, res) => {
  setTimeout(function () {
    res.send(dataHeatMapChart);
  }, 5000);
})

app.listen(5000, () => {
  console.log('App listening on port 5000')
})