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
      gallery: [
        { "image": gallery1, "imageAlt": '"Skulliver", a giant multi-coloured foundation paperpiecing skull."' },
        { "image": gallery2, "imageAlt": 'A hamsa mini-quilt.' },
        { "image": gallery3, "imageAlt": 'Mr. Spock and a dragonfly quilt in progress.' },
    ],
    newestItems: [{
      imageUrl: require("../assets/image_uterus.jpeg"),
      itemTitle: 'Uterus on Coat Hanger Mini Quilt for Planned Parenthood',
      imageAlt: 'A foundation paper-pieced uterus on a field of coathangers.',
      itemPrice: 'CA$150.00',
      flPrice: 150.00,
      id: 1
    }, {
      imageUrl: require("../assets/image_hand.jpeg"),
      itemTitle: 'Hamza Mini Quilt',
      itemAlt: 'A hamsa hand icon.',
      itemPrice: 'CA$75.00',
      flPrice: 75.00,
      id: 2
    }, {
      imageUrl: require("../assets/image_uterus2.jpeg"),
      itemTitle: 'Uterus on Flower Print Mini Quilt for Planned Parenthood',
      itemAlt: 'A foundation paperpieced uterus on a light flower background',
      itemPrice: 'CA$200.00',
      flPrice: 200.00,
      id: 3
      }],
    sectionTitles: ["what's new", "work in progress", "kendall's Favourites", "about kendall", "join my mailing list", "frequently asked questions", "contact me"]

  };



  render() {
    return (
      <Fragment>
        <HeroSection gallery={this.state.gallery} />
        <WhatsNew newestItems={this.state.newestItems} sectionTitle={this.state.sectionTitles[0]} />
        <CustomQuilts
          sectionTitle={this.state.sectionTitles[1]} />
        <GalleryPreview
          sectionTitle={this.state.sectionTitles[2]} />
        <AboutKendall
          sectionTitle={this.state.sectionTitles[3]} />
        <JoinMailingList
          sectionTitle={this.state.sectionTitles[4]} />
        <FAQ
          sectionTitle={this.state.sectionTitles[5]} />
        <ContactMe
          sectionTitle={this.state.sectionTitles[6]} />
        <Footer />
      </Fragment>

    )
  }
}
