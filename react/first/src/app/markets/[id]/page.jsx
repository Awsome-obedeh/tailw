
"use client"
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'

export default function page() {
    const [singleProd, setSingleProd] = useState()
    const searchParams = useSearchParams()
    const id = searchParams.get('id')

    const getMarketDetails = async () => {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`)
        const data = await res.json()
        console.log(data)
        // store the response data in our useState value
        setSingleProd(data)
        return data
    }

    useEffect(() => {
        getMarketDetails()
    },
        [])

    return (
        <div>
            <h1>dynamaic page showing more details about product with id= {id}</h1>
            
                {(singleProd ?
                    <div className=" flex gap-5 bg-pink-400 px-4 py-7 rounded-md">

                        <Image className="bg-slate-500 w-40 h-40 rounded-md" src={singleProd.image} width={50} height={50}></Image>
                        <div className='flex flex-col gap-4'>
                            <p>name: {singleProd.title}</p>
                            <p>Price: {singleProd.price}</p>
                            <p>inStock: {singleProd.rating.count}</p>
                            <p>desc: {singleProd.description}</p>
                        </div>

                    </div> : "loading...")}
      
        </div>
    )
}
