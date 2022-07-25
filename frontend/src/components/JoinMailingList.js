import React from 'react'

const JoinMailingList = () => {
  return (

    <section className="w-full  max-w-7xl container mx-auto pt-12 pb-24">
      <h2 className="mx-auto text-center  font-berkshire text-kyellow text-4xl drop-shadow-kmag2">
        <span className="text-5xl">j</span>oin <span className="text-5xl">m</span>y{" "}
        <span className="text-5xl">m</span>ailing{" "}
        <span className="text-5xl">l</span>ist
      </h2>
      <div className="w-full aspect-video px-12 my-6 lg:my-0 lg:h-3/6 lg:w-8/12 pt-12 lg:flex lg:align-middle lg:items-center lg:justify-center lg:mx-auto lg:pt-24">
        <div className="w-full rounded-3xl isolate shadow-kcyan4 overflow-hidden">
          <img
            src={require("../assets/image_mountains.png")}
            className="object-cover object-center w-full bg-no-repeat"
            alt="A purple mountain quilt sitting over a bench outside."
          />
        </div>
      </div>
      <div className="flex mx-auto w-full items-center px-6  flex-col text-white font-quicksand lg:w-8/12 lg:pt-24">
        <h3 className="text-4xl text-center  w-full mb-6">Let's stay in touch!</h3>
        <p className="text-2xl mt-6 text-center  md:w-8/12">
          Leave your email address and I'll let you know when I've finished new
          projects.
        </p>
        <input
          className="w-full md:w-8/12 py-4 md:py-6 mt-12 rounded-full text-2xl px-6 text-kblack placeholder:text-2xl placeholder:text-kblack/60 "
          placeholder="email address"
          type="email"
        />
        <button className="w-full md:w-8/12 mt-6 py-4 md:py-6 text-2xl lg:text-3xl font-bold bg-kcyan rounded-full shadow-kyellow4">
          Join the Newsletter
        </button>
      </div>
    </section>

  )
}

export default JoinMailingList