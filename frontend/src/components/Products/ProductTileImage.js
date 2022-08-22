import React from 'react'

function ProductTileImage(imageUrl, imageAlt, id) {




    return <div className="overflow-hidden bg-white aspect-w-4 aspect-h-4 rounded-3xl group-odd:shadow-kcyan4 shadow-kyellow4 isolate group-hover:shadow-kmag4" key={id}>
        <img
            src={require(`../../assets/${imageUrl}`)}
            className="object-cover object-center w-full scale-110 "
            alt={imageAlt} />
    </div>
}

export default ProductTileImage