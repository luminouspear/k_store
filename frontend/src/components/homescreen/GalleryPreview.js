import React from 'react'
import { CTAButton } from '../global/userinterface/CTAButton';
import { KStoreSubtitle } from '../global/KStoreSubtitle';
import ProductTileImage from '../products/ProductTileImage';

const GalleryPreview = (props) => {

  const { sectionTitle, galleryImages } = props
  const galleryPreviewImages = galleryImages.map((image) => ProductTileImage(image))


  return (
    <section className="w-full bg-[#111] py-12">
      <div className="w-full max-w-7xl container mx-auto bg-transparent mt-6 md:mt-12">
        <h2 className="mx-auto text-center ">
          {KStoreSubtitle(sectionTitle)}
        </h2>

        <div className="mx-12 mt-12 lg:mt-24 grid grid-cols-2 gap-6 gap-y-0 md:gap-12 md:gap-y-0 lg:gap-y-12 lg:grid-cols-3 2xl:gap-12">

          {galleryPreviewImages}

        </div>
        <div className="w-full md:w-10/12 lg:w-5/12 mx-auto">
          <CTAButton text={"View the Galllery"} level={"secondary"} location={"/gallery"} />
        </div>
      </div>
    </section>
  )
}

export default GalleryPreview