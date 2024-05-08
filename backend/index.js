const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const RegisterModel = require('./models/Register')
const TestTakenModel = require('./models/TestTaken')

const app = express()
app.use(cors(
    {
        // origin: ["https://wake-purity-test-client.vercel.app"],
        origin: ["http://127.0.0.1:5173"],
        methods: ["POST", "GET"],
        credentials: true
    }
));
app.use(express.json())

mongoose.connect('mongodb+srv://johnbillos619:9CEfSt9YuMQxjO40@cluster0.dkq5djr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');


app.get("/", (req, res) => {
    res.json("Hello");
})

app.post('/postTestTaken', (req, res) => {
    const {gID, gName, gEmail, deedsDone} = req.body;
    TestTakenModel.create({gID: gID, gName: gName, gEmail: gEmail, deedsDone: deedsDone})
        .then(result => res.json(result))
        .catch(err => res.json(err))
})


app.listen(3001, () => {
    console.log("Server is Running")
})
