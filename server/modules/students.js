const mongoose= require('mongoose')
const StudentSchema = new mongoose.Schema({
    name : String,
    email: String,
    password: String
})

const StudentModel=mongoose.model("students",StudentSchema)
module.exports= StudentModel