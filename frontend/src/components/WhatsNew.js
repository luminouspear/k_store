import React from 'react'

const WhatsNew = () => {
  return (
    <section className="w-full bg-[#111] py-12">
  <div className="w-full max-w-7xl container mx-auto bg-transparent mt-6 md:mt-12 mb-12">
    <h2 className="mx-auto text-center font-berkshire text-kyellow text-4xl drop-shadow-kmag2">
      <span className="text-5xl">w</span>hat's{" "}
      <span className="text-5xl">n</span>ew
    </h2>
    <div className="flex mt-12 lg:mt-24 align-center justify-center items-center flex-col lg:flex-row lg:items-start lg:space-x-12 mx-12 xl:mx-0">
      <div className="w-full mt-6 lg:mt-0 cursor-pointer group">
        <div className="w-full  aspect-square bg-white/50 rounded-3xl drop-shadow-kyellow4 overflow-hidden">
          <img
            src={require("../assets/image_uterus.jpeg")}
            className="object-cover object-center h-full scale-110 "
            alt="A foundation paper-pieced uterus on a field of coathangers."
          />
        </div>
        <div className="w-full px-12 pt-12 pb-6 text-center font-quicksand text-white text-medium text-2xl sm:text-3xl lg:text-xl  sm:leading-10 group-hover:text-kyellow">
          Uterus on Coat Hanger Mini Quilt for Planned Parenthood
        </div>
        <div className="w-full px-12 py-3 text-center font-quicksand text-white font-bold text-2xl sm:text-3xl lg:text-xl group-hover:text-kcyan">
          CA$150.00
        </div>
      </div>
      <div className="w-full mt-12 lg:mt-0 cursor-pointer group">
        <div className="w-full  aspect-square bg-white/50 rounded-3xl drop-shadow-kmag4 overflow-hidden">
          <img
            src={require("../assets/image_hand.jpeg")}
            className="object-cover object-center h-full scale-110 "
            alt="A hamsa hand icon."
          />
        </div>
        <div className="w-full px-12 pt-12 pb-6 text-center font-quicksand text-white text-medium text-2xl sm:text-3xl lg:text-xl sm:leading-10 group-hover:text-kyellow">
          Hamza Mini Quilt
        </div>
        <div className="w-full px-12 py-3 text-center font-quicksand text-white font-bold text-2xl sm:text-3xl lg:text-xl group-hover:text-kcyan">
          CA$75.00
        </div>
      </div>
      <div className="w-full mt-12 lg:mt-0 cursor-pointer group">
        <div className="w-full  aspect-square bg-white/50 rounded-3xl drop-shadow-kyellow4 overflow-hidden">
          <img
            src={require("../assets/image_uterus2.jpeg")}
            className="object-cover object-center w-full scale-110 "
            alt="A foundation paperpieced uterus on a light flower background"
          />
        </div>
        <div className="w-full px-12 pt-12 pb-6 text-center font-quicksand text-white text-medium text-2xl sm:text-3xl lg:text-xl sm:leading-10 group-hover:text-kyellow">
          Uterus on Flower Print Mini Quilt for Planned Parenthood
        </div>
        <div className="w-full px-12 py-3 text-center font-quicksand text-white font-bold text-2xl sm:text-3xl lg:text-xl group-hover:text-kcyan">
          CA$200.00
        </div>
      </div>
    </div>
    <div className="flex mt-12">
      <button className="w-10/12 md:w-6/12 lg:w-4/12 py-4 md:py-6 text-2xl lg:text-3xl font-bold font-quicksand bg-kcyan drop-shadow-kmag4 rounded-full mx-auto text-white cursor-auto transition duration-150 hover:bg-kyellow hover:text-kmag ">
        View the Shop
      </button>
    </div>
  </div>
</section>

  )
}

export default WhatsNew