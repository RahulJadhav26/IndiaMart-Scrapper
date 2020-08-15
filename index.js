var express = require('express')
var fs = require('fs')
var request = require('request')
var cheerio = require('cheerio')

var app = express()
var port = 5000
app.get('/', (req,res)=>{
    
})

app.listen(process.env.PORT || port, ()=>{
    console.log(`App is Listening at ${port}`)
})