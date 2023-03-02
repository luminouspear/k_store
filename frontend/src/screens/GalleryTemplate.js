import React, {useState} from 'react';
import { KStoreTitle } from '../components/global/userinterface/KStoreTitle';
import ProductTileImage from '../components/products/ProductTileImage';

export function GalleryTemplate({ title, description, images, pathToImages, onSelectImage }) {

  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <div>
      <h3 className="w-full mx-auto my-12 text-4xl text-center">
        <KStoreTitle title={title} textType={"subheading"}></KStoreTitle>
      </h3>
      <p className="w-8/12 mx-auto mb-12 text-2xl text-center text-white font-quicksand">
        {description}
      </p>
      <div className="mx-6 grid grid-cols-2 gap-6 lg:grid-cols-3 ">
        {images.map(image => (
          <div><ProductTileImage
            imageUrl={image.galleryItemURL}
            imageAlt={image.galleryItemAlt}
            localPath={pathToImages}
            key={image.id}
            onSelectImage={onSelectImage}
            // onClick={() => setSelectedImage(image)}
          /></div>))}

      </div>

    </div>
  );
}
