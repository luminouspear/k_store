import { Fragment, Component } from 'react';
import WhatsNew from '../components/products/StoreRow';
import JoinMailingList from '../components/global/footer/JoinMailingList';
import FAQ from '../components/global/footer/faq/FAQ';
import ContactMe from '../components/global/ContactMe';
import Footer from '../components/global/footer/Footer';
import { faqData } from '../components/global/localdata/FAQData';
import { productData } from '../components/global/localdata/ProductData';


export default class ProductScreen extends Component {


  state = {
    current: 0,

    newestItems: productData,
    sectionTitles: ["latest quilts for sale", "work in progress", "kendall's Favourites", "about kendall", "join my mailing list", "frequently asked questions", "contact me"],
    faqData: faqData

  };

  render() {
    return (
      <Fragment>
        {/* <HeroSection /> */}

        <WhatsNew newestItems={this.state.newestItems} sectionTitle={ this.state.sectionTitles[0] } />

        <JoinMailingList sectionTitle={this.state.sectionTitles[4]} />
        <FAQ sectionTitle={this.state.sectionTitles[5]}
          faqData={this.state.faqData} />
        <ContactMe sectionTitle={this.state.sectionTitles[6]}  />
        <Footer />
      </Fragment>
    )
  }
}
