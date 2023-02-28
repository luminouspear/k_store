import React, { useEffect } from 'react'

import { CTAButton } from '../global/userinterface/CTAButton';
import ProductTileImage from '../products/ProductTileImage';
import { KStoreTitle } from '../global/userinterface/KStoreTitle';
import { useSelector, useDispatch } from 'react-redux';
import { getGalleryDetails as listGallery } from '../../redux/actions/galleryActions'

export default function GalleryPreview(props) {

  const dispatch = useDispatch()

  const getGalleryDetails = useSelector(state => state.getGalleryDetails)
  const { gallery, galleryLoading, galleryError } = getGalleryDetails

  const { sectionTitle } = props
  const id = "HomeScreen"
  const pathToImages = "/assets/"

  useEffect(() => {
    dispatch(listGallery(id));
  }, [dispatch, id]);

  let galleryPreviewImages = []



  if (!galleryLoading && !galleryError && gallery.images) {
    console.log(gallery)
    galleryPreviewImages = [...gallery.images].map((image, index) => {

      return (<ProductTileImage
        key={index}
        imageUrl={image.galleryItemURL}
        imageAlt={image.galleryItemAlt}
        id={image.id}
      />)
    })
  }
  if (galleryLoading) {
    galleryPreviewImages = <h2>Loading...</h2>
  } else if (galleryError) {
    galleryPreviewImages = <h2>{galleryError}</h2>
  } else if (!galleryLoading && !galleryError && !gallery) {
    galleryPreviewImages = <h2>No images found in the gallery.</h2>;
  }

  return (
    <React.Fragment>
      {galleryLoading ? <div>Loading...</div> : galleryError ? <div> {galleryError}</div>
        : <section className="w-full py-12 bg-gray-900">
          <div className="container w-full mx-auto mt-6 bg-transparent max-w-7xl md:mt-12">
            <h2 className="mx-auto text-center ">
              <KStoreTitle title={sectionTitle} textType={"sectionheader"} />
            </h2>

            <div className="grid grid-cols-2 gap-6 mx-12 mt-12 lg:mt-24 md:gap-12 md:gap-y-12 lg:gap-y-12 lg:grid-cols-3 2xl:gap-12">

              {galleryPreviewImages}

            </div>
            <div className="w-full mx-auto mt-12 md:w-10/12 lg:w-5/12">
              <CTAButton text={"View the Gallery"} level={"secondary"} location={"/gallery"}
              layoutPrefs="w-10/12 lg:w-full mx-auto lg:mb-12" />
            </div>
          </div>
        </section>
      }
    </React.Fragment>)
}