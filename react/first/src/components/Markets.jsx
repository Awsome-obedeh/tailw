"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function Markets() {
    const [markets, setMarkets] = useState('')
    const getMarket = async () => {
        const res = await fetch('https://fakestoreapi.com/products')
        // convert the default fprmat of the api from json->object
        const data = await res.json()
        setMarkets(data)
        console.log("this is the usestate market", markets)
        return data
    }
    // make api call
    // useEffcet has two PARAMETERS(arguments)
    // 1. a callback function
    // 2 an array of dependencies
    useEffect(() => {
        getMarket()
    }, [])
    return (
        <div className='grid grid-cols-4 justify-center content -center gap-10'>
            {
                markets ? markets.map(market => (
                    <div key={market.id} className=" flex gap-5 bg-pink-400 px-4 py-7 rounded-md">
                        <Link href={`/markets/products?id=${market.id}`}>
                        <Image className="bg-slate-500 w-40 h-40 rounded-md"src={market.image} width={50} height={50}></Image>
                        <div className='flex flex-col gap-4'> 
                            <p>name: {market.title}</p>
                            <p>Price: {market.price}</p>
                            <p>inStock: {market.rating.count}</p>
                            <p>desc: {market.description}</p>
                        </div>
                        </Link>
                    </div>
                )) : "loading...."
            }



        </div>
    )
}
