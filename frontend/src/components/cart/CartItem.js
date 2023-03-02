import React from 'react'

export default function CartItem(props) {

    const { id, imageUrl, itemAlt, itemPrice, itemTitle, quantitySelected, quantity } = props.item
    console.log('quantitySelected: ', quantitySelected);
    console.log('quantity: ', quantity);
    const { removeHandler } = props

    console.log(props.item)

    return (
        <div className="grid mx-8 my-6 lg:grid-flow-col md:flex-row lg:grid-cols-10 " >
            <img
                src={`/assets/${imageUrl}`} className="object-cover h-auto max-w-full lg:col-span-4 aspect-1 rounded-3xl shadow-kcyan4 hover:shadow-kmag4 " alt={itemAlt}
            />

            <ul className="flex flex-col w-full lg:col-span-6 px-6 mt-6 list-none lg:w-full md:mt-0 lg:space-y-2">
                <li><h2 className="pt-8 lg:pt-0 pb-8 text-4xl font-bold text-left text-white h-fit font-quicksand">
                    {itemTitle}
                </h2></li>
                <li className="w-full text-white font-quicksand">
                    <div className="flex flex-row items-end justify-between w-full lg:w-10/12">
                        {props.item.quantity === 1 ? (<div className="text-lg font-semibold font-quicksand text-kyellow ">One of a Kind!</div>) : (<span className="text-lg font-normal">Quantity: {quantitySelected}</span>)}

                    </div>
                </li>
                <li className="w-full text-white font-quicksand">
                    <div className="flex flex-row items-end justify-between w-full align-baseline">

                        <span className="text-xl font-normal lg:text-lg lg:text-right">CA ${itemPrice.toFixed(2)}</span>
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
