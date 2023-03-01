import React, {useState} from 'react'
import ProductTileImage from './ProductTileImage';
import { Link } from 'react-router-dom';

function ProductTile(product) {

    const { productUrl, imageUrl, itemAlt, id, itemTitle, itemPrice, status, itemSize, shippingPrice  } = product



    const linkLocation = "/shop/" + productUrl


    return (
        <Link to={ linkLocation }
            key={id} >
            <div className="w-full mt-12 cursor-pointer lg:mt-0 group " >
                <div className="relative">
                    <ProductTileImage
                        imageUrl={imageUrl}
                        imageAlt={itemAlt}
                    />
                {shippingPrice === 0 ? <div className="absolute top-0 right-0 z-10 px-2 py-1 text-sm font-medium text-right text-white uppercase translate-y-10 bg-kmag font-quicksand overflow-clip group-hover:bg-kcyan group-hover:font-semibold">Free Shipping</div> : null}
                </div>

                <div className="flex flex-col ">
                    <h2 className="w-full px-4 pt-4 pb-4 text-2xl font-bold leading-tight text-center text-white md:pt-0 lg:pt-6 font-quicksand lg:text-xl sm:leading-10 group-hover:text-kyellow">
                        {itemTitle}
                    </h2>
                    <h3 className="w-full px-4 pt-2 text-sm font-light text-center text-white uppercase font-quicksand">{itemSize}</h3><h3 className="w-full px-4 pb-2 text-sm font-light text-center text-white uppercase font-quicksand">{status}</h3>
                    <h3 className="w-full px-12 py-3 text-2xl font-bold text-center text-white font-quicksand lg:text-xl group-hover:text-kcyan ">
                        CA ${itemPrice.toFixed(2)}
                    </h3>
                </div>

            </div>
        </Link >
    )


}

export default ProductTile