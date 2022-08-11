import React from 'react'

export default function CartItem() {
    return (
        <div className="flex flex-col mx-6 my-6 basis-full lg:basis-9/12 md:flex-row " >
            <img src={require('../../assets/image_hand.jpeg')} className="w-full h-full bg-cover md:w-64 rounded-3xl shadow-kcyan4 hover:shadow-kmag4 " alt="Hamza hand quilt" />

            <ul className="flex flex-col w-full px-6 mt-6 list-none lg:w-10/12 space-y-6 md:mt-0 ">
                <li><h2 className="pt-2 pb-8 text-4xl font-bold text-left text-white h-fit font-quicksand">
                    Hamza Hand Quilt
                </h2></li>
                <li className="w-full text-white font-quicksand">
                    <div className="flex flex-row items-end justify-between w-full lg:w-10/12">
                        <span className="text-lg font-normal">Quantity</span>

                        <span className="text-xl font-normal">1</span>
                    </div>
                </li>
                <li className="w-full text-white font-quicksand">
                    <div className="flex flex-row items-end justify-between w-full  lg:w-10/12">
                        <span className="text-lg font-normal">Estimated Total</span>

                        <span className="text-xl font-normal">CA$25.00</span>
                    </div>
                </li>
                <li className="w-full text-white font-quicksand">
                    <div className="flex flex-row items-center justify-end cursor-pointer lg:justify-start  lg:w-10/12 text-kcyan hover:text-kyellow">
                        <i className="w-4 h-4 m-2 fa-solid fa-circle-minus"></i>
                        <span className="text-lg font-normal">Remove</span>

                    </div>
                </li>
            </ul>




        </div>
    )
}
