import React from 'react'
import { CTAButton } from '../global/userinterface/CTAButton';
import { Link } from 'react-router-dom';
import TextCalloutBox from '../global/userinterface/TextCalloutBox'
import { KStoreTitle } from '../global/userinterface/KStoreTitle';
import { Dot } from '../global/userinterface/Dot';
import { HeroImageContainer } from './HeroImageContainer';

const HeroSection = ({ gallery }) => {



  return (

    <section className="w-full mx-auto max-w-7xl">
        <div className="w-full mx-auto h-fit">
        <div className="w-full px-4 mx-auto lg:px-0 ">
            <div className="flex flex-col lg:grid lg:grid-flow-row grid-cols-1 lg:grid-cols-[repeat(16,_minmax(0,_1fr))] lg:grid-rows-[repeat(16,_minmax(0,_1fr))] pb-4 lg:pb-0 mx-8">

            <div
              className="row-start-2 lg:col-start-1 lg:col-span-12 lg:row-span-full">
              <HeroImageContainer
                gallery={gallery}
                containerPrefs={"rounded-3xl shadow-kcyan4  overflow-hidden md:scale-[90%] mb-8 md:-mb-16 2xl:scale-[90%] origin-top lg:origin-top-left lg:mt-8"}
                layoutPrefs={" rounded-3xl "}
              />
            </div>

            <div className=" lg:col-span-full lg:col-start-10 xl:col-start-10  xl:col-span-7 2xl:col-start-9 2xl:col-span-8 lg:row-start-[7] 2xl:row-start-[7]  lg:row-span-3 z-10 lg:-translate-x-0">
              <TextCalloutBox layoutPrefs={"w-auto lg:block"}>
           <>
             <h1 className="lg:mt-12 w-10/12 md:w-8/12 lg:w-10/12 mx-auto font-quicksand text-4xl sm:text-5xl xl:text-5xl text-center text-white lg:text-kblack font-normal leading-tight xl:leading-[3.6rem] ">

               <KStoreTitle title={"handmade quilts"} textType={"subheader"} />


               crafted in Barrie, Ontario, Canada</h1>
               <CTAButton text="See What's Available" level="primary" location="/shop" />


           </>
        </TextCalloutBox>
                    </div>

            </div>
        </div>
      </div>
      </section>

//     <section className="w-full mx-auto max-w-7xl md:pb-12">
//       {/* Section Content Container */}
//       <div className="w-full mx-auto max-w-7xl h-fit">
//         <div className="w-full px-4 lg:px-32 mx-auto lg:h-[800px] xl:h-[900px] 2xl:h-[1000px]">
//           <div className="w-full h-full aspect-[4/5] md:aspect-square lg:aspect-none lg:col-span-8 xl:col-span-6 lg:col-start-1 xl:col-start-1 lg:row-[span_10_/_span_10] lg:row-start-2">
//         {/* Gallery Container */}
//           {/* Image Container */}
//
//           <div className="flex items-center content-center justify-center w-full h-6 pt-6 space-x-4 align-middle lg:w-8/12 md:h-8">
//             <Dot dotState="active" />
//             <Dot />
//             <Dot />
//           </div>

//         </div>

//         <TextCalloutBox layoutPrefs={" lg:h-auto lg:col-span-6 lg:col-start-7 lg:row-span-3 lg:row-start-7 xl:row-span-4 xl:row-start-6 xl:col-start-6"}>
//           <>
//             <h1 className="mt-12 w-10/12 md:w-6/12 lg:w-10/12 mx-auto font-quicksand text-4xl xl:text-5xl text-center text-white lg:text-kblack font-normal leading-tight xl:leading-[3.6rem] ">


//               <KStoreTitle title={"handmade quilts"} textType={"subheader"} />


//               crafted in Barrie, Ontario, Canada</h1>

//               <CTAButton text="See What's Available" level="primary" location="/shop" />


//           </>
//        </TextCalloutBox>

// </div>
//       </div>
//     </section>
  )
}

export default HeroSection
