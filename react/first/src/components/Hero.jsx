import React from 'react'
import { Dancing_Script } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const dancingScript = Dancing_Script({
  subsets: ['latin'],
  display: 'swap',
  weight:'400'
})

export default function Hero() {
  return (
    <div className=' px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
      <h1 className={`${dancingScript.className}`} >Buffet</h1>
   
    </div>
  )
}
