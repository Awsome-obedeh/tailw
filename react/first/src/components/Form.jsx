"use client"
import React, { useState } from 'react'
import { FaRegUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa6";
import Image from 'next/image';

  
export default function Form() {
    const [email, setEmail] = useState('')
    const [name, setName] = useState("")
    const [password, setPassword] = useState('')
    const [showText, setShowText] = useState(false)
    const [emailErr, setEmailErr] = useState('')
    const [nameErr, setNameErr] = useState('')
    // function to handle submit
    const handleSubmit = (e) => {
        // e-> the arguement means event

        // prevent form default submission
        e.preventDefault()
        if (!email) {
            setEmailErr("please fill in email")
            console.log("please fill in email")
        }
        else {
            setEmailErr('')
        }
        // if name input is empty, shwow the name input error message
        if (!name) {
            setNameErr("please fill in your name")
        }
        else {
            setNameErr('')
        }

    }

    //     Assignment 2
    // Create a component that when you hover on an image in the component 
    // a <h2>This image was hovered on </h2> 
    // and when you are not hovering the <h2></h2> disaapears

    const handleText = () => {
        setShowText(true)
    }
    const handleHideText = () => {
        setShowText(false)
    }

    // const handle
    return (
        <div>
            <div className="w-full h-screen flex items-center justify-center">
                <form onSubmit={handleSubmit} className="max-w-sm py-3 bg-slate-500 h-96 flex flex-col gap-5 justify-center  px-4" >
                    <div className="flex border border-gray-400 px-3 py-4 bg-white rounded-md ">
                        <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Enter Email" className="w-[100%] border-none bg-transparent focus:outline-none focus:border-none " />
                        <FaRegUser />
                    </div>
                    {
                        emailErr && (<label className="text-red-500" htmlFor="">{emailErr} email err</label>)
                    }
                    <div className="flex border border-gray-400 px-3 py-4 bg-white rounded-md ">
                        {/* <select name="" id="">
                <option value="+234">+234</option>
                <option value="+233">+233</option>
                <option value="+110">+234</option>
              </select> */}
                        <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter name" className="w-[100%] border-none bg-transparent focus:outline-none focus:border-none " />
                        <MdOutlineEmail />
                    </div>
                    { 
                        nameErr && (<label className="text-red-600 text-base "> {nameErr}</label>)
                    }
                    <div className="flex border border-gray-400 px-3 py-4 bg-white rounded-md ">
                        <input onChange={(e) => setPassword(e.target.value)} type="text" placeholder="Enter password" className="w-[100%] border-none bg-transparent focus:outline-none focus:border-none " />
                        <FaRegUser />
                    </div>


                    <div className="flex items-center mx-auto gap-5">

                        <button className="px-3 py-3 max-w rounded-md bg-blue-500 text-white">submit          </button>

                        <FaLocationArrow />


                    </div>
                </form>


            </div>
            <div className="bg-black text-white">
                <h2>email is {email}</h2>
                <h2>name is {name}</h2>
            </div>


            <div>
                <div className="relative h-96 w-96 border border-red-500">
                    <Image onMouseLeave={handleHideText} onMouseEnter={handleText} className="object-cover " fill sizes="25vw" src="https://images.unsplash.com/photo-1727064505302-15adb66b3b1b?q=80&w=1665&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                </div>

                {
                    showText && <h2 className="">Now you can see me</h2>
                }

            </div>
        </div>
    )
}
