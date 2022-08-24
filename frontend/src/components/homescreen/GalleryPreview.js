import React, { useEffect } from 'react'

import { CTAButton } from '../global/userinterface/CTAButton';
import ProductTileImage from '../products/ProductTileImage';
import { KStoreTitle } from '../global/userinterface/KStoreTitle';
import { useSelector, useDispatch } from 'react-redux';
import { getGallery as listGallery } from '../../redux/actions/galleryActions'

const GalleryPreview = (props) => {

  const dispatch = useDispatch()

  const getGallery = useSelector(state => state.getGallery)
  const { gallery, galleryLoading, galleryError } = getGallery
  // const { sectionTitle, gallery, galleryLoading, galleryError } = props
  const { sectionTitle } = props



  useEffect(() => {
        dispatch(listGallery())
   }, [dispatch])


  const galleryPreviewImages = galleryLoading
  ? (<h2>Loading...</h2>)
  : galleryError ? (<h2>{galleryError}</h2>)
  : (gallery.length > 0 && gallery[0].images.map(image => ProductTileImage(image.galleryItemURL, image.galleryItemAlt, image.id)))



  return (
    <section className="w-full bg-[#111] py-12">
      <div className="container w-full mx-auto mt-6 bg-transparent max-w-7xl md:mt-12">
        <h2 className="mx-auto text-center ">
          <KStoreTitle title={sectionTitle} textType={"sectionheader"} />
        </h2>

        <div className="grid grid-cols-2 gap-6 mx-12 mt-12 lg:mt-24 md:gap-12 md:gap-y-12 lg:gap-y-12 lg:grid-cols-3 2xl:gap-12">

          { galleryPreviewImages }

        </div>
        <div className="w-full mx-auto md:w-10/12 lg:w-5/12">
          <CTAButton text={"View the Gallery"} level={"secondary"} location={"/gallery"} />
        </div>
      </div>
    </section>
  )
}

export default GalleryPreview