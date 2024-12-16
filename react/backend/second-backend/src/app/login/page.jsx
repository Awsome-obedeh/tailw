"use client"
import React, { useState } from 'react'

export default function page() {
    const [err,setErr]=useState('')
    const [loading,setLoading]=useState('')

  return (
    <div>
      <div className="w-full h-screen flex items-center justify-center bg-red-200 flex-col">
      {
        err && (

          <div className="px-4 bg-red-400 text-white text-center py-2"> {err}</div>
        )
      }
      <form action="" className="shadow-md border p-20">

        
        <div className="w-full my-3">
          <label htmlFor="" className="py-3">Email</label>
          <input onChange={(e) => setEmail(e.target.value)} type="text" className="rounded-sm w-full py-2 px-6 border-none focus:outline-none focus:border-none" />

        </div>
        <div className="w-full my-3">
          <label htmlFor="" className="py-3">Password</label>
          <input onChange={(e) => setPassword(e.target.value)} type="password" className="rounded-sm w-full py-2 px-6 border-none focus:outline-none focus:border-none" />

        </div>
{
  loading ?( <button className="w-max px-10 py-2 text-white text-[20px] bg-green-800 rounded-sm mt-3 font-mono loader"></button>):(<button className="w-max px-10 py-2 text-white text-[20px] bg-green-800 rounded-sm mt-3 font-mono">{loading ? "loading.." : " submit"}</button>)
}
</form>
    </div>
    </div>
  )
}
