import userModel from "@/models/users"
import { connectDb } from "@/utils/connect"
import bcrypt, { genSaltSync } from "bcryptjs"
import { NextResponse } from "next/server"
import { stringify } from "postcss"

export const POST = async(res)=>{
    // take incoming values and change the json payload that were sent to object format
    const {firstname, lastname, email,password}=await res.json()
    console.log(firstname,lastname,email,password)

    // call my database connection
    await connectDb()
    // t's not a goo practice to store passwords as plain text(that is- storing the password, the way the user gives it to us)
    // hashin the password
   const salt=bcrypt.genSaltSync(16)
   const hashedPassword=bcrypt.hashSync(password,salt)
    const user=new userModel({firstname:firstname, lastname:lastname, email:email,password:hashedPassword })

    await user.save()

    if(!user){
         return new NextResponse(JSON.stringify({msg:"user registration failed"}, {status:400}))


    }
    return new NextResponse(JSON.stringify({msg:"user created"}, {status:200}))



}