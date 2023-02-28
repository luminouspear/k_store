import React from 'react'
import { KStoreTitle } from "../userinterface/KStoreTitle"

const Footer = () => {

  return (
    <footer className="container w-full py-12 mx-auto bg-transparent h-fit max-w-7xl ">
      <div className="w-10/12 h-1 mx-auto my-12 border-b border-dotted xl:w-9/12 border-opacity-60" />
      <div className="flex flex-col items-center content-center justify-between w-9/12 h-24 mx-auto align-middle md:flex-row md:w-8/12 lg:w-8/12 ">
        <h1 className="flex justify-center align-middle h-fit xl:mb-10">
          {<KStoreTitle title={"simcoe\n stitchcraft"} textType={'logo'} />}
        </h1>

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