import React, { Component, Fragment } from 'react';
import HeroSection from '../components/HeroSection'
import WhatsNew from '../components/WhatsNew';
import CustomQuilts from '../components/CustomQuilts';
import gallery1 from '../assets/image_skulliver.jpeg';
import gallery2 from '../assets/image_hand.jpeg';
import gallery3 from '../assets/image_dragonfly_spock.jpeg';
import GalleryPreview from '../components/GalleryPreview';
import AboutKendall from '../components/AboutKendall';
import JoinMailingList from '../components/JoinMailingList';
import FAQ from '../components/FAQ';
import ContactMe from '../components/ContactMe';
import Footer from '../components/Footer';

export default class HomeScreen extends Component {

  state = {
      current: 0,
      items: [
        { "image": gallery1, "imageAlt": '"Skulliver", a giant multi-coloured foundation paperpiecing skull."' },
        { "image": gallery2, "imageAlt": 'A hamsa mini-quilt.' },
        { "image": gallery3, "imageAlt": 'Mr. Spock and a dragonfly quilt in progress.' },
    ],

  };

  constructor() {
    super();

  }

  render() {
    return (
      <Fragment>
        <HeroSection />
        <WhatsNew />
        <CustomQuilts />
        <GalleryPreview />
        <AboutKendall />
        <JoinMailingList />
        <FAQ />
        <ContactMe />
        <Footer />
      </Fragment>

    )
  }
}
