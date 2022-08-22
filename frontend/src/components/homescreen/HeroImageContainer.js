import React from 'react';

export function HeroImageContainer({ gallery }) {

    function showGallery(galleryImage) {

        return <div className="absolute inset-0 min-w-full min-h-full bg-black z-100">
            <p>Content</p>
        </div>
    }

    // const imgSrc = require(`${}`)
    return <div className="relative w-11/12 lg:w-8/12">

        <img className="object-cover w-full h-[60vh] md:h-[65vh] xl:h-[75vh] object-center mx-auto rounded-3xl shadow-kcyan4 isolate"
            src={gallery[0].image}
            alt={gallery[0].imageAlt}
            onClick={ () => showGallery(gallery[0]) } />

    </div>;
}
