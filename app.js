const express =require('express') //function 
const app = express() // module
const apiRouter = require('./router/api') // api router
app.use(express.urlencoded({ extended: false }))  //body parser
app.use(express.json());  // to convert json format 

const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/Api",()=>{
  console.log('database is connect');
})




app.use('/api',apiRouter)
app.listen(3000,()=>{
  console.log('server is running now');
})








