"use client"

import Image from 'next/image'
import herobg from '/public/herobg.png'

export const Background = () => {
    return(
      <Image
        src={herobg}
        alt="herobg"
        fill
        priority
        className="z-0"
      />
    )
}