// require express for server creation
const express = require("express")
const app = express()

// custom middleware create
const applicationmiddle = (req ,res,next)=>{
    console.log(` First run middleware , This is application middleware url=> ${req.url} , method => ${req.method} `);
    next()
}
// application level middleware call 
app.use(applicationmiddle);

//user routes
app.get("/get/first",(req,res)=>{
        res.send("This is get method response")
        console.log(`this is get method response`)
})
app.post("/post/second",(req,res)=>{
    res.send("this is post method response")
    console.log("this is post method response")
})
app.listen(3002,function(){
console.log("server activated__________________")
})

// this middle ware use all route before  calling work 
// that middleware effect whole application 
// this applicatio middleware create by coder and use it you can also create multiple middleware in single programe