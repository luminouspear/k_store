import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { KStoreTitle } from '../components/global/userinterface/KStoreTitle';
import  ProductTileImage  from '../components/products/ProductTileImage'

import JoinMailingList from '../components/global/footer_elements/JoinMailingList';
import FAQ from '../components/global/footer_elements/faq/FAQ';
import ContactMe from '../components/global/footer_elements/ContactMe';
import Footer from '../components/global/footer_elements/Footer';
import { getGalleries as listGallery } from '../redux/actions/galleryActions'

const Gallery = () => {

  const dispatch = useDispatch()

  const getGalleries = useSelector(state => state.getGalleries)
  const { galleries, galleriesLoading, galleriesError } = getGalleries

  console.log('getGalleries: ', getGalleries);
  const sectionTitle = "Gallery"

  const pathToImages = "/assets/"
  const hiddenGalleries = ["HomeScreen"]


  useEffect(() => {
    dispatch(listGallery())
  }, [dispatch])




  return (
    <div className="gallery">
        <section className="w-full bg-[#111] py-12">
      <div className="container w-full mx-auto mt-6 bg-transparent max-w-7xl md:mt-12">
        <h2 className="mx-auto text-center ">
          <KStoreTitle title={sectionTitle} textType={"sectionheader"} />
          </h2>
          <p className="mx-auto my-12 text-3xl font-medium text-center text-white lg:w-1/2 font-quicksand">A selection of some of Kendall's most recent work and some longtime favorites.</p>
          <div>
            {galleries
              .filter(({ galleryName }) => !hiddenGalleries.includes(galleryName))
              .sort((a,b) => a.galleryNumber < b.galleryNumber)
              .map(({ galleryName, galleryDescription, galleryNumber, images }) => (
              <div key={galleryNumber}>
                <GalleryTemplate title={galleryName} description={galleryDescription} images={images} pathToImages={pathToImages } />
              </div>
            ))}
          </div>
          </div>
          </section>



        <div className="w-full py-0 mx-auto md:w-10/12 lg:w-8/12 ">
          <JoinMailingList />
          <FAQ />
          <ContactMe />
          <Footer />
        </div>
      </div>
  )
}

function GalleryTemplate({ title, description, images, pathToImages }) {
    return (
      <div>
        <h3 className="w-full mx-auto my-12 text-4xl text-center">
          <KStoreTitle title={title} textType={"subheading"}></KStoreTitle>
        </h3>
        <p className="w-8/12 mx-auto mb-12 text-2xl text-center text-white font-quicksand">
          {description}
        </p>
        <div className="grid grid-cols-2 gap-6 mx-6 lg:grid-cols-3 ">
          {
            images.map(image =>
              (<ProductTileImage imageUrl={image.galleryItemURL} imageAlt={image.galleryItemAlt} localPath={pathToImages} key={image.id} />))
          }

        </div>

      </div>
    )
  }

export default Gallery