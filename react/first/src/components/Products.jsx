import Image from 'next/image'
import React from 'react'
// import Project from './project.PNG'
import prod from '/public/Capture.PNG'
export default function Products(props) {
  return (

    <>
    
    <div className='flex gap-4 items-center mb-4 border borfder-1 border-red-400 *:'>
      <div>
        <p className='text-lg font-semibold '>name</p>
        <p className='text-lg font-semibold '>price</p>
        <p className='text-lg font-semibold '>Desc</p>
      </div>

      <div>
        <p>{props.name}</p>
        <p className='text-green-800'>${props.price}</p>
        <p className='text-gray-600'>{props.desc}</p>
      </div>
    </div>
    <div className="flex justify-center items-center">
        <img src="" alt="" />

        {/* <Image src={prod} width={0} height={0} alt="product image"/> */}
        <Image src={props.image} width={400} height={200} alt={props.name}/>
    </div>
    </>
  )
}
