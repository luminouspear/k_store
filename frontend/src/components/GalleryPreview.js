import React from 'react'

const GalleryPreview = () => {
  return (
    <section className="w-full bg-[#111] py-12">
      <div className="w-full max-w-7xl container mx-auto bg-transparent mt-6 md:mt-12">
  <h2 className="mx-auto text-center font-berkshire text-kyellow text-4xl drop-shadow-kmag2">
    <span className="text-5xl">k</span>endall's{" "}
    <span className="text-5xl">F</span>avourites
  </h2>
  <div className="mx-12 mt-12 lg:mt-24 grid grid-cols-2 gap-6 gap-y-0 md:gap-12 md:gap-y-0 lg:gap-y-12 lg:grid-cols-3 2xl:gap-12">
    <div className=" mt-12 lg:mt-0 cursor-pointer">
      <div className="aspect-square bg-white/50 rounded-3xl drop-shadow-kyellow4 overflow-hidden">
        <img
          src={require("../assets/image_desert.jpeg")}
          className="object-cover object-center w-full scale-110 "
          alt="A quilt showing two desert scenes in a polaroid frame."

        />
      </div>
    </div>
    <div className=" mt-12 lg:mt-0 cursor-pointer">
      <div className="aspect-square bg-white/50 rounded-3xl drop-shadow-kcyan4 overflow-hidden">
        <img
          src={require("../assets/image_night_lemur.jpeg")}
          className="object-cover object-center w-full scale-110 "
          alt="A lemur on a tree branch at night"

        />
      </div>
    </div>
    <div className=" mt-12 lg:mt-0 cursor-pointer">
      <div className="aspect-square bg-white/50 rounded-3xl drop-shadow-kyellow4 overflow-hidden">
        <img
          src={require("../assets/image_triangles.jpeg")}
          className="object-cover object-center w-full scale-110 "
          alt="A geometric triangle pattern"

        />
      </div>
    </div>
    <div className=" mt-12 lg:mt-0 cursor-pointer">
      <div className="aspect-square bg-white/50 rounded-3xl drop-shadow-kcyan4 overflow-hidden">
        <img
          src={require("../assets/image_the_goat.jpg")}
          className="object-cover object-center w-full scale-110 "
          alt="A capricorn goat head"

        />
      </div>
    </div>
    <div className=" mt-12 lg:mt-0 cursor-pointer">
      <div className="aspect-square bg-white/50 rounded-3xl drop-shadow-kyellow4 overflow-hidden">
        <img
          src={require("../assets/image_monsterra.jpeg")}
          className="object-cover object-center w-full scale-110 "
          alt="Three monsterra leaf blocks"

        />
      </div>
    </div>
    <div className=" mt-12 lg:mt-0 cursor-pointer">
      <div className="aspect-square bg-white/50 rounded-3xl drop-shadow-kcyan4 overflow-hidden">
        <img
          src={require("../assets/image_moths.jpeg")}
          className="object-cover object-center w-full scale-110 "
          alt="Two multi-coloured moths on a black field"

        />
      </div>
    </div>
  </div>
  <div className="flex mt-12">
    <button className="w-10/12 md:w-6/12 lg:w-4/12 mb-12 py-4 md:py-6 bg-kcyan rounded-full text-white mx-auto font-quicksand text-2xl lg:text-3xl font-bold drop-shadow-kyellow4 hover:text-kyellow4 ">
      View the Gallery
    </button>
  </div>
</div>
</section>
  )
}

export default GalleryPreview