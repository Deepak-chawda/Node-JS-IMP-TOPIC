const express = require("express")
const app = express()
// this is third party middleware
const bodyParser = require("body-parser")


//  this are two way to use body- parser 
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
 
app.get("/",(req,res)=>{
    console.log("using third party middleware")
})
app.post('/save',(req,res)=>{
    res.json({
      "status":true,
      "payload":req.body
    })
    console.log("this is response site data " ,req.body)
})
      
  app.listen(3000,(req,res)=>{
      console.log('server running on port 3000')
  })


//  this are few third party middleware 
// 1 bodyParser
// 2 Session
// 3 express.static
// 4 morgan
