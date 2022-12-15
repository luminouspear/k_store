import React from 'react'
import { LargeImageContainer } from '../userinterface/LargeImageContainer'

import { KStoreTitle } from '../userinterface/KStoreTitle';

const JoinMailingList = (props) => {

  const sectionTitle = "join the mailing list"
  return (

    <section className="container w-full py-24 mx-auto max-w-7xl">
      <h2 className="mx-auto text-center ">
        <KStoreTitle title={sectionTitle} textType={"sectionheader"} />
      </h2>
      <div className="pt-12">
        <LargeImageContainer contents={<img
          src={"/assets/image_mountains.png"}
          className="object-cover object-center w-full bg-no-repeat rounded-3xl"
          alt="A purple mountain quilt sitting over a bench outside."
        />} layoutPrefs={"shadow-kcyan4"} />
      </div>

      <div className="flex flex-col items-center w-full px-6 mx-auto text-white font-quicksand lg:w-8/12 lg:pt-12">
        <h3 className="w-full mb-6 text-4xl text-center ">Let's stay in touch!</h3>
        <p className="mt-6 text-2xl text-center md:w-8/12">
          Leave your email address and I'll let you know when I've finished new
          projects.
        </p>
        <form className="flex flex-col items-center w-full mx-auto form-vertical">
          <input
            className="w-full px-6 py-4 mt-12 text-2xl rounded-full md:w-8/12 md:py-6 text-kblack placeholder:text-2xl placeholder:text-kblack/60 "
            placeholder="email address"
            type="email"
          />
          <button className="w-full py-4 mt-6 text-2xl font-bold rounded-full md:w-8/12 md:py-6 lg:text-3xl bg-kcyan shadow-kyellow4"
            type="submit">
            Join the Newsletter
          </button>
        </form>
      </div>
    </section>

  )
}

export default JoinMailingList