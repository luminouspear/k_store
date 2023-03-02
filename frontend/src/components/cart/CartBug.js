import React from 'react'
import TextCalloutBox from '../../components/global/userinterface/TextCalloutBox'
import { KStoreTitle } from '../../components/global/userinterface/KStoreTitle'
import { CTAButton } from '../../components/global/userinterface/CTAButton'

export default function CartBug(props) {

    const { count, subtotal } = props

    console.log(count, subtotal)

    let shippingTotal = 0

    const getShippingTotal = () => {
        if (shippingTotal) {
            return shippingTotal
        }
        else return <h3 className="text-lg font-quicksand ">Estimated at checkout</h3>
    }

    let shipping = getShippingTotal()

    const totalWithShipping = subtotal + (typeof(shipping) == 'number' ? shipping.toFixed(2) : 0 )

    return (

        <aside className="flex justify-start basis-5/12 ">
            <TextCalloutBox layoutPrefs="pt-6 px-8 h-fit"
                absolute={false}>
                <span className="text-center">
                    <KStoreTitle title="your order" textType="nocaps" />
                </span>
                <ul className="flex flex-col w-full px-6 mx-auto mt-12 space-y-6 list-none lg:px-0">
                    <li className="w-full text-white font-quicksand lg:text-kblack">
                        <div className="flex flex-row justify-between">
                            <span className="text-xl">Subtotal</span>

                            <span className="text-2xl font-medium">CA ${subtotal.toFixed(2)}</span>
                        </div>
                    </li>
                    <li className="w-full text-white font-quicksand lg:text-kblack">
                        <div className="flex flex-row justify-between">
                            <span className="text-xl">Shipping</span>

                            <span className="text-2xl font-medium">{shipping}</span>
                        </div>
                    </li>
                    <li className="w-full text-white font-quicksand lg:text-kblack">
                        <div className="flex flex-row items-end justify-between">
                            <span className="text-xl font-bold">Estimated Total</span>

                            <span className="text-3xl font-bold">CA ${totalWithShipping.toFixed(2)}</span>
                        </div>
                    </li>
                </ul>

                <CTAButton text="Checkout" level="primary" location="/checkout" />

            </TextCalloutBox>
        </aside>
    )
}