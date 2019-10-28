const express = require('express')
var bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())

const DataPieChart = require('./Data/DataPieChart')
const DataHorizontalChart = require('./Data/DataHorizontalChart')

app.get('/', (req, res) => {
  res.send('hello from server!')
})

app.get('/api/get_data_pie_chart', (req, res) => {
  res.send(DataPieChart)
})

app.get('/api/get_data_horizontal_chart', (req, res) => {
  res.send(DataHorizontalChart)
})

app.listen(5000, () => {
  console.log('App listening on port 5000')
})