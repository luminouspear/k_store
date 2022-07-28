import { Fragment, Component } from 'react';
import StoreRow from '../components/products/StoreRow';
import JoinMailingList from '../components/global/footer_elements/JoinMailingList';
import FAQ from '../components/global/footer_elements/faq/FAQ';
import ContactMe from '../components/global/footer_elements/ContactMe';
import Footer from '../components/global/footer_elements/Footer';
import { faqData } from '../components/global/localdata/FAQData';
import { productData } from '../components/global/localdata/ProductData';
import { KStoreTitle } from '../components/global/userinterface/KStoreTitle';


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
        <div className="w-full bg-[#111] mx-auto ">
          <div className=" w-full md:w-10/12 lg:w-8/12 py-6 mx-auto ">
        <h2 className="mx-auto text-center ">
          <KStoreTitle title={"quilts for sale"} textType={"sectionheader"} />
        </h2>
            <StoreRow newestItems={this.state.newestItems} sectionTitle={this.state.sectionTitles[0]} />
          </div>
          </div>

      <div className="w-full md:w-10/12 lg:w-8/12 py-0 mx-auto ">
        <JoinMailingList sectionTitle={this.state.sectionTitles[4]} />
        <FAQ sectionTitle={this.state.sectionTitles[5]}
          faqData={this.state.faqData} />
        <ContactMe sectionTitle={this.state.sectionTitles[6]}  />
          <Footer />
        </div>
      </Fragment>
    )
  }
}
