"use client"
import Swiper from "@/components/Swiper";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router=useRouter()
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [err, setErr] = useState('');
  const [loading,setloading]=useState(false)


  function validatePassword(password) {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /[0-9]/.test(password);
    const hasSpecialChars = /[!@#\$%\^\&*\)\(+=._-]/.test(password);
    return hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChars;
  }
  // form validation
  // make a get request

  const submitHandller = async (e) => {
    // prevent form default
    e.preventDefault()

    if (!firstname) {
      setErr("please fill in your firstname")
    }
    else if (!lastname) {
      setErr("please fill in last name")
    }
    else if (!email) {
      setErr("please fill in email")
    }
    else if (!password) {
      setErr("please fill in password")
    }
    else if (password.length < 8) {
      setErr("password should not be less than 8 characters")
    }
    else if (!validatePassword(password)) {
      setErr('password must have an uppercase, lowercase, numbers and special characters')
    }

    else {
      // clear err state
      setErr('')

      // send our form data to the api 
      const res = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        //  stringify is used to convert from object to json
        body: JSON.stringify({ firstname, lastname, email, password })
      }) 
      console.log(res)

      // if response is successfull
      if(res.status==200){
        // route to the login page
        router.push('/login')

      }
    }


  }

  return (
//     <div className="w-full h-screen flex items-center justify-center bg-red-200 flex-col">
//       {
//         err && (

//           <div className="px-4 bg-red-400 text-white text-center py-2"> {err}</div>
//         )
//       }
//       <form action="" className="shadow-md border p-20" onSubmit={submitHandller}>

//         <div className="w-full my-5">
//           <label htmlFor="" className="py-3">Firstname</label>
//           <input onChange={(e) => setFirstname(e.target.value)} type="text" className="rounded-sm w-full py-2 px-6 border-none focus:outline-none focus:border-none" />

//         </div>
//         <div className="w-full my-3">
//           <label htmlFor="" className="py-3">Lastname</label>
//           <input onChange={(e) => setLastname(e.target.value)} type="text" className="rounded-sm w-full py-2 px-6 border-none focus:outline-none focus:border-none" />

//         </div>
//         <div className="w-full my-3">
//           <label htmlFor="" className="py-3">Email</label>
//           <input onChange={(e) => setEmail(e.target.value)} type="text" className="rounded-sm w-full py-2 px-6 border-none focus:outline-none focus:border-none" />

//         </div>
//         <div className="w-full my-3">
//           <label htmlFor="" className="py-3">Password</label>
//           <input onChange={(e) => setPassword(e.target.value)} type="password" className="rounded-sm w-full py-2 px-6 border-none focus:outline-none focus:border-none" />

//         </div>
// {
//   loading ?( <button className="w-max px-10 py-2 text-white text-[20px] bg-green-800 rounded-sm mt-3 font-mono loader"></button>):(<button className="w-max px-10 py-2 text-white text-[20px] bg-green-800 rounded-sm mt-3 font-mono">Submit</button>)
// }
// </form>
//     </div>

<div>
  <Swiper/>
</div>
    


  );
}