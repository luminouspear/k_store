import { Fragment, useEffect, useState } from "react"
import ProductPhotoGrid from '../components/products/ProductPhotoGrid';
import ProductInformation from '../components/products/ProductInformation';
import StoreRow from '../components/products/StoreRow'
import { getProducts as listProducts } from '../redux/actions/productActions'
import { CTAButton } from '../components/global/userinterface/CTAButton';
import { KStoreTitle } from '../components/global/userinterface/KStoreTitle';
import ContactMe from '../components/global/footer_elements/ContactMe';
import Footer from '../components/global/footer_elements/Footer';
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

//Actions

import { getProductDetails } from '../redux/actions/productActions'
import { addToCart } from '../redux/actions/cartActions'
import { LoadingOverlay } from "../components/global/userinterface/LoadingOverlay";
import { LoadingErrorMessage } from "../components/global/userinterface/LoadingErrorMessage";



const ProductDetails = ({ match, history }) => {

    const [qty, setQty] = useState(1);

    let { id } = useParams()

    id = match ? match.params.id : id

    const dispatch = useDispatch()

    const productDetails = useSelector((state) => state.getProductDetails)
    const { loading, error, product } = productDetails
    const getProducts = useSelector(state => state.getProducts)
    const { products, loading: productsLoading, error: productsError } = getProducts




    useEffect(
        () => {
            // if (!product && match?.params.id !== product.id) {
            //     dispatch(getProductDetails(match.params.id))
            //     console.log("1")
            // } else {
                dispatch(getProductDetails(id))

            // }

        }, [dispatch, id, match])

    useEffect(() => {
        dispatch(listProducts())
        return () => {
            console.log(`products: ${products}`)
        };
    }, [dispatch]);



    const addToCartHandler = (id) => {
        console.log('addToCartHandler called')
        dispatch(addToCart(id, qty))
        if (history) {
            history.push(`/cart`)
        }
    }


    console.log(`product: ${product}`)
    const itemTitle = !loading && product.itemTitle
    const itemImages = !loading && product.images
    const itemPrice = !loading && product.itemPrice
    const itemDescription = !loading && product.itemDescription

    console.log(product)
    let remainingItems = []

    if (products && productsLoading === false) {
        remainingItems = product && products.filter(product => product.productUrl !== id).slice(0, 3)
    }



    // const {itemTitle, images, itemPrice, itemAlt, itemDescription, flPrice, imageUrl } = product


    // const remainingItems = product && product.filter(product => product.productUrl !== id).slice(0, 3)

    useEffect(() => {
        if (window.history.scrollRestoration) {
            window.history.scrollRestoration = 'manual';
        } else {
            window.onBeforeUnload = function () {
                window.scrollTo(0, 0);
            }
        }
    }, [])

    window.onBeforeUnload = () => {
        window.scrollTo(0, 0);
    }




    if (!product) {
        return (
            LoadingOverlay()
            )
    } else if (error) {
        LoadingErrorMessage();
    }
     else if (product && products && loading === false) {
            return (
        <Fragment>
            <section className="w-full bg-[#111] pt-6 pb-5">
                <div className="container w-full mx-auto mt-6 mb-12 bg-transparent max-w-7xl md:mt-12 ">
                    <div className="flex flex-col lg:flex-row">
                                <div className="w-full lg:w-1/2 lg:max-w-1/2">

                                    {console.log('itemImages: ', itemImages)}
                                    <ProductPhotoGrid images={itemImages} />
                                </div>
                        <div className="w-full lg:w-1/2 lg:max-w-1/2"><ProductInformation
                            itemPrice={itemPrice}
                            itemDescription={itemDescription}
                            itemTitle={itemTitle}
                            id={id}
                            onAddToCart={addToCartHandler} />
                        </div></div>
                </div>
            </section>
            <div className="w-full mx-auto md:w-10/12 lg:w-8/12">
                <h2 className="mx-auto mt-12 text-center">
                    <KStoreTitle title={"you may also be interested in..."} textType={"sectionheader"} />
                        </h2>

                        < StoreRow
                            products={remainingItems}
                            loading={productsLoading}
                            error={productsError}
                            count={remainingItems.length}
                        />



                <div className="w-full mx-auto lg:w-6/12">
                    <CTAButton text={"See More Things"} level={"secondary"} location={"/shop"} />
                </div>
            </div>
            <ContactMe sectionTitle={"contact me"} />
            <Footer />
        </Fragment>
    )
    }
}

export default ProductDetails
