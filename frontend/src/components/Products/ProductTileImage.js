import React from 'react'

function ProductTileImage(item) {
    return <div className="aspect-w-4 aspect-h-4 bg-white rounded-3xl group-odd:shadow-kcyan4 shadow-kyellow4 isolate group-hover:shadow-kmag4 overflow-hidden">
        <img
            src={item.imageUrl}
            className="object-cover object-center h-full scale-110 "
            alt={item.imageAlt} />
    </div>
}

export default ProductTileImage