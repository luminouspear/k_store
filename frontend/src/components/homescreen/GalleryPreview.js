import React, { useEffect } from 'react'

import { CTAButton } from '../global/userinterface/CTAButton';
import ProductTileImage from '../products/ProductTileImage';
import { KStoreTitle } from '../global/userinterface/KStoreTitle';
import { useSelector, useDispatch } from 'react-redux';
import { getGalleryDetails as listGallery } from '../../redux/actions/galleryActions'

const GalleryPreview = (props) => {

  const dispatch = useDispatch()

  const getGalleryDetails = useSelector(state => state.getGalleryDetails)
  const { gallery, galleryLoading, galleryError } = getGalleryDetails

  const { sectionTitle } = props
  const id = "HomeScreen"
  const pathToImages = "/assets/"


  useEffect(() => {
        dispatch(listGallery(id))
  }, [dispatch, id])





  let galleryPreviewImages = []

  if (gallery && galleryLoading === false) {
    galleryPreviewImages = galleryLoading
      ? (<h2>Loading...</h2>)
      : galleryError ? (<h2>{galleryError}</h2>)
        : gallery.images.map(image =>
          ProductTileImage(image.galleryItemURL, image.galleryItemAlt, image.id, pathToImages))
  }


  return ({
    if (galleryLoading) {
        <div>Loading...</div>
  } else {
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
  }
})

export default GalleryPreview