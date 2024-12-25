

'use client'
import React from 'react'
import BentoCard from './BentoCard'
import BentoTilt from './BentoTilt'

import { TiLocationArrow } from "react-icons/ti";





function Features() {


  return (
    <section id='prologue' className="bg-black pb-52">
    <div className="container mx-auto px-3 md:px-10">
      <div className="px-5 py-32">
        <p className="font-circular-web text-lg text-blue-50">
          Into the Metagame Layer
        </p>
        <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
          Immerse yourself in a rich and ever-expanding universe where a vibrant
          array of products converge into an interconnected overlay experience
          on your world.
        </p>
        </div>
   

      <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
      <video
            src="videos/feature-1.mp4"
            loop
            muted
            autoPlay
            className="size-full object-cover object-center"
          />
      </BentoTilt>
            <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
          <BentoCard
            src="img/feature-1.jpg"
            title={
              <>
                jin<b>x</b>
              </>
            }
            description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
          <BentoCard
            src="img/feature-2.jpg"
            title={
              <>
                <b>V</b>i
              </>
            }
            description="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 md:col-span-1 md:row-span-2 object-contain object-center">
          <BentoCard
            src="img/feature-3.jpg"
            title={
              <>
                E<b>K</b>Ko
              </>
            }
            description="A cross-world AI Agent - elevating your gameplay to be more fun and productive."
            isComingSoon
          />
        </BentoTilt>

       

        <BentoTilt className="sm:bento-tilt_2 bento-tilt_1">
          <video
            src="videos/hero-4.mp4"
            loop
            muted
            autoPlay
            className="size-full object-cover object-center"
          />
        </BentoTilt>
      </div>
          </div>
      </section>
  )
}

export default Features
