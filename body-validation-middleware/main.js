const express = require("express")
const app = express()
app.use(express.json())

const midd = (req,res,next)=>{
  const name = req.body.name
  const age = req.body.age
  if(name && age)
  {
    next() 
  }
  else{
    res.send("provide name and age in body ! ")
    console.log("provide name and age in body ! ")
  }
}
app.get("/get/body",(req,res)=>{
  res.status(200).send("Hello world Its welcome page")
  console.log("Hello world Its welcome page")
})
app.post("/post/body",midd,(req,res)=>{
  res.status(200).send(" You  loged in because you provide name and age ")
  console.log("You  loged in because you provide name and age")
})
app.listen(5000,()=>{
  console.log("server active on port 5000")
})

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// // write  from npm express-validation
// const express = require('express')
// const bodyParser = require('body-parser')
// const { validate, ValidationError, Joi } = require('express-validation')
// const { json } = require("express")

// const loginValidation = {
//   body: Joi.object({
//     email: Joi.string()
//       .email()
//       .required(),
//     password: Joi.string()
//       .regex(/[a-zA-Z0-9]{3,30}/)
//       .required(),
//   }),
// }

// const app = express();
// app.use(bodyParser.json())

// app.post('/login', validate(loginValidation, {}, {}), (req, res) => {
//   res.json(200)
//   console.log("successfully log in")
// })

// app.use(function(err, req, res, next) {
//   if (err instanceof ValidationError) {
//     return res.status(err.statusCode).json(err)
//   }

//   return res.status(500).json(err)
// })

// app.listen(3000,function(){
//     console.log("server activated")
// })