import mongoose from "mongoose"

const userSchema= new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        trim:true
    },

    lastname:{
        type:String,
        required:true,
        tirm:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
    }
}, {timestamps:true})
// before we model our collection,
//  we need to first of all chehck if 
// the model has been created before
// N/B-> this is a next thing, it's only applicable in nextjs
const userModel= mongoose.models.user || mongoose.model("user",userSchema)

export default userModel

