import React from 'react'
import ProductTileImage from './ProductTileImage';
import { Link } from 'react-router-dom';

function ProductTile(item) {

    let linkLocation = "/shop/" + item.productUrl

    return (
        <Link to={
            {
                pathname: linkLocation,
                chosenItem: item
            }
        }
            key={item.id} >
            <div className="w-full mt-12 lg:mt-0 cursor-pointer group " >
                {ProductTileImage(item)}

                <div className="w-full px-12 pt-12 pb-6 text-center font-quicksand text-white text-medium text-2xl lg:text-xl sm:leading-10 group-hover:text-kyellow">
                    {item.itemTitle}
                </div>
                <div className="w-full px-12 py-3 text-center font-quicksand text-white font-bold text-2xl lg:text-xl group-hover:text-kcyan ">
                    {item.itemPrice}
                </div>

            </div>
        </Link >
    )


}

export default ProductTile