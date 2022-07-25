import { Fragment, Component } from 'react';
import HeroSection from '../components/HeroSection';
import WhatsNew from '../components/WhatsNew';
import JoinMailingList from '../components/JoinMailingList';
import FAQ from '../components/FAQ';
import ContactMe from '../components/ContactMe';
import Footer from '../components/Footer';


export default class ProductScreen extends Component {

  render() {
    return (
      <Fragment>
        {/* <HeroSection /> */}

        <WhatsNew />

        <JoinMailingList />
        <FAQ />
        <ContactMe />
        <Footer />
      </Fragment>
    )
  }
}
