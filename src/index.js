// require('dotenv').config({path:'./env'})

import dotenv from 'dotenv'

import connectDB from './db/index.js'
import { app } from './app.js'
 
dotenv.config()

connectDB().then(()=>{
    app.on("err",(err)=>{
        console.log("Error: ",err)
    })
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server running at http://localhost:${process.env.PORT}`)
    })
}).catch((err)=>{
    console.log("Error while connecting to mongo db ",err)
})