import React from 'react';

export function HeroImageContainer({ gallery, containerPrefs, imagePrefs }) {

    function showGallery(galleryImage) {

        return <div className="absolute inset-0 min-w-full min-h-full bg-black z-100">
            <p>Content</p>
        </div>
    }

    // const imgSrc = require(`${}`)
    return(
    <div className={containerPrefs}>
        <img className={imagePrefs + "  "}
            src={gallery[0].image}
            alt={gallery[0].imageAlt}
            onClick={() => showGallery(gallery[0])} />
    </div>)

}
