import React from 'react';

export function HeroImageContainer({ gallery }) {

    function showGallery(galleryImage) {

        return <div className="absolute min-w-full min-h-full bg-black z-100 inset-0">
            <p>Content</p>
        </div>
    }

    // const imgSrc = require(`${}`)
    return <div className="w-11/12 lg:w-8/12 relative">

        <img className="object-cover w-full h-[60vh] md:h-[65vh] xl:h-[75vh] object-center mx-auto rounded-3xl shadow-kcyan4 isolate"
            src={gallery[0].image}
            alt={gallery[0].imageAlt}
            onClick={ () => showGallery(gallery[0]) } />

    </div>;
}
