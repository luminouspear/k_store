import React, { Component, Fragment } from 'react';
import HeroSection from '../components/homescreen/HeroSection'
import WhatsNew from '../components/products/StoreRow';
import CustomQuilts from '../components/homescreen/CustomQuilts';
import gallery1 from '../assets/image_skulliver.jpeg';
import gallery2 from '../assets/image_hand.jpeg';
import gallery3 from '../assets/image_dragonfly_spock.jpeg';
import GalleryPreview from '../components/homescreen/GalleryPreview';
import AboutKendall from '../components/homescreen/AboutKendall';
import JoinMailingList from '../components/global/footer/JoinMailingList';
import FAQ from '../components/global/footer/faq/FAQ';
import ContactMe from '../components/global/ContactMe';
import Footer from '../components/global/footer/Footer';
import { galleryData } from '../components/global/localdata/GalleryData';
import { carouselData } from '../components/global/localdata/CarouselData';
import { productData } from '../components/global/localdata/ProductData';
import { faqData } from '../components/global/localdata/FAQData';

export default class HomeScreen extends Component {

  state = {
    current: 0,
    gallery: carouselData,
    previewGallery: galleryData,
    newestItems: productData,
    sectionTitles: ["what's new", "work in progress", "kendall's Favourites", "about kendall", "join my mailing list", "frequently asked questions", "contact me"],
    faqData: faqData,
  };



  render() {
    return (
      <Fragment>
        <HeroSection gallery={this.state.gallery} />
        <WhatsNew newestItems={this.state.newestItems} sectionTitle={this.state.sectionTitles[0]} />
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
