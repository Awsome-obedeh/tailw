"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function Movies() {
    const [moviedata, setMoviedata] = useState()
    const [page, setPage] = useState(1)

    // to increment
    function handleNextpage() {
        setPage(page + 1)
    }
    function handlePrevpage() {
        if (page > 1) {

            setPage(page - 1)
        }
    }

    console.log(page)
    const getMovies = async () => {
        const res = await fetch(`https://www.episodate.com/api/most-popular?page=${page}`)


        // the api response comes in json.
        // so we have to convert to object  to be 
        // able to work with the api data
        const data = await res.json()
        console.log(data)
        setMoviedata(data)
        return data
    }
    // use effect has two arguments (a callback function and an array of depe)
    useEffect(() => {
        getMovies()
        // the array of dependency will listen to when the value of page will change
        // then- it will call our useEffct again
    }, [page])





    return (
        <div className='h- w-full flex flex-col gap-10 items-center justify-center mt-32 px-10 md:px-16 lg:px-32'>
            {moviedata && (<h4 className='text-2xl font-extrabold'>{moviedata.page}/{moviedata.pages} </h4>)}
            <div className="grid grid-cols-6 gap-5 ">

                {
                    moviedata ? moviedata.tv_shows.map(movie => (
                        <div className="" key={movie.id}>
                            <Link href={`/name?movie=${movie.name}`}>
                                <div className='bg-slate-400 h-[100px] w-[100px] rounded-md relative'>
                                    <Image sizes="20vw" className='object-cover' fill src={movie.
                                        image_thumbnail_path} alt={movie.name} />
                                </div>
                            </Link>

                            <div className='flex flex-col gap-4'>
                                <p>Title : {movie.name}</p>
                                <p>Start Date:{movie.start_date}</p>
                                <p>Movie status Date:{movie.status}</p>
                                <p>Company : {movie.network}</p>
                            </div>

                        </div>
                    )) : (<p>Loading/....</p>)
                }



            </div>
            {
                moviedata && (
                    <div className=' flex justify-between w-full'>
                        <button disabled={page < 2 ? true : false} onClick={handlePrevpage} className={`px-4 py-3 rounded-md  text-center ${page < 2 ? "bg-pink-200 text-black" : "bg-red-600 text-white"}`}>Prev</button>
                        <button onClick={handleNextpage} className="px-4 py-3 rounded-md text-white text-center bg-red-600">Next</button>
                    </div>
                )
            }

        </div>
    )
}
