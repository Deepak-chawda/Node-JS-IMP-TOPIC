const express = require("express");
const app = express();
app.use(express.json())
// ======================================================================================================
// mongodb connection install Mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://secondAdmin:jrq2KKpbh2Smh3TG@cluster0.mz9zv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then((data) => {
    console.log("connected successfuly")
}).catch((error) => {
    console.log("not connected successfuly", error)
});
// ====================================================================================================================
// schema for store data in mongodb 
const schemaStudent = new mongoose.Schema({
    name:
    {
        type: String,
        required: true,
    },
    email:
    {
        type: String,
        required: true,
        unique: [true, "Email id already present"]
    },
    phone:
    {
        type: Number,
        required: true
    },
    address:
    {
        type: String,
        required: true
    }
})
const StudentId = new mongoose.model("frdcollection", schemaStudent)
// ============================================================================================================================
// get, post ,APis use  for request data

// get data by using _Id and Query 
app.get("/get/dataById", (req, res) => {
    const fetch = req.query._id
    if (fetch) {
        const dude = StudentId.findById({ _id: fetch })
            .then((data) => {
                if (data) {
                    res.status(200).send(data);
                    console.log("data access from DbAtlas successfully");
                } else {
                    console.log("this id haven't  data in DB");
                    res.status(500).send("this id have't data in DB");

                }
            })

            .catch((error) => {
                res.send("incorrect id")
            })
    } else {
        res.send("plz add Id in End point")
    }
})
// get data by using _id and params
app.get("/get/dataById/:dk", (req, res) => {
    const fetch = req.params._id
    if (req.params._id) {
        const dude = StudentId.findById({ _id: fetch })
            .then((data) => {
                if (!data) {
                    console.log("this id haven't  data in DB")
                    res.status(500).send("this id have't data in DB")
                } else {
                    res.status(200).send(data)
                    console.log("data access from DbAtlas successfully")
                }
            })

            .catch((error) => {
                res.send("incorrect id")
            })
    } else {
        res.send("plz add Id in End point")
    }
})
// get all document data by get method
app.get("/get/document", (req, res) => {
    StudentId.find().then((data) => {
        console.log("get all documetn  ", data)
        res.status(200).send(data)
    }).catch((error) => {
        console.log("unable to get document all data", error)
        res.status(404).send(error)
    })

})

// store data in data base by using post request
app.post("/post/data", (req, res) => {
    // old way to do it 
    // const data = req.body;
    // const frd = new StudentId({
    //     name: data.name,
    //     email: data.email,
    //     phone: data.phone,
    //     address: data.address
    // })
    // new way to do it
    const frd = new StudentId(req.body)
    frd.save().then((data) => {
        console.log("save data successfully");
        res.send(data);
    }).catch((error) => {
        console.log("not save data in DB");
        res.send(error)
    });

})

// delete single data from Db by using id
app.delete("/delete/data", (req, res) => {
    const fetchId = req.query._id
    if(fetchId){
    StudentId.findByIdAndDelete({ _id: fetchId })
        .then((data) => {
            if(data){
            res.status(200).send("deleted data by using id successfully")
            console.log("deleted data successfully")
            }else{
                res.send("This id don't have any data")
            }
        })
        .catch((error) => {
            res.status(500).send("not delete data something is wrong")
        })
    }else{
        res.status(404).send("id is missing in End poin")
    }
})

// update dada from DB by using id
app.put("/update/data", (req, res) => {
    const fetchId = req.query._id;
    const getbody = req.body;
    // console.log(getbody)
    if (fetchId) {
        if (Object.keys(getbody).length == !0) {
            StudentId.findByIdAndUpdate({ _id: fetchId },
                { $set: { name: getbody.UpdateName, email: getbody.UpdateEmail } },
                { new: true })
                .then((data) => {
                    res.status(200).send("update successfully");
                    console.log("update successfully")
                }).catch((error) => {
                    res.status(500).send(error)
                    console.log(" not update something is wrong");
                })
        } else {
            res.send("Body missing plz provide body");
            console.log("Body missing plz provide body");
        }
    } else {
        console.log("There is no id")
        res.send("There is no id")
    }

})

// second way to do put data in db
app.put("/update/datas", (req, res) => {
    const fetchId = req.query._id;
    const getbody = req.body;
    StudentId.where({ _id: fetchId }).update(getbody)
        .then((data) => {
            res.status(200).send("update successfully");
            console.log("update successfully")
        }).catch((error) => {
            res.status(500).send(error)
            console.log(" not update something is wrong")
        })
})


// ==================================================================================================================================
// Server connection code 
app.listen(8080, function () {
    console.log("server Activeted")
})