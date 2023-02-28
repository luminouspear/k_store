import React, { Fragment, useState, useEffect } from 'react'
import {  useDispatch, useSelector } from 'react-redux'

//Actions
import { getProducts as listProducts } from '../redux/actions/productActions'
// import { getGallery as listGallery } from '../redux/actions/galleryActions'


import HeroSection from '../components/homescreen/HeroSection'
import WhatsNew from '../components/homescreen/WhatsNew'
import StoreRow from '../components/products/StoreRow'
import CustomQuilts from '../components/homescreen/CustomQuilts'
import GalleryPreview from '../components/homescreen/GalleryPreview'
import AboutKendall from '../components/homescreen/AboutKendall'
import JoinMailingList from '../components/global/footer_elements/JoinMailingList'
import FAQ from '../components/global/footer_elements/faq/FAQ'
import ContactMe from '../components/global/footer_elements/ContactMe'
import Footer from '../components/global/footer_elements/Footer'

import { carouselData } from '../components/global/localdata/CarouselData'
import { faqData } from '../components/global/localdata/FAQData'

function HomeScreen(props) {


  const [carousel, setCarousel] = useState(carouselData)

  const [sectionTitles, setSectionTitles] = useState(["what's new", "work in progress", "kendall's Favourites", "about kendall", "join my mailing list", "frequently asked questions", "contact me"])
  const [faqs, setFaqData] = useState(faqData)

  const dispatch = useDispatch()

  const getProducts = useSelector(state => state.getProducts)
  const { products, loading, error } = getProducts

  const [homeScreenCount, setHomeScreenCount] = useState(3)

  useEffect(() => {
    dispatch(listProducts())
   }, [dispatch])



  return (
    <Fragment>
      <HeroSection gallery={carousel} />
      <WhatsNew sectionTitle={sectionTitles[0]} >
        <StoreRow
          products={products}
          productsLoading={loading}
          productError={error}
          count={ homeScreenCount } />
      </WhatsNew>
      <CustomQuilts
        sectionTitle={sectionTitles[1]} />
      <GalleryPreview
        sectionTitle={sectionTitles[2]}
         />
      <AboutKendall
        sectionTitle={sectionTitles[3]}
        scrollToTop={props.scrollToTop} />
      <JoinMailingList
        sectionTitle={sectionTitles[4]} />
      <FAQ
        sectionTitle={sectionTitles[5]}
        faqData={faqs} />
      <ContactMe
        sectionTitle={sectionTitles[6]} />
      <Footer />
    </Fragment>
  )
}

export default HomeScreen