import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full max-w-7xl container mx-auto bg-transparent py-20 ">
  <div className="h-1 w-10/12 xl:w-9/12 mx-auto border-b my-12 border-opacity-60 border-dotted" />
  <div className="flex w-9/12 md:w-8/12 lg:w-6/12 mx-auto justify-between align-middle content-center items-center h-24 ">
    <h1 className="font-berkshire bg-chill-grad bg-clip-text text-transparent animate-glow  cursor-pointer font-bold drop-shadow-kyellow1 md:drop-shadow-kyellow2 whitespace-nowrap leading-3 ">
      <span className="text-5xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl py-0 ">
        s
      </span>
      <span className="text-4xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl tracking-wide">
        imcoe{" "}
      </span>
      <br className="xl:hidden" />
      <span className="-mt-4">
        <span className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl tracking-tighter">
          s
        </span>
        <span className="text-4xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl -translate-x-2 tracking-wide">
          titchcraft
        </span>
      </span>
    </h1>
    <p className="font-quicksand text-white text-sm pl-6">
      © 2022 Simcoe Stitchcraft.
      <br />
      All Rights Reserved.{" "}
      <a href="/privacy_policy.html" className="text-white decoration-none">
        Privacy Policy
      </a>
    </p>
  </div>
</footer>

  )
}

export default Footer