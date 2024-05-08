const mongoose = require('mongoose')

const TestTakenSchema = new mongoose.Schema({
    gID: String,
    gName: String,
    gEmail: String,
    deedsDone: Array
})

const TestTakenModel = mongoose.model("PurityTestTaken", TestTakenSchema);
module.exports = TestTakenModel;