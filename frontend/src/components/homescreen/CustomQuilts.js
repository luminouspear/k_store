import React from 'react'
import TextCalloutBox from '../global/userinterface/TextCalloutBox';
import { KStoreTitle } from '../global/userinterface/KStoreTitle';
import { CTAButton } from '../global/userinterface/CTAButton';
import { LargeImageContainer } from '../global/userinterface/LargeImageContainer';

export default function CustomQuilts(props) {


  const { sectionTitle } = props

  return (
    <section className="w-full bg-[#111] pt-1 pb-8 lg:pb-12 ">
      <div className="container w-full mx-auto mt-6 max-w-7xl md:mt-12">
        <h2 className="mx-auto text-center ">
          <KStoreTitle title={sectionTitle} textType={"sectionheader"} />
        </h2>
        <div className="static w-full mx-auto mt-16 lg:relative ">

          <LargeImageContainer contents={
            <img
              src={"/assets/image_dragonfly_spock.jpg"}
              className="object-cover object-center w-full h-full"
              alt="Mr. Spock trying to help..."
              loading="lazy"
          decoding="async"
            />
          } layoutPrefs={"lg:h-5/6 2xl:h-[90%]  2xl:right-0  xl:mx-0 lg:inline-block lg:translate-y-0 lg:translate-x-[45%]   shadow-kmag4"} />

          <TextCalloutBox layoutPrefs={" text-center lg:top-[28%] xl:top-[25%] 2xl:top-[25%] lg:left-12  2xl:mx-0 2xl:-translate-x-24  2xl:ml-24  2xl:left-0 lg:w-5/12 mx-auto "} >
            <>
              <h2 className="w-full mx-auto mt-12 mb-12 md:w-6/12 lg:w-10/12 ">
                <span className="text-3xl md:text-3xl text-center text-white font-quicksand sm:text-5xl lg:text-kblack font-normal leading-tight sm:leading-[3.6rem] ">Want something made{" "}<br className="sm:hidden" /></span>
                <span className="flex flex-col items-center h-fit"><KStoreTitle title="just for you?" textType="nocaps" /></span>
                {" "}
               <span className="text-3xl md:text-3xl text-center text-white font-quicksand sm:text-5xl lg:text-kblack font-normal leading-tight sm:leading-[3.6rem] "><br />

                Check out my quilt tops and projects in progress!</span>
              </h2>
              <CTAButton text={"View Work in Progress"} level={"secondary"}
              layoutPrefs="w-10/12 lg:w-full mx-auto lg:mb-12" />
            </>
          </TextCalloutBox>
        </div>
      </div>
    </section>
  )
}