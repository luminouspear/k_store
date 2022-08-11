import React from 'react'
import { KStoreTitle } from '../userinterface/KStoreTitle';

const ContactMe = (props) => {

  const { sectionTitle } = props

  return (
    <section className="container w-full mx-auto my-20 bg-transparent  max-w-7xl">
      <h2 className="mx-auto text-center ">
        <KStoreTitle title={sectionTitle} textType={"sectionheader"} />
      </h2>

      <div className="flex flex-col items-center w-full px-6 mx-auto text-white  font-quicksand lg:w-8/12 lg:pt-12
">
        <h3 className="w-10/12 mb-6 text-3xl text-center md:text-4xl ">
          Still have questions? Want to get something made? Let's talk!
        </h3>
        <form className="flex flex-col items-center w-full form-vertical">
          <input
            className="w-full px-6 py-4 mt-6 text-2xl rounded-full md:w-8/12 md:py-6 text-kblack placeholder:text-2xl placeholder:text-kblack/60 "
            placeholder="name"
          />
          <input
            className="w-full px-6 py-4 mt-6 text-2xl rounded-full md:w-8/12 md:py-6 text-kblack placeholder:text-2xl placeholder:text-kblack/60 "
            placeholder="email address"
            type="email"
          />
          <textarea
            className="w-full h-48 px-6 py-4 mt-6 text-2xl md:w-8/12 md:py-6 rounded-3xl text-kblack placeholder:text-2xl placeholder:text-kblack/60 "
            placeholder="what can I help you with today?"
            defaultValue={""}
          />
          <button className="w-full py-4 mt-6 text-2xl font-bold rounded-full md:w-8/12 md:py-6 lg:text-3xl bg-kcyan shadow-kmag4"
            type="submit">
            Send
          </button>
        </form>
      </div>
    </section>

  )
}

export default ContactMe