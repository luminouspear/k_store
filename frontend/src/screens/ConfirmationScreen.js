import React from 'react'
import Footer from '../components/global/footer_elements/Footer'
import TextCalloutBox from '../components/global/userinterface/TextCalloutBox'
import { KStoreTitle } from '../components/global/userinterface/KStoreTitle'

const ConfirmationScreen = () => {
  return (
      <div className="w-full bg-[#111] mt-4 py-8 min-h-screen">
          <div className='container max-w-7xl w-full mx-auto bg-transparent mt-6 md:mt-12 mb-12 min-h-[45vh] lg:min-h-[60vh]'>
              <TextCalloutBox layoutPrefs="w-8/12" absolute={false}>
                  <h1 className="flex py-8 text-center justify-center">
                      <KStoreTitle title="thank you for your purchase!" textType="sectionheader" />
                  </h1>
                  <p className="font-quicksand text-2xl lg:mx-48 text-white lg:text-kblack mt-24 pb-24 text-center mx-12">You should receive an email from PayPal confirming your payment shortly. I'm really excited to get your order to you ASAP. Please expect 1-2 weeks lead time if your item is <span className="font-bold">In Progress</span>, and under a week of lead time if your item is marked <span className="font-bold">Ready to Ship</span>. <br/><br/>Keep in mind orders with multiple items will be combined to reduce overall shipping costs.</p>
              </TextCalloutBox>
          </div>

      <Footer />
      </div>
  )
}

export default ConfirmationScreen