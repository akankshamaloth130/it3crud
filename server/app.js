const express = require('express')
//const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const url = 'mongodb+srv://akankshamaloth13:akankshaakhi@cluster0.p7lejac.mongodb.net/?retryWrites=true&w=majority/CBIT'

const app = express()

mongoose.connect(url, { useNewUrlParser: true })
const con = mongoose.connection
con.on('open', () => {
    console.log('connected....')
})

app.use(cors())
//app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())

const alienRouter = require('./routes/aliens')
app.use('/aliens', alienRouter)

app.listen(9000, () => {
    console.log('Server started')
})