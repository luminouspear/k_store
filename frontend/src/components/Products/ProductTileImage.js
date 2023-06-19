import React, { useState, useEffect } from 'react'

function ProductTileImage({imageUrl, imageAlt, localPath = "/assets/", onSelectImage}) {



    const [selectedImage, setSelectedImage] = useState(null)

    // Add state to track whether the modal is open or closed




    const filePath = localPath + imageUrl


    const handleImageClick = () => {
        setSelectedImage(imageUrl)
        onSelectImage(imageUrl, imageAlt)
        }

    // function handleCloseClick() {
    //     setSelectedImage(null)
    // }


    return (

        <div className="relative max-w-full overflow-hidden bg-white rounded-3xl group-odd:shadow-kcyan4 shadow-kyellow4 isolate group-odd:hover:shadow-kmag4 content-auto">
            <img
                src={filePath}
                className="inline-block object-cover object-center h-auto max-w-full cursor-pointer scale-110"
                alt={imageAlt}
                onClick={handleImageClick}
                loading="lazy"
          decoding="async"
            />




        </div>

    )
}

export default ProductTileImage