"use client";

import  { useEffect, useRef, useState } from "react";
import Button from "../_components/Button.js";
import { IoPlay } from "react-icons/io5";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
function Hero() {
  const [curIndex, setCurIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);
  const totalVideos = 4;
  const nextVideoRef = useRef(null);
  
  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });
        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => nextVideoRef.current.play(),
        });
        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    {
      dependencies: [curIndex],
      revertOnUpdate: true,
    }
  );

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  function handleVideoLoaded() {
    setLoadedVideos((prevIndex) => prevIndex + 1);
  }

  useEffect(() =>{
 
  setIsLoading(false);
  setTimeout(() => {
    gsap.to("#current-video", {
      transformOrigin: "center center",
      scale: 1,
      duration: 1,
      ease: "power1.inOut",
    });
  }, 1000);
 
  },[loadedVideos])

  const upcomingVideo = (curIndex % totalVideos) + 1;

  function handleMiniVideos() {
    setHasClicked(true);
    setCurIndex(upcomingVideo);
  }

  const videosSrc = (index) => `videos/hero-${index}.mp4`;
  return (
    <div id='home' className="relative h-dvh w-screen overflow-x-hidden">
   {isLoading && (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
          
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )}

      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen 
   overflow-hidden rounded-lg bg-blue-75"
      >
        <div>
          <div
            className="mask-clip-path absolute-center absolute 
    z-50 size-64 cursor-pointer overflow-hidden rounded-2xl"
          >
            <div
              onClick={() => handleMiniVideos()}
              className="scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
            >
              <video
                ref={nextVideoRef}
                src={videosSrc(upcomingVideo)}
                loop
                muted
                id="cur-video"
                onLoadedData={handleVideoLoaded}
                className="size-64 origin-center scale-150 object-cover object-center"
              />
            </div>
          </div>
          <video
            ref={nextVideoRef}
            src={videosSrc(curIndex)}
            loop
            muted
            id="next-video"
            onLoadedData={handleVideoLoaded}
            className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
          />
          <video
            src={videosSrc(curIndex === totalVideos - 1 ? 1 : curIndex)}
            autoPlay
            loop
            muted
            className="absolute left-0 top-0 size-full object-cover object-center"
          />
        </div>
        <h1
          className="special-font hero-heading absolute
         bottom-5 right-5 z-40 text-blue-75"
        >
          G<b>a</b>ming
        </h1>
        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-blue-100">
              <b>a</b>rca<b>n</b>
              <b>e</b>
            </h1>
            <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
              Enter The Metagame layer<br /> Unlash The Play Economy
            </p>
           <a href="https://www.imdb.com/video/vi3971205401/?playlistId=tt11126994&ref_=tt_ov_ov_vi"> <Button id='watch-trailer' title='Watch Trailer'
             leftIcon={<IoPlay />} containClass='!bg-yellow-300 flex-center gap-1'   />
             </a>
          </div>
        </div>
      </div>
      <h1
          className="special-font hero-heading absolute
         bottom-5 right-5 text-black"
        >
          G<b>a</b>ming
        </h1>
    </div>
  );
}

export default Hero;
