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
              className="object-cover object-center w-full bg-no-repeat rounded-3xl shadow-kyellow4 hover:shadow-kcyan4 isolate"
              alt="Kendall, the artist" />
          </div>
          <div className="w-full py-0 lg:mx-4 lg:p-8 lg:col-span-6 lg:col-start-6 xl:col-start-6 lg:row-start-1 lg:translate-y-48 lg:translate-y-32 xl:translate-y-48 lg:h-fit lg:max-w-lg">
            <TextCalloutBox layoutPrefs="">
              <h2 className="w-10/12 mx-auto my-12 text-3xl lg:w-10/12 xl:w-10/12 font-quicksand lg:text-4xl text-center text-white lg:text-kblack font-regular leading-[3.8rem] lg:leading-tight "
              >
                Kendall is a quilter, crafter, maker and artist who believes in living life in <span className="whitespace-nowrap"><KStoreTitle title="full colour!" textType="nocaps" /></span>
              </h2>
            </TextCalloutBox>
          </div>
      </div>
        <div className="w-full mx-auto md:w-10/12 lg:w-5/12">
          <CTAButton text={"Meet Kendall"} level={"secondary"} location={"/meetkendall"} onClick={props.scrollToTop}  />
            </div>


        </div>
    </section>


    // <section className="container w-full mx-auto mt-6 bg-transparent max-w-7xl md:mt-12">

    //   <h2 className="mx-auto text-center ">
    //     <KStoreTitle title={sectionTitle} textType={"sectionheader"} />
    //   </h2>

    //   <div className="w-full mt-16 lg:h-[72vh] xl:h-[65vh] 2xl:h-[75vh]    mx-auto static lg:relative">


    //     <TextCalloutBox layoutPrefs={" lg:top-[28%] xl:top-[33%] 2xl:top-[40%] lg:right-0 lg:mx-12 2xl:mx-0 2xl:-translate-x-24  2xl:ml-24 lg:w-5/12 "} >
    //       <>

    //         <h2 className=" mb-12 lg:my-12 w-10/12 md:w-6/12 lg:w-10/12 mx-auto font-quicksand text-3xl lg:text-4xl text-center text-white lg:text-kblack font-regular leading-[3.8rem] lg:leading-tight">
    //           Kendall is a quilter, crafter and maker who believes in living life in
    //           <KStoreTitle title="full colour!" textType="nocaps" />




    //         </h2>
    //         <CTAButton text="Learn More" level="secondary" location="/meetkendall" />


    //       </>
    //     </TextCalloutBox>

    //   </div>

    // </section>







/*
      <div className="flex flex-col w-full border-4 border-red-500 md:flex-row">
      w-full mt-16 lg:h-[72vh] xl:h-[65vh] 2xl:h-[75vh]    mx-auto static lg:relative


        <LargeImageContainer contents={


            <img
              src={"/assets/image_portrait_kendall.jpg"}

            className="object-cover w-full h-full object-top-middle"

            alt="Kendall, the artist"
            />


        }
        // layoutPrefs={" lg:h-5/6 2xl:h-[80%]  lg:left-0 xl:left-12 lg:mx-12 xl:mx-0 lg:absolute  xl:translate-x-0 shadow-kyellow4 "}
        />


        <TextCalloutBox
          // layoutPrefs={" lg:top-[28%] xl:top-[33%] 2xl:top-[40%] lg:right-0 lg:mx-12 2xl:mx-0 2xl:-translate-x-24  2xl:ml-24 lg:w-5/12 "}
        >
          <>

            <h2
              // className=" mb-12 lg:my-12 w-10/12 md:w-6/12 lg:w-10/12 mx-auto font-quicksand text-3xl lg:text-4xl text-center text-white lg:text-kblack font-regular leading-[3.8rem] lg:leading-tight"
            >
              Kendall is a quilter, crafter and maker who believes in living life in
              <KStoreTitle title="full colour!" textType="nocaps" />




            </h2>
            <CTAButton text="Learn More" level="secondary" location="/meetkendall" />


          </>
        </TextCalloutBox>

      </div> */

  )
}

export default AboutKendall