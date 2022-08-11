import { Fragment, useEffect } from "react"
import ProductPhotoGrid from '../components/products/ProductPhotoGrid';
import ProductInformation from '../components/products/ProductInformation';
import { productData } from '../components/global/localdata/ProductData';
import StoreRow from '../components/products/StoreRow'
import { CTAButton } from '../components/global/userinterface/CTAButton';
import { KStoreTitle } from '../components/global/userinterface/KStoreTitle';
import ContactMe from '../components/global/footer_elements/ContactMe';
import Footer from '../components/global/footer_elements/Footer';
import { useParams } from 'react-router-dom'


const ProductDetails = () => {


    const { id } = useParams()

    const item = productData.filter(product => product.productUrl === id)
    const remainingItems = productData.filter(product => product.productUrl !== id).slice(0, 3)

    useEffect(() => {
        if (window.history.scrollRestoration) {
            window.history.scrollRestoration = 'manual';
        } else {
            window.onbeforeunload = function () {
                window.scrollTo(0, 0);
            }
        }
    }, [])

    window.onBeforeUnload = () => {
        window.scrollTo(0, 0);
    }

    console.log(item[0].itemTitle)


    return (
        <Fragment>
            <section className="w-full bg-[#111] pt-6 pb-5">
                <div className="container w-full mx-auto mt-6 mb-12 bg-transparent max-w-7xl md:mt-12 ">
                    <div className="flex flex-col lg:flex-row">
                        <div className="w-1/2 lg:max-w-1/2"><ProductPhotoGrid
                            images={item[0].images}
                        /></div>
                        <div className="w-1/2 lg:max-w-1/2"><ProductInformation
                            itemPrice={item[0].itemPrice}
                            itemDescription={item[0].itemDescription}
                            itemTitle={item[0].itemTitle} />
                        </div></div>
                </div>
            </section>
            <div className="w-full mx-auto md:w-10/12 lg:w-8/12">
                <h2 className="mx-auto mt-12 text-center">
                    <KStoreTitle title={"you may also be interested in..."} textType={"sectionheader"} />
                </h2>
                <StoreRow productData={remainingItems} />

                <div className="w-full mx-auto lg:w-6/12">
                    <CTAButton text={"See More Things"} level={"secondary"} location={"/shop"} />
                </div>
            </div>
            <ContactMe sectionTitle={"contact me"} />
            <Footer />
        </Fragment>
    )
}

export default ProductDetails