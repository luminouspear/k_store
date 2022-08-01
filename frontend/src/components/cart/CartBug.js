import React from 'react'
import TextCalloutBox from '../../components/global/userinterface/TextCalloutBox'
import { KStoreTitle } from '../../components/global/userinterface/KStoreTitle'
import { CTAButton } from '../../components/global/userinterface/CTAButton'

export default function CartBug() {
    return (

        <aside className="basis-5/12  flex justify-start ">
            <TextCalloutBox layoutPrefs="pt-6 px-8 h-fit"
                absolute={false}>
                <span className="text-center">
                    <KStoreTitle title="your order" textType="nocaps" />
                </span>
                <ul className="flex flex-col mt-12 px-6 lg:px-0 space-y-6 list-none w-10/12 lg:w-full mx-auto">
                    <li className=" font-quicksand text-white lg:text-kblack w-full">
                        <div className="flex flex-row justify-between">
                            <span className="text-xl">Subtotal</span>

                            <span className="text-2xl font-medium">CA$25.00</span>
                        </div>
                    </li>
                    <li className=" font-quicksand text-white lg:text-kblack w-full">
                        <div className="flex flex-row justify-between">
                            <span className="text-xl">Shipping</span>

                            <span className="text-2xl font-medium">CA$25.00</span>
                        </div>
                    </li>
                    <li className=" font-quicksand text-white lg:text-kblack w-full">
                        <div className="flex flex-row justify-between items-end">
                            <span className="text-xl font-bold">Estimated Total</span>

                            <span className="text-3xl font-bold">CA$50.00</span>
                        </div>
                    </li>
                </ul>

                <CTAButton text="Checkout" level="primary" location="/checkout" />

            </TextCalloutBox>
        </aside>
    )
}