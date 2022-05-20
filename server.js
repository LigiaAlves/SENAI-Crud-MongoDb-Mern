const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');

//const { Server } = require('http');
const mongoose = require('mongoose'); //conectar mongoDB
//const routes = require ('./src/routes');

const app = express ();
const port = process.env.PORT || 5000; //processar caso ja estiver utilizando uma porta ou caso não exista
mongoose.connect('mongodb://localhost:27017/curso-basico-mern', {
    useUnifiedTopology:true,
    useNewUrlParser:true,
    useFindAndModify:false
},function(err){
    if(err){
        console.log(err)
    }else{
        console.log('MongoDB conectado com sucesso')

    }
})

app.use (cors());

app.use(cookieParser());

app.use(express.json());


//app.use(routes); //para utilizar rotas

app.listen(port, function(){
    console.log(`Server runing on port ${port}`)
})



