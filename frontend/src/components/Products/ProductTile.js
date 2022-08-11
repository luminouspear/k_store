import React from 'react'
import ProductTileImage from './ProductTileImage';
import { Link } from 'react-router-dom';

function ProductTile(product) {

    const { productUrl, imageUrl, imageAlt, id, itemTitle, itemPrice  } = product



    const linkLocation = "/shop/" + productUrl


    return (
        <Link to={ linkLocation }
            key={id} >
            <div className="w-full mt-12 cursor-pointer lg:mt-0 group " >
                {ProductTileImage(imageUrl, imageAlt, id)}

                <div className="w-full px-12 pt-12 pb-6 text-2xl text-center text-white font-quicksand text-medium lg:text-xl sm:leading-10 group-hover:text-kyellow">
                    {itemTitle}
                </div>
                <div className="w-full px-12 py-3 text-2xl font-bold text-center text-white font-quicksand lg:text-xl group-hover:text-kcyan ">
                    {itemPrice}
                </div>

            </div>
        </Link >
    )


}

export default ProductTile