require('babel/register')
var Container = require('aurelia-dependency-injection').Container
var Main = require('./src/main')

var container = new Container()

var main = container.get(Main)
console.log(main.hello())
