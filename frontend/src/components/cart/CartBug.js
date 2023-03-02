import React from 'react'
import TextCalloutBox from '../../components/global/userinterface/TextCalloutBox'
import { KStoreTitle } from '../../components/global/userinterface/KStoreTitle'
import { CTAButton } from '../../components/global/userinterface/CTAButton'

export default function CartBug(props) {

    const { count, subtotal, shippingTotal } = props

    console.log(count, subtotal)



    const totalWithShipping = subtotal +  shippingTotal

    return (

        <aside className="flex justify-start basis-5/12 ">
            <TextCalloutBox layoutPrefs="pt-6 px-8 h-fit lg:mr-8"
                absolute={false}>
                <span className="flex text-center">
                    <KStoreTitle title="your order" textType="nocaps" />
                </span>
                <ul className="flex flex-col w-full px-6 mx-auto mt-12 list-none space-y-6 lg:px-0">
                    <li className="w-full text-white font-quicksand lg:text-kblack">
                        <div className="flex flex-row justify-between">
                            <span className="text-xl lg:text-lg xl:text-xl">Subtotal</span>

                            <span className="text-2xl font-medium lg:text-xl xl:text-2xl">CA ${subtotal.toFixed(2)}</span>
                        </div>
                    </li>
                    <li className="w-full text-white font-quicksand lg:text-kblack">
                        <div className="flex flex-row justify-between">
                            <span className="text-xl lg:text-lg xl:text-xl">Shipping</span>

                            <span className="text-2xl font-medium text-right lg:w-1/2 lg:text-xl xl:text-2xl">CA ${shippingTotal.toFixed(2)}</span>
                        </div>
                    </li>
                    <li className="w-full text-white font-quicksand lg:text-kblack">
                        <div className="flex flex-row items-end justify-between">
                            <span className="text-xl font-bold xl:text-xl lg:text-lg">Estimated Total</span>

                            <span className="text-3xl font-bold text-left lg:text-2xl xl:text-3xl">CA ${totalWithShipping.toFixed(2)}</span>
                        </div>
                    </li>
                </ul>

                <CTAButton text="Checkout" level="primary" location="/checkout"
                layoutPrefs="py-8 lg:w-full"  />

            </TextCalloutBox>
        </aside>
    )
}