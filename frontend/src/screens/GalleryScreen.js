import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import JoinMailingList from '../components/global/footer_elements/JoinMailingList';
import FAQ from '../components/global/footer_elements/faq/FAQ';
import ContactMe from '../components/global/footer_elements/ContactMe';
import Footer from '../components/global/footer_elements/Footer';
import { getGallery as listGallery } from '../redux/actions/galleryActions';

const Gallery = () => {

  const dispatch = useDispatch()

  const getGallery = useSelector(state => state.getGallery)

  const { galleryData, galleryLoading, galleryError } = getGallery

  useEffect(() => {
    dispatch(listGallery())
  }, [dispatch])




  return (
    <div className="gallery">Gallery



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