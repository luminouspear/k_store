import { Component } from 'react';
import CartBug from '../components/cart/CartBug';
import CartItem from '../components/cart/CartItem';
import Footer from '../components/global/footer_elements/Footer'
import { KStoreTitle } from '../components/global/userinterface/KStoreTitle';



export default class CartScreen extends Component {


  render() {

    return (
      <div className="w-full bg-[#111] mt-4 pt-6 pb-5">
        <div className="w-full max-w-7xl container mx-auto bg-transparent mt-6 md:mt-12 mb-12 min-h-[95%] ">
          <div className="flex lg:flex-row flex-col w-full">
            <div className="basis-full lg:basis-9/12  mx-auto w-full flex flex-col">
              <div className="w-full px-6 mb-6 text-center lg:text-left">
                <KStoreTitle title="your cart" textType="sectionheader" /></div>
              <CartItem />
              <CartItem />
            </div>
            <CartBug />

          </div>
        </div>
        <Footer />
      </div>

    )
  }
}
