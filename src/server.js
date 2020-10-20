//importar bibliotecas
const express = require('express')
const path = require('path')
const server = express()
const pages = require('./pages.js')


//criar rota
server
.use(express.urlencoded({extended: true}))
//utilizando os arquivos estáticos
.use(express.static('public'))
//configurar o template engine
.set('views', path.join(__dirname, 'views'))
.set('view engine', 'hbs')

.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)
.post('/save-orphanage', pages.saveOrphanage)

//ligar o servidor
server.listen(55767)