import { Component } from 'react';
import CartBug from '../components/cart/CartBug';
import CartItem from '../components/cart/CartItem';
import Footer from '../components/global/footer_elements/Footer'
import { KStoreTitle } from '../components/global/userinterface/KStoreTitle';
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'



function CartScreen() {

  const dispatch = useDispatch()

  const cart = useSelector(state => state.cart)
  const { cartItems } = cart

  console.log(cartItems)
    return (
      <div className="w-full bg-[#111] mt-4 pt-6 pb-5">
        <div className="w-full max-w-7xl container mx-auto bg-transparent mt-6 md:mt-12 mb-12 min-h-[95%] ">
          <div className="flex flex-col w-full lg:flex-row">
            <div className="flex flex-col w-full mx-auto basis-full lg:basis-9/12 ">
              <div className="w-full px-6 mb-6 text-center lg:text-left">
                <KStoreTitle title="your cart" textType="sectionheader" /></div>
              {
                cartItems.length === 0 ? (
                  <div className="flex flex-col w-full"><h2 className="mb-12 text-4xl text-center text-white font-quicksand">Your cart is empty.</h2>
                    <Link to="/" className="text-3xl font-medium text-center text-kmag font-quicksand hover:text-kyellow">Let's find something for you!</Link>
                  </div>
                ) : cartItems.map(item => (
                  <CartItem key={item.id} />
              ))
              }
            </div>
            <CartBug />

          </div>
        </div>
        <Footer />
      </div>

    )
  }
export default CartScreen