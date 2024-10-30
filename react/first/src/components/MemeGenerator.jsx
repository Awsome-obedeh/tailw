"use client"
import Image from 'next/image'
import React, { useState } from 'react'

export default function MemeGenerator() {
    const memes = [
        {
            "id": "181913649",
            "name": "Drake Hotline Bling",
            "url": "https://i.imgflip.com/30b1gx.jpg",
            "width": 1200,
            "height": 1200,
            "box_count": 2,
            "captions": 1298500
        },
        {
            "id": "87743020",
            "name": "Two Buttons",
            "url": "https://i.imgflip.com/1g8my4.jpg",
            "width": 600,
            "height": 908,
            "box_count": 3,
            "captions": 1023750
        },
        {
            "id": "112126428",
            "name": "Distracted Boyfriend",
            "url": "https://i.imgflip.com/1ur9b0.jpg",
            "width": 1200,
            "height": 800,
            "box_count": 3,
            "captions": 1047750
        },
        {
            "id": "124822590",
            "name": "Left Exit 12 Off Ramp",
            "url": "https://i.imgflip.com/22bdq6.jpg",
            "width": 804,
            "height": 767,
            "box_count": 3,
            "captions": 651000
        },
        {
            "id": "222403160",
            "name": "Bernie I Am Once Again Asking For Your Support",
            "url": "https://i.imgflip.com/3oevdk.jpg",
            "width": 750,
            "height": 750,
            "box_count": 2,
            "captions": 296250
        },
        {
            "id": "131087935",
            "name": "Running Away Balloon",
            "url": "https://i.imgflip.com/261o3j.jpg",
            "width": 761,
            "height": 1024,
            "box_count": 5,
            "captions": 542000
        },
        {
            "id": "217743513",
            "name": "UNO Draw 25 Cards",
            "url": "https://i.imgflip.com/3lmzyx.jpg",
            "width": 500,
            "height": 494,
            "box_count": 2,
            "captions": 565250
        },
        {
            "id": "97984",
            "name": "Disaster Girl",
            "url": "https://i.imgflip.com/23ls.jpg",
            "width": 500,
            "height": 375,
            "box_count": 2,
            "captions": 352500
        },
        {
            "id": "161865971",
            "name": "Marked Safe From",
            "url": "https://i.imgflip.com/2odckz.jpg",
            "width": 618,
            "height": 499,
            "box_count": 2,
            "captions": 190000
        },
        {
            "id": "129242436",
            "name": "Change My Mind",
            "url": "https://i.imgflip.com/24y43o.jpg",
            "width": 482,
            "height": 361,
            "box_count": 2,
            "captions": 627000
        },
        {
            "id": "135256802",
            "name": "Epic Handshake",
            "url": "https://i.imgflip.com/28j0te.jpg",
            "width": 900,
            "height": 645,
            "box_count": 3,
            "captions": 220500
        },
        {
            "id": "80707627",
            "name": "Sad Pablo Escobar",
            "url": "https://i.imgflip.com/1c1uej.jpg",
            "width": 720,
            "height": 709,
            "box_count": 3,
            "captions": 209750
        },
        {
            "id": "131940431",
            "name": "Gru's Plan",
            "url": "https://i.imgflip.com/26jxvz.jpg",
            "width": 700,
            "height": 449,
            "box_count": 4,
            "captions": 314000
        },
        {
            "id": "4087833",
            "name": "Waiting Skeleton",
            "url": "https://i.imgflip.com/2fm6x.jpg",
            "width": 298,
            "height": 403,
            "box_count": 2,
            "captions": 430250
        },
        {
            "id": "252600902",
            "name": "Always Has Been",
            "url": "https://i.imgflip.com/46e43q.png",
            "width": 960,
            "height": 540,
            "box_count": 2,
            "captions": 189500
        },
        {
            "id": "438680",
            "name": "Batman Slapping Robin",
            "url": "https://i.imgflip.com/9ehk.jpg",
            "width": 400,
            "height": 387,
            "box_count": 2,
            "captions": 617000
        },
        {
            "id": "322841258",
            "name": "Anakin Padme 4 Panel",
            "url": "https://i.imgflip.com/5c7lwq.png",
            "width": 768,
            "height": 768,
            "box_count": 3,
            "captions": 112500
        },
        {
            "id": "188390779",
            "name": "Woman Yelling At Cat",
            "url": "https://i.imgflip.com/345v97.jpg",
            "width": 680,
            "height": 438,
            "box_count": 2,
            "captions": 359000
        },
        {
            "id": "247375501",
            "name": "Buff Doge vs. Cheems",
            "url": "https://i.imgflip.com/43a45p.png",
            "width": 937,
            "height": 720,
            "box_count": 4,
            "captions": 337250
        },
        {
            "id": "309868304",
            "name": "Trade Offer",
            "url": "https://i.imgflip.com/54hjww.jpg",
            "width": 607,
            "height": 794,
            "box_count": 3,
            "captions": 102500
        },
        {
            "id": "91538330",
            "name": "X, X Everywhere",
            "url": "https://i.imgflip.com/1ihzfe.jpg",
            "width": 2118,
            "height": 1440,
            "box_count": 2,
            "captions": 359500
        },
        {
            "id": "110163934",
            "name": "I Bet He's Thinking About Other Women",
            "url": "https://i.imgflip.com/1tl71a.jpg",
            "width": 1654,
            "height": 930,
            "box_count": 2,
            "captions": 152250
        },
        {
            "id": "102156234",
            "name": "Mocking Spongebob",
            "url": "https://i.imgflip.com/1otk96.jpg",
            "width": 502,
            "height": 353,
            "box_count": 2,
            "captions": 420500
        },
        {
            "id": "61544",
            "name": "Success Kid",
            "url": "https://i.imgflip.com/1bhk.jpg",
            "width": 500,
            "height": 500,
            "box_count": 2,
            "captions": 140750
        },
    ]
    const [image,setImage]=useState(1)
    const [qty,setQty]=useState(0)
    const [stock,setStock]=useState(25)

    function handleMeme(){
        const rand = Math.ceil(Math.random() * 24) + 1

        setImage(rand)
    }
    function handlePlus(){
        if(qty<stock){

            setQty(qty+1)
        }
    }
    function handleMinus(){
        if(qty>0){

            setQty(qty-1)
        }
    }

    console.log(memes.length)
    return (
        <div>
            <h3>Image showing:{image}</h3>
            <Image className="block mx-auto"  src={memes[image].url} width={memes[image].width} height={memes[image].height} />
            <button onClick={handleMeme} className="px-4 bg-zinc-700 py-3 rounded-md mt-4 mx-auto block text-white">Generate</button>


            <div className="flex items-center gap-4">
                <button onClick={handleMinus} className="px-4 py-3 bg-red-600">-</button>
                <h4>{qty}</h4>
                <button disabled={qty==stock? true : false} onClick={handlePlus} className={`${qty===stock? 'bg-green-200' : 'bg-green-600 ' } px-4 py-3 ` }>+</button>
                <p className="text-2xl"> Total number of stock {stock}</p>
            </div>
        </div> 
    )
}
