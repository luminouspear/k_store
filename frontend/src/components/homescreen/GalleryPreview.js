import React from 'react'

import { CTAButton } from '../global/userinterface/CTAButton';
import ProductTileImage from '../products/ProductTileImage';
import { KStoreTitle } from '../global/userinterface/KStoreTitle';


const GalleryPreview = (props) => {

  const { sectionTitle, gallery, galleryLoading, galleryError } = props

  console.log(sectionTitle, gallery, galleryLoading, galleryError)

  const galleryPreviewImages = galleryLoading
  ? (<h2>Loading...</h2>)
  : galleryError ? (<h2>{galleryError}</h2>)
  : (gallery.images.map(image => ProductTileImage(image.galleryItemURL, image.galleryItemAlt, image.id)))


  console.log(sectionTitle, gallery, galleryLoading, galleryError)

  return (
    <section className="w-full bg-[#111] py-12">
      <div className="container w-full mx-auto mt-6 bg-transparent max-w-7xl md:mt-12">
        <h2 className="mx-auto text-center ">
          <KStoreTitle title={sectionTitle} textType={"sectionheader"} />
        </h2>

        <div className="grid grid-cols-2 gap-6 mx-12 mt-12 lg:mt-24 gap-y-0 md:gap-12 md:gap-y-0 lg:gap-y-12 lg:grid-cols-3 2xl:gap-12">

          {galleryPreviewImages}

        </div>
        <div className="w-full mx-auto md:w-10/12 lg:w-5/12">
          <CTAButton text={"View the Gallery"} level={"secondary"} location={"/gallery"} />
        </div>
      </div>
    </section>
  )
}

export default GalleryPreview