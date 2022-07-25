import React from 'react'
import { KStoreSubtitle } from './Global/KStoreSubtitle';

const CustomQuilts = (props) => {


  const { sectionTitle } = props

  return (
    <section className="w-full bg-[#111] pt-1">
      <div className="w-full max-w-7xl container mx-auto  mt-6 md:mt-12 ">
        {KStoreSubtitle(sectionTitle)}
        <div className="w-full mt-16 lg:h-[56vh] xl:h-[65vh] 2xl:h-[75vh]  mx-auto static lg:relative">
          <div className=" rounded-3xl w-full h-full">

            <div className="max-h-[50%] lg:max-h-fit aspect-square md:h-3/4 w-10/12 mx-auto  my-6 lg:my-0 lg:h-5/6 2xl:h-[90%] lg:w-8/12 xl:w-8/12 bg-gray-300 static lg:right-0 xl:right-12 2xl:right-0 lg:mx-12 xl:mx-0 lg:absolute lg:translate-y-12 xl:translate-x-0  rounded-3xl shadow-kmag4 overflow-hidden">

              <img
                src={require("../assets/image_dragonfly_spock.jpeg")}
                className="object-cover object-center w-full h-full"
                loading="lazy"
                alt="Mr. Spock trying to help..."
              />
            </div>
          </div>
          <div className="w-full h-auto lg:w-5/12 xl:w-5/12 lg:mt-24 xl:mt-36 lg:bg-white lg:shadow-kmag4 static lg:absolute lg:top-[28%] xl:top-[33%] 2xl:top-[33%] lg:left-0 lg:mx-12 2xl:mx-0 2xl:-translate-x-24  2xl:ml-24  2xl:left-0 lg:rounded-3xl flex flex-col align-center ">
            <h2 className="mt-6 mb-12 w-10/12  mx-auto font-quicksand text-3xl lg:text-4xl 2xl:text-5xl text-center text-white lg:text-kblack font-regular  ">
              Want something made{" "}<br className="sm:hidden" />
              <span className="font-berkshire font-bold text-chill-grad bg-chill-grad bg-clip-text text-transparent drop-shadow-kyellow2 bg-400 animate-shiny inline-block">

                just for you?
              </span>{" "}
              <br />
              <br className="hidden lg:inline" />
              Check out my quilt tops and projects in progress!
            </h2>
            <button className="w-10/12 md:w-6/12 mb-12 lg:w-10/12 py-4 md:py-6 bg-kcyan rounded-full text-white mx-auto font-quicksand text-2xl lg:text-3xl font-bold shadow-kyellow4 hover:text-kyellow4 ">
              View Work in Progress
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CustomQuilts