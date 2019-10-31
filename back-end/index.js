const express = require('express')
var bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())

const DataPieChart = require('./Data/DataPieChart')

app.get('/', (req, res) => {
  res.send('hello from server!')
})

app.get('/api/get_data_pie_chart', (req, res) => {
  setTimeout(function () {
    res.send(DataPieChart);
  }, 10000);

})

app.listen(5000, () => {
  console.log('App listening on port 5000')
})