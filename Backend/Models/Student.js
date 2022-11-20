const mongoose = require('mongoose');
const Schema = mongoose.Schema; //Permite crear el esquema en mongo

let studentSchema = new Schema(
    {
        name:{
            type: String,
        },
        email:{
            type: String,
        },
        rollno:{
            type: Number,
        },
    },

    {
        collection:'students',
    }
);

module.exports= mongoose.model("Student",studentSchema);