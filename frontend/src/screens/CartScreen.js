import { Component } from 'react';
import CartBug from '../components/cart/CartBug';
import CartItem from '../components/cart/CartItem';
import Footer from '../components/global/footer_elements/Footer'
import { KStoreTitle } from '../components/global/userinterface/KStoreTitle';
import { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

//actions

import {removeFromCart} from '../redux/actions/cartActions'



function CartScreen() {



  const dispatch = useDispatch()

  const cart = useSelector(state => state.cart)
  const { cartItems } = cart
  console.log('cartItems: ', cartItems);

  const removeHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => {
      console.log(item)
      return item.quantitySelected + qty
    }, 0)
  }

  const getCartSubtotal = () => {
    return cartItems.reduce((subtotal, item) => subtotal + (item.itemPrice * item.quantitySelected), 0 )
  }

  const getShippingTotal = () => {
    return cartItems.reduce((shippingTotal, item) => shippingTotal + (item.shippingPrice * item.quantitySelected), 0)
  }

    return (
      <div className="w-full bg-[#111]  mt-4 pt-6 pb-5 min-h-screen lg:h-auto ">
        <div className="w-full max-w-7xl container mx-auto bg-transparent mt-6 md:mt-12 mb-12 min-h-[95%] ">
          <div className="flex flex-col w-full lg:flex-row">
            <div className="flex flex-col w-full mx-auto basis-full lg:basis-9/12 ">

              {
                cartItems.length === 0 ? (
                  <div className="flex flex-col w-full"><h2 className="my-12 text-4xl text-center text-white lg:my-24 font-quicksand">Your cart is empty.</h2>
                    <Link to="/shop" className="text-3xl font-medium text-center cursor-pointer text-kmag font-quicksand hover:text-kyellow">Let's find something for you!</Link>
                  </div>
                ) : <>
                  <div className="w-full px-8 mb-8 text-center lg:text-left">
                <KStoreTitle title="your cart" textType="sectionheader" /></div>
                    {cartItems.map(item =>  (
                      <CartItem
                        key={item.id}
                        item={item}
                        removeHandler={removeHandler} />
                    ))}
                    </>
              }
            </div>
            <CartBug
              count={getCartCount()}
              subtotal={getCartSubtotal()}
              shippingTotal={getShippingTotal()}
            />

          </div>
        </div>
        <Footer />
      </div>

    )
  }
export default CartScreen