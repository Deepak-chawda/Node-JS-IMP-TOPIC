// const express = require("express")
// const app  = express()
// // this is my create router level middle ware
// const routerCheckmidd = (req,res,next) =>{
//     console.log("this is router level middle ware")
//     next()
// }
// app.get("/" ,(req,res)=>{
//     console.log("THis is a home page")
//     res.status(200).send(`Welcome to our "home" page`)
// })
// // use router level middle ware to  create middle ware and writename between url and (req,res)
// // esme vahi vahi use hoga jaha jaha hamne apni create ki hui middle ware ka name likha he jese below
// app.get("/login", routerCheckmidd ,(req,res)=>{
//     console.log("THis is a log in  page")
//     res.status(200).send(`Welcome to our "login"  page`)
// })
// app.get("/about" ,(req,res)=>{
//     console.log("THis is a about page")
//     res.status(200).send(`Welcome to our "about"  page`)
// })
// app.listen(5000,()=>{
//     console.log("server activated on port 5000 .........")
// })
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 2) second way to do in this concept it is advance way

// const express = require("express")
// const app  = express()
// // access router method in router key word
// const router = express.Router()
// // this is my create router level middle ware
// const routerCheckmidd = (req,res,next) =>{
//     console.log("this is router level middle ware")
//     next()
// }
// app.get("/" ,(req,res)=>{
//     console.log("THis is a home page")
//     res.status(200).send(`Welcome to our "home" page`)
// })
// // use router level middle ware to  create middle ware and write name between url and (req,res) 
// // esme vahi vahi use hoga jaha jaha hamne apni create ki hui middle ware ka name likha he jese below
// router.get("/login", routerCheckmidd ,(req,res)=>{
//     console.log("THis is a login  page")
//     res.status(200).send(`Welcome to our "login"  page`)
// })
// app.get("/logout" ,(req,res)=>{
//     console.log("THis is a logout page")
//     res.status(200).send(`Welcome to our "logout"  page`)
// })
// router.get("/about",routerCheckmidd ,(req,res)=>{
//     console.log("THis is a about page")
//     res.status(200).send(`Welcome to our "about"  page`)
// })
// app.use("/", router)
// app.listen(5000,()=>{
//     console.log("server activated on port 5000 .........")
// })
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 3) in this program we create indivisual meddleware file and require here
const express = require("express")
const app  = express()
// access router method in router key word
const router = express.Router()
// here to require middleware file from other place
const  routerCheckmidd = require("./all-meddlewar-file")

app.use("/", router)

app.get("/" ,(req,res)=>{
    console.log("THis is a home page")
    res.status(200).send(`Welcome to our "home" page`)
})
// use router level middle ware to  create middle ware and write name between url and (req,res) 
// esme vahi vahi use hoga jaha jaha hamne apni create ki hui middle ware ka name likha he jese below
router.get("/login", routerCheckmidd ,(req,res)=>{
    console.log("THis is a login  page")
    res.status(200).send(`Welcome to our "login"  page`)
})
app.get("/logout" ,(req,res)=>{
    console.log("THis is a logout page")
    res.status(200).send(`Welcome to our "logout"  page`)
})
router.get("/about",routerCheckmidd ,(req,res)=>{
    console.log("THis is a about page")
    res.status(200).send(`Welcome to our "about"  page`)
})

app.listen(5000,()=>{
    console.log("server activated on port 5000 .........")
})