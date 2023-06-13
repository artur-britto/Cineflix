const express = require('express')
const app = express()
const port = 3000
const bodyparser= require('body-parser')

//configurando body parser

app.use(bodyparser.urlencoded({
    extended: false}
))

app.use(bodyparser.json())

//configurando ejs
app.set('view engine', 'ejs' )

//configurando arquivos estaticos
app.use(express.static('public'))

//Rota principal
app.get('/', (req, res) => {
    res.send('<h1>Página Principal</h1>')   
})

//Rota home

app.get('/', (req, res) => {
    res.render('index')   
})

//Iniciando o servidor
app.listen(port, ()=> {
    console.log('Servidor Online!')
})