import Image from 'next/image'
import React from 'react'

export default function Person() {
    const persons = [
        {
            name: "obed",
            gender: "Male",
            age: 12,
            complexion: "dark",
            url: "https://images.unsplash.com/photo-1727064505302-15adb66b3b1b?q=80&w=1665&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            name: "dan",
            gender: "Male",
            age: 13,
            complexion: "fair",
            url: "https://images.unsplash.com/photo-1727064505302-15adb66b3b1b?q=80&w=1665&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            name: "david",
            gender: "Female",
            age: 42,
            complexion: "chocolate",
            url: "https://images.unsplash.com/photo-1727064505302-15adb66b3b1b?q=80&w=1665&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            name: "micheal",
            gender: "male",
            age: 122,
            complexion: "cream",
            url: "https://images.unsplash.com/photo-1727064505302-15adb66b3b1b?q=80&w=1665&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            name: "cherrypick",
            gender: "M",
            age: 12,
            complexion: "UFO",
            url: "https://images.unsplash.com/photo-1727064505302-15adb66b3b1b?q=80&w=1665&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            name: "Goodswill",
            gender: "M",
            age: 12,
            complexion: "UFO",
            url: "https://images.unsplash.com/photo-1727064505302-15adb66b3b1b?q=80&w=1665&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
    ]
    return (
        <div>
            {
                persons.map(person => (
                    <div className=" h-full w-[100px] bg-gray-400 rounded-md bg-clip-padding
                                     backdrop-filter backdrop-blur-sm bg-opacity-30 border
                                      border-gray-100
                                        flex flex-col items-center justify-between gap-5  mb-4">
                        <div className='h-[40px] w-[40px] rouded-full' >
                            <Image src={person.url} width={200} height={200} alt={person.name}
                                className='rounded-full ' />
                        </div>
                        <h2 className='font-semibold text-2xl '>{person.name}</h2>
                        <p className='text-2xl font-medium'>{person.age}</p>
                        <p>{person.gender}</p>
                        <p className='h-full w-full bg-gray-400 rounded-md bg-clip-padding
                         backdrop-filter backdrop-blur-sm bg-opacity-30 border
                          border-gray-100'>{person.complexion
                            }</p>
                    </div>

                ))
                // alternative way
                // persons.map((person)=>{

                // })
            }
        </div>
    )
}
