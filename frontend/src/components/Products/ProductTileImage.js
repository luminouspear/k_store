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

        <div className="relative overflow-hidden bg-white aspect-w-4 aspect-h-4 rounded-3xl group-odd:shadow-kcyan4 shadow-kyellow4 isolate group-odd:hover:shadow-kmag4">
            <img
                src={filePath}
                className="object-cover object-center w-full scale-110 cursor-pointer"
                alt={imageAlt}
                onClick={handleImageClick}
            />




        </div>

    )
}

export default ProductTileImage