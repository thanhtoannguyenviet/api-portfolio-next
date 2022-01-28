const express = require('express')
const {API_V1, PORTFOLIOS} = require("./common/contain");
const server = express()
const bodyParser = require('body-parser');
const {connect} = require('./db')

const PORT = parseInt(process.env.PORT,10) || 3001;
async function runServer(){
    await connect()

    server.listen(PORT,(err)=>{
        if(err) console.error(err)
        else console.log('Server ready on '+ PORT)
    })
    server.get('/test',(req,res)=>{
        return res.json({message:'test is working'})
    })
    server.use('/api/v1/portfolios',require('./routes/portfolios'))
}


 runServer()