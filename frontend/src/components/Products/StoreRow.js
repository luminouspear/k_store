import React from 'react'
import { CTAButton } from '../global/userinterface/CTAButton';
import ProductTile from './ProductTile';
import { KStoreSubtitle } from "../global/KStoreSubtitle";

const WhatsNew = (props) => {


  const { newestItems, sectionTitle } = props
  const newestProducts = newestItems.map((product) => ProductTile(product))

  return (
    <section className="w-full bg-[#111] pt-6 pb-5">
      <div className="w-full max-w-7xl container mx-auto bg-transparent mt-6 md:mt-12 mb-12">
        <h2 className="mx-auto text-center ">
          {KStoreSubtitle(sectionTitle)}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:grid-flow-row mt-12 lg:mt-24  items-center flex-col md:items-start mx-12 xl:mx-0  ">
          {newestProducts}
        </div>
        <div className="w-full md:w-10/12 lg:w-5/12 mx-auto">
          <CTAButton text={"See What's Available"} level={"secondary"} location={"/shop"} />
        </div>
      </div>
    </section>

  )


}

export default WhatsNew
