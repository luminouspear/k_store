import { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getProducts as listProducts } from '../redux/actions/productActions'
import StoreRow from '../components/products/StoreRow';
import JoinMailingList from '../components/global/footer_elements/JoinMailingList';
import FAQ from '../components/global/footer_elements/faq/FAQ';
import ContactMe from '../components/global/footer_elements/ContactMe';
import Footer from '../components/global/footer_elements/Footer';
import { faqData } from '../components/global/localdata/FAQData';
import { KStoreTitle } from '../components/global/userinterface/KStoreTitle';
import { LoadingOverlay } from "../components/global/userinterface/LoadingOverlay";
import { LoadingErrorMessage } from '../components/global/userinterface/LoadingErrorMessage';


function ProductScreen() {
  const [sectionTitles, setSectionTitles] = useState(["what's new", "work in progress", "kendall's Favourites", "about kendall", "join my mailing list", "frequently asked questions", "contact me"])

    const dispatch = useDispatch()
  const getProducts = useSelector(state => state.getProducts)
  const { products, loading, error } = getProducts

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])





  if (loading) {
    return LoadingOverlay()
  }
 else if (error) {
   return LoadingErrorMessage()
  } else {
    return (
 <Fragment>
        <div className="w-full bg-[#111] mx-auto ">
          <div className="w-full py-6 mx-auto md:w-10/12 lg:w-8/12">
        <h2 className="mx-auto text-center ">
          <KStoreTitle title={"quilts for sale"} textType={"sectionheader"} />
        </h2>
            <StoreRow
          products={products}
          loading={loading}
          error={error}
          count={ products.length } />
          </div>
          </div>

      <div className="w-full py-0 mx-auto md:w-10/12 lg:w-8/12 ">
        <JoinMailingList sectionTitle={sectionTitles[4]} />
        <FAQ sectionTitle={sectionTitles[5]}
          faqData={faqData} />
        <ContactMe sectionTitle={sectionTitles[6]}  />
          <Footer />
        </div>
      </Fragment>
    )
 }



  }


export default ProductScreen