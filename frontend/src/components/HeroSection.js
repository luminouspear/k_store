import React from 'react'

const HeroSection = () => {
    return (
      <section className=" mx-auto max-w-7xl pb-0 md:pb-12">
        <div className="w-full  md:min-h-1/2 min-h-[65vh] xl:pl-6 md:pt-6 lg:h-[56vh] xl:h-[75vh] 2xl:h-[75vh]  mx-auto static lg:relative flex flex-col space-y-0 lg:block align-middle items-center content-center">



          <div className="drop-shadow-kcyan4 rounded-3xl w-full lg:h-full ">
            <div className="mx-6 h-[55vh] w-11/12 mt-6 lg:my-0 lg:h-5/6 2xl:h-[90%] lg:w-7/12 xl:w-8/12 bg-gray-300 static lg:absolute lg:translate-y-12 xl:-translate-x-12 lg:left-6 rounded-3xl  overflow-hidden ">

              <div className="bg-hero bg-cover bg-no-repeat bg-center w-full h-full scale-[120%] -translate-x-5  ">
              </div>


            </div>
          </div>




          <div className="w-full h-auto md:-mt-12 lg:w-5/12 xl:w-5/12  lg:bg-white lg:drop-shadow-kmag4 static lg:absolute lg:top-[55%] xl:top-[60%] 2xl:top-[54%] lg:right-6 lg:-translate-x-0 xl:translate-x-0 lg:ml-16 2xl:ml-24 xl:ml-24 2xl:left-1/2 lg:rounded-3xl flex flex-col align-center ">
      <h1 className="my-12 w-10/12 md:w-6/12 lg:w-10/12 mx-auto font-quicksand text-4xl xl:text-5xl text-center text-white lg:text-kblack font-normal leading-tight xl:leading-[3.6rem]">
        <span className="font-berkshire font-bold text-chill-grad bg-chill-grad bg-clip-text text-transparent drop-shadow-kcyan2 bg-400 animate-shiny whitespace-nowrap">
          <span className="text-5xl xl:text-6xl">h</span>andmade quilts

        </span>{" "}
        <br className="hidden md:inline lg:hidden" />
        crafted in Barrie, Ontario, Canada
      </h1>
      <button className="w-10/12 md:w-6/12 lg:w-10/12 md:py-6  bg-kmag rounded-full mb-12  text-white mx-auto font-quicksand text-2xl lg:text-3xl font-bold drop-shadow-kyellow4 transition hover:bg-kycan hover:text-kyellow4 ">
        See What's Available
      </button>
    </div>
            </div>
        </section>
  )
}

export default HeroSection