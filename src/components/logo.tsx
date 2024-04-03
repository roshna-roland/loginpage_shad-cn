import Image from 'next/image'
import React from 'react'

export function Logo() {


    return (
        <div className="w-30 text-white font-bold text-5xl" >
            <Image alt='flick' src="/flick_logo.svg" width={150} height={50} style={{color:"white"}}/>

        </div>

    )
}