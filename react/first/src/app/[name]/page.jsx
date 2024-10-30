"use client"
import { useParams, usePathname, useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'

export default function Page() {

    // using query string
    const searchParams=useSearchParams()
    const moviename=searchParams.get('movie')
    
    // using params
    const params=useParams()
    const movie =params.name
    // console.log(params)
    const getSinglemovie= async ()=>{
        const res =await fetch(`https://www.episodate.com/api/show-details?q=${moviename}`)
        // remember the api is fecthed in json format  so we have to convert to object
        const data=await res.json()
        console.log("thi is the data -", data,moviename, typeof(moviename))
        return data
    }
    useEffect(()=>{
        getSinglemovie()
    },[])
  return (
    <div>
      hi, this is the dynamic page for the movie  {moviename}
 

   
    </div>


  )
}         
