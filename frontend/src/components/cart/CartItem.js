import React from 'react'

export default function CartItem() {
    return (
        <div className="basis-full lg:basis-9/12 flex flex-col md:flex-row my-6 mx-6 " >
            <img src={require('../../assets/image_hand.jpeg')} className="w-full md:w-64 h-full bg-cover rounded-3xl shadow-kcyan4 hover:shadow-kmag4 " alt="Hamza hand quilt" />

            <ul className="flex flex-col w-full px-6 lg:w-10/12 space-y-6 list-none mt-6 md:mt-0 ">
                <li><h2 className="h-fit font-quicksand text-white font-bold text-4xl text-left pb-8 pt-2">
                    Hamza Hand Quilt
                </h2></li>
                <li className="font-quicksand text-white w-full">
                    <div className="flex flex-row justify-between items-end w-full lg:w-10/12">
                        <span className="text-lg font-normal">Quantity</span>

                        <span className="text-xl font-normal">1</span>
                    </div>
                </li>
                <li className="font-quicksand text-white w-full">
                    <div className="flex flex-row justify-between items-end  w-full lg:w-10/12">
                        <span className="text-lg font-normal">Estimated Total</span>

                        <span className="text-xl font-normal">CA$25.00</span>
                    </div>
                </li>
                <li className="font-quicksand text-white w-full">
                    <div className="flex flex-row justify-end lg:justify-start items-center  lg:w-10/12 text-kcyan hover:text-kyellow cursor-pointer">
                        <i className="fa-solid fa-circle-minus h-4 w-4 m-2"></i>
                        <span className="text-lg font-normal">Remove</span>

                    </div>
                </li>
            </ul>




        </div>
    )
}
