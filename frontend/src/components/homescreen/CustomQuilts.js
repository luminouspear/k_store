import React from 'react'
import TextCalloutBox from '../global/userinterface/TextCalloutBox';
import { KStoreTitle } from '../global/userinterface/KStoreTitle';
import { CTAButton } from '../global/userinterface/CTAButton';
import { LargeImageContainer } from '../global/userinterface/LargeImageContainer';

const CustomQuilts = (props) => {


  const { sectionTitle } = props

  return (
    <section className="w-full bg-[#111] pt-1 lg:pb-12 ">
      <div className="container w-full mx-auto mt-6 max-w-7xl md:mt-12">
        <h2 className="mx-auto text-center ">
          <KStoreTitle title={sectionTitle} textType={"sectionheader"} />
        </h2>
        <div className="static w-full mx-auto mt-16 lg:relative ">

          <LargeImageContainer contents={
            <img
              src={"/assets/image_dragonfly_spock.jpeg"}
              className="object-cover object-center w-full h-full"

              alt="Mr. Spock trying to help..."
            />
          } layoutPrefs={"lg:h-5/6 2xl:h-[90%]  2xl:right-0  xl:mx-0 lg:inline-block lg:translate-y-0 lg:translate-x-[45%]   shadow-kmag4"} />

          <TextCalloutBox layoutPrefs={" lg:top-[28%] xl:top-[25%] 2xl:top-[25%] lg:left-12  2xl:mx-0 2xl:-translate-x-24  2xl:ml-24  2xl:left-0 lg:w-5/12 "} >
            <>
              <h2 className="w-10/12 mx-auto mt-12 mb-12 text-3xl text-center text-white md:w-6/12 lg:w-10/12 font-quicksand md:text-4xl lg:text-kblack font-regular ">
                Want something made{" "}<br className="sm:hidden" />
                <KStoreTitle title="just for you?" textType="nocaps" />
                {" "}
                <br />

                Check out my quilt tops and projects in progress!
              </h2>
              <CTAButton text={"View Work in Progress"} level={"secondary"} />
            </>
          </TextCalloutBox>
        </div>
      </div>
    </section>
  )
}

export default CustomQuilts