const _ = require('lodash');
var moment = require('moment');
const dataAndroid = [];
for (let i = 0; i <= 500; i++) {
  dataAndroid.push({
    x: moment().add(i, 'days').format('LLLL'),
    y: _.random(50, 100)
  })
}
const dataIos = [];
for (let i = 0; i <= 500; i++) {
  dataIos.push({
    x: moment().add(i, 'days').format('LLLL'),
    y: _.random(50, 100)
  })
}
module.exports = [
  {
    name: 'Android',
    data: dataAndroid
  },
  {
    name: 'Ios',
    data: dataIos
  }
]