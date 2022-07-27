import React from 'react'
import { KStoreSubtitle } from '../global/KStoreSubtitle';
import { TextCalloutBox } from '../global/userinterface/TextCalloutBox';
import { KStoreTitle } from '../global/KStoreTitle';
import { CTAButton } from '../global/userinterface/CTAButton';
import { LargeImageContainer } from '../global/userinterface/LargeImageContainer';

const CustomQuilts = (props) => {


  const { sectionTitle } = props

  return (
    <section className="w-full bg-[#111] pt-1">
      <div className="w-full max-w-7xl container mx-auto  mt-6 md:mt-12 ">
        {KStoreSubtitle(sectionTitle)}
        <div className="w-full mt-16 lg:h-[72vh] xl:h-[65vh] 2xl:h-[75vh]  mx-auto static lg:relative ">

          <LargeImageContainer contents={
              <img
                src={require("../../assets/image_dragonfly_spock.jpeg")}
                className="object-cover object-center w-full h-full"
                loading="lazy"
                alt="Mr. Spock trying to help..."
              />
          } layoutPrefs={"lg:h-5/6 2xl:h-[90%] lg:right-0 xl:right-12 2xl:right-0 lg:mx-12 xl:mx-0 lg:absolute lg:translate-y-12 xl:translate-x-0   shadow-kmag4"} />

          <TextCalloutBox contents={
            <>
              <h2 className="mt-12 mb-12 w-10/12 md:w-6/12 lg:w-10/12 mx-auto font-quicksand text-3xl md:text-4xl text-center text-white lg:text-kblack font-regular   ">
                Want something made{" "}<br className="sm:hidden" />
                <KStoreTitle title="just for you?" textType="nocaps" />
                {" "}
                <br />

                Check out my quilt tops and projects in progress!
              </h2>
              <CTAButton text={"View Work in Progress"} level={"secondary"} />
            </>
          } layoutPrefs={" xl:mt-24 lg:top-[28%] xl:top-[33%] 2xl:top-[33%] lg:left-0 lg:mx-12 2xl:mx-0 2xl:-translate-x-24  2xl:ml-24  2xl:left-0 "} />
        </div>
      </div>
    </section>
  )
}

export default CustomQuilts