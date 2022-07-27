import React from 'react'
import { KStoreTitle } from "../KStoreTitle"

const Footer = () => {
  return (
    <footer className="w-full max-w-7xl container mx-auto bg-transparent py-20 ">
      <div className="h-1 w-10/12 xl:w-9/12 mx-auto border-b my-12 border-opacity-60 border-dotted" />
      <div className="flex flex-col md:flex-row w-9/12 md:w-8/12 lg:w-8/12 mx-auto justify-between align-middle content-center items-center h-24 ">
        <div className="pb-4">
          {<KStoreTitle title={"simcoe\n stitchcraft"} textType={'logo'} />}
        </div>

        <p className="font-quicksand text-white text-sm text-center md:text-left md:pl-6">
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