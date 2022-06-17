//server creation
//1. import express
const express = require('express')

const dataService = require('./services/data.service')

//create server application using express
const app = express()

//parse json data
app.use(express.json())

//bank server
//register API
app.post('/register',(req,res)=>{
  //register solving  
  console.log(req);
const result = dataService.register(req.body.username,req.body.acno,req.body.password)
res.status(result.statusCode).json(result)
})

//login API
app.post('/login',(req,res)=>{
    //login solving  
    console.log(req);
  const result = dataService.login(req.body.acno,req.body.pswd)
  res.status(result.statusCode).json(result)
  })

  //deposit API
app.post('/deposit',(req,res)=>{
    //deposit solving  
    console.log(req);
  const result = dataService.deposit(req.body.acno,req.body.pswd,req.body.amt)
  res.status(result.statusCode).json(result)
  })

  //withdraw API
app.post('/withdraw',(req,res)=>{
    //withdraw solving  
    console.log(req);
  const result = dataService.withdraw(req.body.acno,req.body.pswd,req.body.amt)
  res.status(result.statusCode).json(result)
  })

  //Transaction API
app.post('/getTransaction',(req,res)=>{
  //Transaction solving  
  console.log(req);
const result = dataService.getTransaction(req.body.acno)
res.status(result.statusCode).json(result)
})

//user rqst resolving

//GET Request - to fetch data
app.get('/',(req,res)=>{
    res.send("GET Request");
})

//POST Request - to create data
app.post('/',(req,res)=>{
    res.send("POST Request");
})

//PUT Request - to modify entire data
app.put('/',(req,res)=>{
    res.send("PUT Request");
})

//PATCH Request
app.patch('/',(req,res)=>{
    res.send("PATCH Request");
})

//DELETE Request
app.delete('/',(req,res)=>{
    res.send("DELETE Request");
})


//setup the port number to server app (used method is listen)
app.listen(3000,()=>{
    console.log("server started at 3000");
})