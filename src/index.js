const express = require('express')
const morgan = require('morgan')
const path = require('path')

const handlebars = require('express-handlebars').engine;
const app = express()
const port = 3000

// HTTP logger
app.use(morgan('combined'))

// Template engine
app.engine('hbs', handlebars({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, './resources/views'));

// static file

app.use(express.static(path.join(__dirname, 'public')));

console.log(__dirname) 

app.get('/', (req, res) => {
  res.render('news')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})