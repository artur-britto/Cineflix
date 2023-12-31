const express = require('express')
const app = express()
const port = 3000
const bodyparser = require('body-parser')

//configurando body parser

app.use(bodyparser.urlencoded({extended: false}))

app.use(bodyparser.json())

//configurando ejs
app.set('view engine', 'ejs' )

//configurando arquivos estaticos
app.use(express.static('public'))

//Rota principal
app.get('/', (req, res) => {
    res.render('index.ejs')   
})

//Rota home
app.get('/home', (req, res) => {
    res.send('<h1>Home</h1>')
})
//rota main
app.get('/main', (req, res) => {
    res.render('page/main')
})

//Rota login
app.get('/login', (req, res) => {
    res.render('login.ejs') 
})

//Rota cadastro
app.get('/cadastro', (req, res) =>{
    res.render('cadastro.ejs')
})

//Rota para filmes
app.get('/filmes', (req, res) => {
    res.render('page/filmes')
})
//Rota para Séries
app.get('/series', (req, res) => {
    res.render('page/series')
})

//Rota para Documentários
app.get('/documentarios', (req, res) => {
    res.render('page/documentarios')
})

    //Iniciando o servidor
app.listen(port, ()=> {
    console.log('Servidor Online!')
})