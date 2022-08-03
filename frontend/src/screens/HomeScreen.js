import React, { Fragment, useState, useEffect } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'

//Actions
import { getProducts as listProducts } from '../redux/actions/productActions'

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

import { galleryData } from '../components/global/localdata/GalleryData'
import { carouselData } from '../components/global/localdata/CarouselData'
import { productData } from '../components/global/localdata/ProductData'
import { faqData } from '../components/global/localdata/FAQData'

function HomeScreen(props) {

  const [current, setCurrent] = useState(0)
  const [carousel, setCarousel] = useState(carouselData)
  const [previewGallery, setPreviewGallery] = useState(galleryData)
  // const [productList, setProductsData] = useState(productData)
  const [sectionTitles, setSectionTitles] = useState(["what's new", "work in progress", "kendall's Favourites", "about kendall", "join my mailing list", "frequently asked questions", "contact me"])
  const [faqs, setFaqData] = useState(faqData)

  const dispatch = useDispatch()

  const getProducts = useSelector(state => state.getProducts)

  const { products, loading, error } = getProducts

  console.log(`Products: ${products}`)

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])





  return (
    <Fragment>
      <HeroSection gallery={carousel} />
      <WhatsNew sectionTitle={sectionTitles[0]} >
        <StoreRow productData={products} />
      </WhatsNew>
      <CustomQuilts
        sectionTitle={sectionTitles[1]} />
      <GalleryPreview
        sectionTitle={sectionTitles[2]}
        galleryImages={previewGallery} />
      <AboutKendall
        sectionTitle={sectionTitles[3]} />
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