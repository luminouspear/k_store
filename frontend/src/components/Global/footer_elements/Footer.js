import React from 'react'
import { KStoreTitle } from "../userinterface/KStoreTitle"

const Footer = () => {

  return (
    <footer className="container w-full py-20 mx-auto bg-transparent max-w-7xl ">
      <div className="w-10/12 h-1 mx-auto my-12 border-b border-dotted xl:w-9/12 border-opacity-60" />
      <div className="flex flex-col items-center content-center justify-between w-9/12 h-24 mx-auto align-middle md:flex-row md:w-8/12 lg:w-8/12 ">
        <div className="pb-4">
          {<KStoreTitle title={"simcoe\n stitchcraft"} textType={'logo'} />}
        </div>

        <p className="text-sm text-center text-white font-quicksand md:text-left md:pl-6">
          © 2023 Simcoe Stitchcraft.
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