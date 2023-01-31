import React, {useState} from 'react'

function ProductTileImage(props) {

    const { imageUrl, imageAlt, id, localPath } = props
    const [showModal, setShowModal] = useState(false)

    // Add state to track whether the modal is open or closed


    const local = (localPath) ? "/assets/" : localPath
    console.log('local: ', local);

    const filePath = local + imageUrl


    function handleImageClick() {

            setShowModal(true)
        }

    function handleCloseClick() {
        setShowModal(false)
    }



    return (

        <div className="relative overflow-hidden bg-white aspect-w-4 aspect-h-4 rounded-3xl group-odd:shadow-kcyan4 shadow-kyellow4 isolate group-hover:shadow-kmag4" >
            {(showModal && (
                <div className=" inset-0 fixed z-[999] flex items-center justify-center w-full h-full bg-black/50">
                    <div className="flex flex-col items-center overflow-auto bg-white rounded-md shadow-sm max-w-11/12 max-h-11/12">
                    <button onClick={handleCloseClick} className="px-5 py-3 m-2 cursor-pointer radius-sm">Close</button>
                    <img src={filePath} alt={imageAlt} onClick={handleCloseClick} />
                </div>
                </div>
            ))}
        <img
                src={`${filePath}`}
                className="object-cover object-center w-full scale-110 cursor-pointer"
                alt={imageAlt}
                onClick={handleImageClick}
            />
        </div>


    )
}

export default ProductTileImage