import Stub from '../global/userinterface/Stub';
import ProductTileImage from './ProductTileImage';

const ProductPhotoGrid = (props) => {

    const { images } = props
    const imageUrl = images[0].imageUrl
    const imageAlt = images[0].imageAlt
    const imageId = images[0].id

    console.log('imageUrl2: ', imageUrl);
    const localPath = "../../../public/assets/"

    return (
        <div className="">
            <ProductTileImage imageUrl={imageUrl} imageAlt={imageAlt} id={imageId} />
        </div>

            // <div className="w-full p-6 grid grid-cols-3 gap-6">
            //     <div className="w-full overflow-hidden col-span-3 row-span-3 md:col-span-2 md:row-span-2 rounded-3xl isolate shadow-kcyan4 ">
            //         <Stub />
            //     </div>
            //     <div className="w-full overflow-hidden rounded-3xl isolate shadow-kyellow4">
            //         <Stub />
            //     </div>
            //     <div className="w-full overflow-hidden rounded-3xl isolate shadow-kcyan4">
            //         <Stub />
            //     </div>
            //     <div className="w-full overflow-hidden rounded-3xl isolate shadow-kyellow4">
            //         <Stub />
            //     </div>
            //     <div className="w-full overflow-hidden rounded-3xl isolate shadow-kcyan4">
            //         <Stub />
            //     </div>
            //     <div className="w-full overflow-hidden rounded-3xl isolate shadow-kyellow4">
            //         <Stub />
            //     </div>
            // </div>

    )
}

export default ProductPhotoGrid