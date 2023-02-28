import React from 'react';

function Modal({ onClose, imageUrl, imageAlt}) {
    console.log('imageUrl: ', imageUrl);

    const filePath = "/assets/" + imageUrl

    return (
        <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black">
            <div className="absolute top-0 right-0 z-[101] m-4 ">
                <button className="p-2 text-gray-800 bg-gray-300 rounded-full"
                onClick={onClose}>
                            <svg
                                className="w-6 h-6 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                             <path d="M19.364 17.95L12.314 11l7.05-6.95c.293-.293.293-.768 0-1.06l-.707-.707c-.293-.293-.768-.293-1.06 0L11.246 9.293l-7.05-6.95c-.293-.293-.768-.293-1.06 0l-.707.707c-.293.293-.293.768 0 1.06l7.05 6.95-7.05 6.95c-.293.293-.293.768 0 1.06l.707.707c.293.293.768.293 1.06 0l7.05-6.95 7.05 6.95c.292.293.768.293 1.06 0l.707-.707c.292-.292.292-.767 0-1.06z" />
                            </svg>
                </button>
            </div>
            <img src={filePath} alt={imageAlt} className="z-50 max-w-full max-h-full pb-[20%] mt-[25%]" onClick={onClose} />

        </div>
    )
}

export default Modal