import React from 'react'

const AboutKendall = () => {
  return (
    <section className="w-full  max-w-7xl container mx-auto py-24">
  <h2 className="mx-auto text-center  font-berkshire text-kyellow text-4xl drop-shadow-kmag2">
    <span className="text-5xl">a</span>bout <span className="text-5xl">k</span>
    endall
          </h2>

  <div className="w-full mt-16 lg:h-[56vh] xl:h-[65vh] 2xl:h-[75vh]  mx-auto static lg:relative">

              <div className="drop-shadow-kyellow4 rounded-3xl w-full h-full ">
              <div className="min-h-[50%] lg:max-h-full  md:h-3/4 w-10/12 mx-auto lg:my-0 lg:h-full 2xl:h-full lg:w-8/12 xl:w-8/12 bg-gray-300 static lg:left-0 xl:right-12  lg:mx-12 xl:mx-0 lg:absolute  xl:translate-x-0  rounded-3xl   overflow-hidden mb-24">
      <img
                      src={require("../assets/image_portrait_kendall.png")}
        className="object-cover object-top-middle w-full h-full"
        loading="lazy"
        alt="Kendall, the artist"
      />
                  </div>
                  </div>
    <div className="w-full h-auto lg:w-5/12 xl:w-5/12  lg:bg-white lg:drop-shadow-kmag4 static lg:absolute lg:top-[28%] xl:top-[33%] 2xl:top-[33%] lg:right-0 lg:mx-12 2xl:mx-0 2xl:-translate-x-24  2xl:ml-24    lg:rounded-3xl flex flex-col align-center ">
      <h2 className=" mb-12 lg:my-12 w-10/12  mx-auto font-quicksand text-3xl lg:text-4xl text-center text-white lg:text-kblack font-regular leading-[3.8rem] lg:leading-tight">
        Kendall is a quilter, crafter and maker who believes in living life in{" "}
        <span className="font-berkshire font-bold text-chill-grad bg-chill-grad bg-clip-text text-transparent drop-shadow-kyellow2 bg-400 animate-shiny ">
          full colour!
        </span>{" "}
        <br />
        <br className="hidden lg:inline" />
      </h2>
      <button className="w-10/12 md:w-6/12 lg:mt-0 lg:mb-12 lg:w-10/12 py-4 md:py-6 bg-kcyan rounded-full text-white mx-auto font-quicksand text-2xl lg:text-3xl font-bold drop-shadow-kyellow4 hover:text-kyellow4 ">
        Learn More
      </button>
    </div>
  </div>
</section>
  )
}

export default AboutKendall