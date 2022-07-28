import { Fragment } from "react"
import ProductPhotoGrid from '../components/products/ProductPhotoGrid';
import ProductInformation from '../components/products/ProductInformation';
import { productData } from '../components/global/localdata/ProductData';
import StoreRow from '../components/products/StoreRow'
import { CTAButton } from '../components/global/userinterface/CTAButton';
import { KStoreTitle } from '../components/global/userinterface/KStoreTitle';
import ContactMe from '../components/global/footer_elements/ContactMe';
import Footer from '../components/global/footer_elements/Footer';

const ProductDetails = (props) => {

    // const { item } = props.location
    // console.log(`${item}`)



    return (
        <Fragment>
            <section className="w-full bg-[#111] pt-6 pb-5">
                <div className="w-full max-w-7xl container mx-auto bg-transparent mt-6 md:mt-12 mb-12 ">
                    <div className="flex flex-col lg:flex-row">
                        <ProductPhotoGrid
                        // images={item.images}
                        />
                        <ProductInformation />
                    </div>
                </div>
            </section>
            <div className="w-full md:w-10/12 lg:w-8/12 mx-auto">
                <h2 className="mx-auto text-center mt-12">
                    <KStoreTitle title={"you may also be interested in..."} textType={"sectionheader"} />
                </h2>
                <StoreRow newestItems={productData} />

                <div className="w-full lg:w-6/12 mx-auto">
                    <CTAButton text={"See More Things"} level={"secondary"} location={"/shop"} />
                </div>
            </div>
            <ContactMe sectionTitle={"contact me"} />
            <Footer />
        </Fragment>
    )
}

export default ProductDetails