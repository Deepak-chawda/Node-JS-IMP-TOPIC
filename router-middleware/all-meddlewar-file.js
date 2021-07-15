// module.exports = (req,res,next) =>{
//     console.log("this is router level middle ware")
//     next()
// }
// ---------------------------------------------------------------------------------------------------------------------------
routerCheckmidd = (req,res,next) =>{
    console.log("this is router level middle ware")
    next()
}
module.exports = routerCheckmidd