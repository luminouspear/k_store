import React from 'react'
import TextCalloutBox from '../../components/global/userinterface/TextCalloutBox'
import { KStoreTitle } from '../../components/global/userinterface/KStoreTitle'
import { CTAButton } from '../../components/global/userinterface/CTAButton'

export default function CartBug() {
    return (

        <aside className="flex justify-start basis-5/12 ">
            <TextCalloutBox layoutPrefs="pt-6 px-8 h-fit"
                absolute={false}>
                <span className="text-center">
                    <KStoreTitle title="your order" textType="nocaps" />
                </span>
                <ul className="flex flex-col w-full px-6 mx-auto mt-12 list-none lg:px-0 space-y-6">
                    <li className="w-full text-white  font-quicksand lg:text-kblack">
                        <div className="flex flex-row justify-between">
                            <span className="text-xl">Subtotal</span>

                            <span className="text-2xl font-medium">CA$50.00</span>
                        </div>
                    </li>
                    <li className="w-full text-white  font-quicksand lg:text-kblack">
                        <div className="flex flex-row justify-between">
                            <span className="text-xl">Shipping</span>

                            <span className="text-2xl font-medium">CA$25.00</span>
                        </div>
                    </li>
                    <li className="w-full text-white  font-quicksand lg:text-kblack">
                        <div className="flex flex-row items-end justify-between">
                            <span className="text-xl font-bold">Estimated Total</span>

                            <span className="text-3xl font-bold">CA$75.00</span>
                        </div>
                    </li>
                </ul>

                <CTAButton text="Checkout" level="primary" location="/checkout" />

            </TextCalloutBox>
        </aside>
    )
}