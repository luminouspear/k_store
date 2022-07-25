import React from 'react'
import ProductTileImage from './ProductTileImage';

function ProductTile(item) {
    return (
        <div className="w-full mt-12 lg:mt-0 cursor-pointer group " key={item.id}>
            {ProductTileImage(item)}

            <div className="w-full px-12 pt-12 pb-6 text-center font-quicksand text-white text-medium text-2xl lg:text-xl sm:leading-10 group-hover:text-kyellow">
                {item.itemTitle}
            </div>
            <div className="w-full px-12 py-3 text-center font-quicksand text-white font-bold text-2xl lg:text-xl group-hover:text-kcyan ">
                {item.itemPrice}
            </div>

        </div>
    )


}

export default ProductTile