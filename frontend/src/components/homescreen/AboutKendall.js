import React from 'react'
import { LargeImageContainer } from '../global/userinterface/LargeImageContainer';
import TextCalloutBox from '../global/userinterface/TextCalloutBox';
import { CTAButton } from '../global/userinterface/CTAButton';
import { KStoreTitle } from '../global/userinterface/KStoreTitle';

const AboutKendall = (props) => {

  const { sectionTitle } = props

  return (

    <section className="container py-12 mx-auto md:py-16 max-w-7xl">
        <h2 className="mx-auto mb-8 text-center lg:mb-12">
          <KStoreTitle title={sectionTitle} textType="sectionheader" />
        </h2>
      <div>
        <div className="container flex flex-col w-full mx-auto max-w-7xl lg:grid lg:grid-flow-row lg:grid-cols-12 h-fit lg:grid-rows-1">
          <div className="w-full p-8 pt-2 mx-auto lg:w-3/4 lg:col-start-1 lg:col-span-8 lg:row-start-1 ">
            <img
              src={"/assets/image_portrait_kendall.jpg"}
              className="object-cover object-center w-full bg-no-repeat rounded-3xl shadow-kyellow4 hover:shadow-kcyan4 isolate content-auto"
              alt="Kendall, the artist"
            loading="lazy"
          decoding="async"/>
          </div>
          <div className="w-full py-0 lg:mx-4 lg:p-8 lg:col-span-6 lg:col-start-6 xl:col-start-6 lg:row-start-1 lg:translate-y-32 xl:translate-y-48 lg:h-fit lg:max-w-lg">
            <TextCalloutBox layoutPrefs="">
              <h2 className="flex flex-col items-center justify-center w-10/12 mx-auto mb-6 lg:my-12 lg:w-10/12 xl:w-10/12"
              >
                <span className="text-2xl md:text-3xl text-center text-white font-quicksand sm:text-5xl lg:text-kblack font-normal leading-tighter sm:leading-[3.6rem]  ">Kendall is a quilter, crafter, maker and artist who believes in living life in</span> <span className="flex"><KStoreTitle title="full colour!" textType="nocaps" layoutPrefs="whitespace-nowrap" /></span>
              </h2>
            </TextCalloutBox>
          </div>
      </div>
        <div className="w-full mx-auto lg:mt-16 md:w-10/12 lg:w-5/12">
          <CTAButton text={"Meet Kendall"} level={"secondary"} location={"/meetkendall"} onClick={props.scrollToTop}
            layoutPrefs="w-10/12 lg:w-full mx-auto lg:mb-0" />
            </div>
        </div>
    </section>
  )
}

export default AboutKendall