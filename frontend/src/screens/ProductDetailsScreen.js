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
    console.log('history: ', history);

    const [qty, setQty] = useState(1);

    let { id } = useParams()

    id = match ? match.params.id : id
    console.log('id: ', id);

    const dispatch = useDispatch()

    const productDetails = useSelector((state) => state.getProductDetails)
    const { loading, error, product } = productDetails
    const getProducts = useSelector(state => state.getProducts)
    const { products, loading: productsLoading, error: productsError } = getProducts
    // ...

const [remainingItems, setRemainingItems] = useState([]);
const [remainingItemsQty, setRemainingItemsQty] = useState(0);

useEffect(() => {
  if (products && productsLoading === false) {
    const newRemainingItems = products.filter(
      (product) => product.productUrl !== id
    );

    // Shuffle array
    for (let i = newRemainingItems.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newRemainingItems[i], newRemainingItems[j]] = [newRemainingItems[j], newRemainingItems[i]];
    }

    // Slice first 3 items
    const slicedRemainingItems = newRemainingItems.slice(0, 3);

    setRemainingItems(slicedRemainingItems);
    setRemainingItemsQty(slicedRemainingItems.length);
  }
}, [products, id, productsLoading]);



    useEffect(
        () => {
            if (!product && match?.params.id !== product.id) {
                dispatch(getProductDetails(match.params.id))
                console.log("1")
            } else {
                dispatch(getProductDetails(id))

            }

        }, [dispatch, id])

    useEffect(() => {
        dispatch(listProducts())
        return () => {
            console.log(`products: ${products}`)
        };
    }, []);



    const addToCartHandler = (id) => {
        console.log('addToCartHandler called')
        console.log('id: ', id);
        console.log('qty: ', qty);
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
    const quantity = !loading && product.quantity
    const itemSize = !loading && product.itemSize
    const shippingPrice = !loading && product.shippingPrice
    const itemCredit = !loading && product.itemCredit
    const status = !loading && product.status

    console.log(product)

    // if (products && productsLoading === false) {
    //     setRemainingItems(products.filter(product => product.productUrl !== id).slice(0, 3))
    //     setRemainingItemsQty(remainingItems.length)
    //     console.log('remainingItems: ', remainingItems);
    // }



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
                    <div className="relative z-0 flex flex-col items-center justify-center p-12 align-middle lg:flex-row lg:items-start">
                            <div className="z-10 w-full mx-12 lg:w-5/8 lg:max-w-1/2">
                                <ProductPhotoGrid images={itemImages} />
                            </div>
                        <div className="w-full lg:w-1/2 lg:max-3/8">
                            <ProductInformation
                                itemPrice={itemPrice}
                                itemDescription={itemDescription}
                                itemTitle={itemTitle}
                                status={status}
                                        quantity={quantity}
                                        itemSize={itemSize}
                                        shippingPrice={shippingPrice}
                                        itemCredit={itemCredit}
                                        id={id}
                                onAddToCart={addToCartHandler} />
                        </div>
                    </div>
                </div>
            </section>
            <div className="w-full mx-auto md:w-10/12 lg:w-8/12">
                <h2 className="mx-auto mt-12 text-center">
                    <KStoreTitle title={"you may also be interested in..."} textType={"sectionheader"} />
                        </h2>

                        {remainingItems.length > 0 && (
        <StoreRow
          products={remainingItems}
          loading={productsLoading}
          error={productsError}
          count={remainingItems.length}
        />
      )}



                <div className="w-10/12 py-12 mx-auto lg:w-6/12">
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
