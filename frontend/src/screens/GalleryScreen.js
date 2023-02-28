import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { KStoreTitle } from '../components/global/userinterface/KStoreTitle';

import JoinMailingList from '../components/global/footer_elements/JoinMailingList';
import FAQ from '../components/global/footer_elements/faq/FAQ';
import ContactMe from '../components/global/footer_elements/ContactMe';
import Footer from '../components/global/footer_elements/Footer';
import { getGalleries as listGallery } from '../redux/actions/galleryActions'
import { GalleryTemplate } from './GalleryTemplate';

const Gallery = ({onSelectImage}) => {

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
          <div className="flex flex-col items-center ">
            <p className="mx-6 my-12 text-3xl font-medium text-center text-white lg:w-1/2 font-quicksand">A selection of some of Kendall's most recent work and some longtime favorites.</p>
          </div>
          <>
            {galleries
              .filter(({ galleryName }) => !hiddenGalleries.includes(galleryName))
              .sort((a,b) => a.galleryNumber < b.galleryNumber)
              .map(({ galleryName, galleryDescription, galleryNumber, images }) => (
              <div key={galleryNumber}>
                <GalleryTemplate title={galleryName} description={galleryDescription} images={images} pathToImages={pathToImages } onSelectImage={onSelectImage} />
              </div>
            ))}
          </>
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

export default Gallery