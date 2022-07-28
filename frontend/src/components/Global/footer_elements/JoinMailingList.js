import React from 'react'
import { LargeImageContainer } from '../userinterface/LargeImageContainer'

import { KStoreTitle } from '../../global/userinterface/KStoreTitle';

const JoinMailingList = (props) => {

  const { sectionTitle } = props
  return (

    <section className="w-full  max-w-7xl container mx-auto py-24">
      <h2 className="mx-auto text-center ">
        <KStoreTitle title={sectionTitle} textType={"sectionheader"} />
      </h2>
      <div className="pt-12">
        <LargeImageContainer contents={<img
          src={require("../../../assets/image_mountains.png")}
          className="object-cover object-center w-full bg-no-repeat rounded-3xl"
          alt="A purple mountain quilt sitting over a bench outside."
        />} layoutPrefs={"shadow-kcyan4"} />
      </div>

      <div className="flex mx-auto w-full items-center px-6  flex-col text-white font-quicksand lg:w-8/12 lg:pt-12">
        <h3 className="text-4xl text-center  w-full mb-6">Let's stay in touch!</h3>
        <p className="text-2xl mt-6 text-center  md:w-8/12">
          Leave your email address and I'll let you know when I've finished new
          projects.
        </p>
        <form className="form-vertical w-full mx-auto flex flex-col items-center">
          <input
            className="w-full md:w-8/12 py-4 md:py-6 mt-12 rounded-full text-2xl px-6 text-kblack placeholder:text-2xl placeholder:text-kblack/60 "
            placeholder="email address"
            type="email"
          />
          <button className="w-full md:w-8/12 mt-6 py-4 md:py-6 text-2xl lg:text-3xl font-bold bg-kcyan rounded-full shadow-kyellow4"
            type="submit">
            Join the Newsletter
          </button>
        </form>
      </div>
    </section>

  )
}

export default JoinMailingList