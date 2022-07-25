import React from 'react'

const ContactMe = () => {
  return (
    <section className="w-full  max-w-7xl container mx-auto bg-transparent my-20 ">
      {/* Section Header (Contact Me) */}
      <h2 className="mx-auto text-center  font-berkshire text-kyellow text-4xl drop-shadow-kmag2">
        <span className="text-5xl">c</span>ontact{" "}
        <span className="text-5xl">m</span>e
      </h2>
      <div className="flex mx-auto w-full items-center px-6 pt-6 flex-col text-white font-quicksand lg:w-8/12 lg:pt-24">
        <h3 className="text-3xl md:text-4xl text-center  w-10/12 mb-6">
          Still have questions? Want to get something made? Let's talk!
        </h3>
        <input
          className="w-full md:w-8/12 py-4 md:py-6 mt-6 rounded-full text-2xl px-6 text-kblack placeholder:text-2xl placeholder:text-kblack/60 "
          placeholder="name"
        />
        <input
          className="w-full md:w-8/12 py-4 md:py-6 mt-6 rounded-full text-2xl px-6 text-kblack placeholder:text-2xl placeholder:text-kblack/60 "
          placeholder="email address"
          type="email"
        />
        <textarea
          className="w-full md:w-8/12 py-4 h-48 md:py-6 mt-6 rounded-3xl text-2xl px-6 text-kblack placeholder:text-2xl placeholder:text-kblack/60 "
          placeholder="what can I help you with today?"
          defaultValue={""}
        />
        <button className="w-full md:w-8/12 mt-6 py-4 md:py-6 text-2xl lg:text-3xl font-bold bg-kcyan rounded-full shadow-kmag4">
          Send
        </button>
      </div>
    </section>

  )
}

export default ContactMe