import React from 'react'
import { LargeImageContainer } from '../global/userinterface/LargeImageContainer';
import TextCalloutBox from '../global/userinterface/TextCalloutBox';
import { CTAButton } from '../global/userinterface/CTAButton';
import { KStoreTitle } from '../global/userinterface/KStoreTitle';

const AboutKendall = (props) => {

  const { sectionTitle } = props

  return (
    <section className="container w-full mx-auto mt-6 bg-transparent  max-w-7xl md:mt-12">

      <h2 className="mx-auto text-center ">
        <KStoreTitle title={sectionTitle} textType={"sectionheader"} />
      </h2>

      <div className="w-full mt-16 lg:h-[72vh] xl:h-[65vh] 2xl:h-[75vh]    mx-auto static lg:relative">


        <LargeImageContainer contents={


            <img
              src={require("../../assets/image_portrait_kendall.png")}

              className="object-cover w-full h-full object-top-middle"

              alt="Kendall, the artist"
            />

        } layoutPrefs={ " lg:h-5/6 2xl:h-[80%]  lg:left-0 xl:left-12 lg:mx-12 xl:mx-0 lg:absolute  xl:translate-x-0 shadow-kyellow4 " } />


        <TextCalloutBox layoutPrefs={" lg:top-[28%] xl:top-[33%] 2xl:top-[40%] lg:right-0 lg:mx-12 2xl:mx-0 2xl:-translate-x-24  2xl:ml-24 lg:w-5/12 "} >
          <>

            <h2 className=" mb-12 lg:my-12 w-10/12 md:w-6/12 lg:w-10/12 mx-auto font-quicksand text-3xl lg:text-4xl text-center text-white lg:text-kblack font-regular leading-[3.8rem] lg:leading-tight">
              Kendall is a quilter, crafter and maker who believes in living life in
              <KStoreTitle title="full colour!" textType="nocaps" />




            </h2>
            <CTAButton text="Learn More" level="secondary" location="/meetkendall" />


          </>
        </TextCalloutBox>

      </div>

    </section>
  )
}

export default AboutKendall