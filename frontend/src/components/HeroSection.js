import React from 'react'

const HeroSection = () => {
    return (
      <section className=" mx-auto max-w-7xl pb-0 md:pb-12">

        <div className="max-w-full my-6 lg:my-12 lg:ml-6 mx-auto static lg:relative flex flex-col space-y-0 lg:block align-middle items-center content-center">

          <div className="flex flex-col w-full items-center lg:items-start lg:justify-start">

            <div className="w-11/12 lg:w-8/12 drop-shadow-kcyan4 ">

              <img className="object-cover w-full h-[60vh] md:h-[65vh] xl:h-[75vh] object-center mx-auto rounded-3xl"
                src={require("../assets/image_skulliver.jpeg")}
                alt="Skulliver, a giant foundation paper-pieced skull made by Kendall.">
              </img>
            </div>
            <div className="w-full lg:w-8/12 h-6 md:h-8 flex justify-center align-middle items-center content-center space-x-4 pt-6">
                    <div className="w-2 md:w-4 h-2 md:h-4 bg-kyellow drop-shadow-kmag2 rounded-full active:scale-125 active"></div>
                    <div className="w-2 md:w-4 h-2 md:h-4 bg-kyellow drop-shadow-kmag2 rounded-full active:scale-125"></div>
                    <div className="w-2 md:w-4 h-2 md:h-4 bg-kyellow drop-shadow-kmag2 rounded-full active:scale-125"></div>

                </div>

          </div>




          <div className="w-full h-auto md:-mt-12 lg:w-5/12 xl:w-5/12  lg:bg-white lg:drop-shadow-kmag4 static lg:absolute lg:top-[45%] lg:right-6 lg:-translate-x-0 xl:translate-x-0 lg:ml-16 2xl:ml-24 xl:ml-24 2xl:left-1/2 lg:rounded-3xl flex flex-col align-center ">
      <h1 className="my-12 w-10/12 md:w-6/12 lg:w-10/12 mx-auto font-quicksand text-4xl xl:text-5xl text-center text-white lg:text-kblack font-normal leading-tight xl:leading-[3.6rem]">
        <span className="font-berkshire font-bold text-chill-grad bg-chill-grad bg-clip-text text-transparent drop-shadow-kcyan2 bg-400 animate-shiny whitespace-nowrap">
          <span className="text-5xl xl:text-6xl">h</span>andmade quilts

        </span>{" "}
        <br className="hidden md:inline lg:hidden" />
        crafted in Barrie, Ontario, Canada
      </h1>
      <button className="w-10/12 md:w-6/12 lg:w-10/12 py-4  bg-kmag rounded-full mb-12  text-white mx-auto font-quicksand text-2xl lg:text-3xl font-bold drop-shadow-kyellow4 transition hover:bg-kycan hover:text-kyellow4 ">
        See What's Available
      </button>
    </div>
            </div>
        </section>
  )
}

export default HeroSection