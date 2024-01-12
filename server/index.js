const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require("./models/Users")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://kevin:mbonimpaye1@crud.s9jq02z.mongodb.net/crud")

// post api
app.post("/createUser", (req, res) => {
    UserModel.create(req.body)
        .then(users => res.json(users))
        .catch(err => res.json(err))
})

// get api
app.get('/', (req, res) => {
    UserModel.find({})
        .then(users => res.json(users))
        .catch(err => res.json(err))
})

// get a user api
app.get('/getUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findById({_id:id})
        .then(users => res.json(users))
        .catch(err => res.json(err))
})

// update api
app.put('/updateUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndUpdate({ _id: id }, {
        name: req.body.name
    })
        .then(users => res.json(users))
        .catch(err => console.log(err))
})

// delete api
app.delete('/deleteUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndDelete({ _id: id })
        .then(users => res.json(users))
        .catch(err => console.log(err))
})


app.listen(3001, () => {
    console.log("Server is Running Niggah")
})