import React from 'react'
import { CTAButton } from '../global/userinterface/CTAButton';
import { Link } from 'react-router-dom';
import TextCalloutBox from '../global/userinterface/TextCalloutBox'
import { KStoreTitle } from '../global/userinterface/KStoreTitle';
import { Dot } from '../global/userinterface/Dot';
import { HeroImageContainer } from './HeroImageContainer';

const HeroSection = ({ gallery }) => {



  return (
    <section className="pb-0 mx-auto  max-w-7xl md:pb-12">
      {/* Section Content Container */}
      <div className="static flex flex-col items-center content-center max-w-full mx-auto my-6 align-middle lg:my-12 lg:ml-6 lg:relative space-y-0 lg:block ">
        {/* Gallery Container */}
        <div className="flex flex-col items-center w-full lg:items-start lg:justify-start ">
          {/* Image Container */}
          <HeroImageContainer gallery={gallery} />
          <div className="flex items-center content-center justify-center w-full h-6 pt-6 align-middle lg:w-8/12 md:h-8 space-x-4">
            <Dot dotState="active" />
            <Dot />
            <Dot />
          </div>

        </div>

        <TextCalloutBox layoutPrefs={"md:-mt-12 lg:top-[45%] lg:right-6 lg:-translate-x-0 xl:translate-x-0 lg:ml-16 2xl:ml-24 xl:ml-24 2xl:right-7/8 lg:w-5/12"}>
          <>
            <h1 className="mt-12 w-10/12 md:w-6/12 lg:w-10/12 mx-auto font-quicksand text-4xl xl:text-5xl text-center text-white lg:text-kblack font-normal leading-tight xl:leading-[3.6rem] ">


              <KStoreTitle title={"handmade quilts"} textType={"subheader"} />


              crafted in Barrie, Ontario, Canada</h1>

              <CTAButton text="See What's Available" level="primary" location="/shop" />


          </>
       </TextCalloutBox>


      </div>
    </section>
  )
}

export default HeroSection
