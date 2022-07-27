import React from 'react'
import { CTAButton } from '../global/userinterface/CTAButton';
import { Link } from 'react-router-dom';
import { TextCalloutBox } from '../global/userinterface/TextCalloutBox'
import { KStoreTitle } from '../global/KStoreTitle';
import { Dot } from '../global/Dot';
import { HeroImageContainer } from './HeroImageContainer';

const HeroSection = ({ gallery }) => {



  return (
    <section className=" mx-auto max-w-7xl pb-0 md:pb-12">
      {/* Section Content Container */}
      <div className="max-w-full my-6 lg:my-12 lg:ml-6 mx-auto static lg:relative flex flex-col space-y-0 lg:block align-middle items-center content-center ">
        {/* Gallery Container */}
        <div className="flex flex-col w-full items-center lg:items-start lg:justify-start  ">
          {/* Image Container */}
          <HeroImageContainer gallery={gallery} />
          <div className="w-full lg:w-8/12 h-6 md:h-8 flex justify-center align-middle items-center content-center space-x-4 pt-6">
            <Dot dotState="active" />
            <Dot />
            <Dot />
          </div>

        </div>

        <TextCalloutBox contents={
          <>
            <h1 className="mt-12 w-10/12 md:w-6/12 lg:w-10/12 mx-auto font-quicksand text-4xl xl:text-5xl text-center text-white lg:text-kblack font-normal leading-tight xl:leading-[3.6rem] ">


              <KStoreTitle title={"handmade quilts"} textType={"subheader"} />


              crafted in Barrie, Ontario, Canada</h1>

              <CTAButton text="See What's Available" level="primary" location="/shop" />


          </>
        } layoutPrefs={"md:-mt-12 lg:top-[45%] lg:right-6 lg:-translate-x-0 xl:translate-x-0 lg:ml-16 2xl:ml-24 xl:ml-24 2xl:left-1/2 "} />


      </div>
    </section>
  )
}

export default HeroSection
