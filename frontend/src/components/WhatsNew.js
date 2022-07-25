import React from 'react'
import { CTAButton } from './Global/CTAButton';
import ProductTile from './Products/ProductTile';
import { KStoreSubtitle } from "./Global/KStoreSubtitle";

const WhatsNew = (props) => {


  const { newestItems, sectionTitle } = props
  const newestProducts = newestItems.map((product) => ProductTile(product))

  const sectionString = sectionTitle.toString()
  console.log(`sectionString is: ${sectionString}`)


  return (
    <section className="w-full bg-[#111] pt-6 pb-5">
      <div className="w-full max-w-7xl container mx-auto bg-transparent mt-6 md:mt-12 mb-12">
        <h2 className="mx-auto text-center ">
          {KStoreSubtitle(sectionTitle)}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:grid-flow-row mt-12 lg:mt-24  items-center flex-col md:items-start mx-12 xl:mx-0 ">
          {newestProducts}
          {newestProducts}
        </div>
        <div className="w-full md:w-10/12 lg:w-5/12 mx-auto">
          {CTAButton("View the Shop", "secondary")}</div>
      </div>
    </section>

  )


}

export default WhatsNew
