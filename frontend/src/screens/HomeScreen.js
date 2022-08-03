import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

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

class HomeScreen extends Component {

  state = {
    current: 0,
    gallery: carouselData,
    previewGallery: galleryData,
    productData: productData,
    sectionTitles: ["what's new", "work in progress", "kendall's Favourites", "about kendall", "join my mailing list", "frequently asked questions", "contact me"],
    faqData: faqData,
  }

  async componentDidMount() {
    mapStateToProps(this.state)
  }

  render() {


    return (
      <Fragment>
        <HeroSection gallery={this.state.gallery} />
        <WhatsNew sectionTitle={this.state.sectionTitles[0]} >
          <StoreRow productData={this.state.productData} />
        </WhatsNew>
        <CustomQuilts
          sectionTitle={this.state.sectionTitles[1]} />
        <GalleryPreview
          sectionTitle={this.state.sectionTitles[2]}
          galleryImages={this.state.previewGallery} />
        <AboutKendall
          sectionTitle={this.state.sectionTitles[3]} />
        <JoinMailingList
          sectionTitle={this.state.sectionTitles[4]} />
        <FAQ
          sectionTitle={this.state.sectionTitles[5]}
          faqData={this.state.faqData} />
        <ContactMe
          sectionTitle={this.state.sectionTitles[6]} />
        <Footer />
      </Fragment>

    )
  }
}

const mapStateToProps = (state) => {
  console.log(`mapStateToProps: ${state.productTitle}`)
  return { productData: state }
}

export default connect(mapStateToProps, null)(HomeScreen)