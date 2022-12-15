import React from 'react'

export default function CartItem(props) {

    const { id, imageUrl, itemAlt, itemPrice, itemDescription, itemTitle, productUrl, quantity } = props.item
    const { removeHandler } = props

    return (
        <div className="flex flex-col mx-6 my-6 basis-full lg:basis-9/12 md:flex-row " >
            <img
                src={`/assets/${imageUrl}`} className="w-full h-full bg-cover md:w-64 rounded-3xl shadow-kcyan4 hover:shadow-kmag4 " alt={itemAlt}
            />

            <ul className="flex flex-col w-full px-6 mt-6 space-y-6 list-none lg:w-10/12 md:mt-0 ">
                <li><h2 className="pt-2 pb-8 text-4xl font-bold text-left text-white h-fit font-quicksand">
                    {itemTitle}
                </h2></li>
                <li className="w-full text-white font-quicksand">
                    <div className="flex flex-row items-end justify-between w-full lg:w-10/12">
                        <span className="text-lg font-normal">Quantity</span>

                        <span className="text-xl font-normal">{quantity}</span>
                    </div>
                </li>
                <li className="w-full text-white font-quicksand">
                    <div className="flex flex-row items-end justify-between w-full lg:w-10/12">
                        <span className="text-lg font-normal">Estimated Total</span>

                        <span className="text-xl font-normal">{itemPrice}</span>
                    </div>
                </li>
                <li className="w-full text-white font-quicksand">
                    <button className="flex flex-row items-center justify-end cursor-pointer lg:justify-start lg:w-10/12 text-kcyan hover:text-kyellow"
                    onClick={() => removeHandler(id)}>
                        <i className="w-4 h-4 m-2 fa-solid fa-circle-minus"></i>
                        <span
                            className="text-lg font-normal"
                        >
                            Remove
                        </span>

                    </button>
                </li>
            </ul>




        </div>
    )
}
