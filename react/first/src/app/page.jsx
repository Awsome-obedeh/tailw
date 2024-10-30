"use client"

import Image from "next/image";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Products from "@/components/Products";
import { useState } from "react";
import Reasons from "@/components/Reasons";
import Form from "@/components/Form";


export default function Home() {
 
  const [value,setValue]=useState(0)
  const [male,setMale]=useState(false)
  const [person,setPerson]=useState(2)
  const [gender,setGender]=useState('male')
  // a function to increase the value to +1

  function handleMale(){
    setGender('female')
  }
  function handleFemale(){
    setGender('male')
  }
  
  function increase(){
    setValue(value+ 1 )
  }
  return (
    <div>
      {/* <div className=" max-w[100%] bg-cover h-screen bg-no-repeat bg-[url(https://images.unsplash.com/photo-1432139555190-58524dae6a55?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]">
            <div>
              <button className="w-max px-3 py-2 bg-red-500 text-white">-</button>
              <h2> {value} </h2>
              <button onClick={increase} className="w-max px-3 py-2 bg-green-500 text-white ">+</button>
            
            
            </div> */}
            {/* conditiuon rendering, displaying a component depending on a condition */}
            {/* {
              male ?   <p>tolu is a boy</p> : <p>tolu is a girl</p>
            }
          
            <p className="text-red-600">you have {person} {person> 1 ? "persons" : "person "} in the room</p>
            <h1>Five reasoons why I love react</h1> */}
          
      {/* </div> */}

      <div>
       {/* {
        // conditional rednerig using tenery operator
        gender=="male" ?  <h1>3 girls</h1> : <h1>3 boys</h1>
       } */}
       
       {
        gender=="male" &&  <h1>3 girls</h1> || <h1>3 boys</h1>
       }
        
        <button onClick={handleMale} className="bg-red-500 px-2 py-2 border-0 rounded-md">SHow male</button>
        <button onClick={handleFemale} className="bg-red-500 px-2 py-2 border-0 rounded-md">SHow female</button>
      </div>


       <Form/>
          
      {/* <Navbar />
      <h1> My first project</h1>
      <Hero/>
      <Footer/> */}

      {/* <Products name="samsung A20"
                price={20}
                desc='thi is high capacity , do more with samsung'
                url="/Capture.PNG"
      />
      <Products
          name="infinix"
          price={10}
          desc="battery lasts longer" 
          url="/Capture.PNG"/>
      <Products 
      
        name="Tecno"
        price={100}
        desc="Get good camera quality"
        url="/Capture.PNG"  
        width={200}/>
      


      <Image src="https://images.unsplash.com/photo-1727064505302-15adb66b3b1b?q=80&w=1665&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={300} height={400} alt="" priority/>
      <Image src="https://i.pinimg.com/564x/c2/65/76/c2657660c8fc609f77abdc450fd2dd27.jpg" width={300} height={400} alt="" priority/> */}
    </div>
  );
}
