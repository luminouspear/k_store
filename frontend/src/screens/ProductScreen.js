import { Fragment, Component } from 'react';
import WhatsNew from '../components/WhatsNew';
import JoinMailingList from '../components/JoinMailingList';
import FAQ from '../components/FAQ';
import ContactMe from '../components/ContactMe';
import Footer from '../components/Footer';


export default class ProductScreen extends Component {


  state = {
    current: 0,

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
    sectionTitles: ["latest quilts for sale", "work in progress", "kendall's Favourites", "about kendall", "join my mailing list", "frequently asked questions", "contact me"]

  };

  render() {
    return (
      <Fragment>
        {/* <HeroSection /> */}

        <WhatsNew newestItems={this.state.newestItems} sectionTitle={ this.state.sectionTitles[0] } />

        <JoinMailingList />
        <FAQ />
        <ContactMe />
        <Footer />
      </Fragment>
    )
  }
}
