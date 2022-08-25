import React from 'react'
import { useEffect } from 'react'
import FAQComponent from './FAQComponent';
import ErrorBoundary from '../../ErrorBoundary';
import { KStoreTitle } from '../../userinterface/KStoreTitle';
import { useDispatch, useSelector } from 'react-redux';
import { getFAQs as listFAQs } from '../../../../redux/actions/faqActions'


const FAQ = () => {

    const sectionTitle="frequently asked questions"
    const dispatch = useDispatch()

    const getFAQData = useSelector(state => state.getFAQs)

    const { faqData, faqLoading, faqError } = getFAQData

    useEffect(() => {
        dispatch(listFAQs())
    }, [dispatch])



    // console.log(faqData)
    const faqs = faqLoading
        ? (<h2>Loading...</h2>)
        : faqError ? (<h2>{faqError}</h2>)
            : (faqData.length > 0 &&
                faqData.map((question) =>
                <FAQComponent
                    faqQuestionHeader={question.faqQuestionHeader}
                    faqAnswer={question.faqAnswer}
                    key={question.id}
                    />)
            )

    // console.log(`faqs ${faqs[1].faqQuestionHeader}`)

    return (

        <section className="container w-full mx-auto my-20 bg-transparent max-w-7xl">
            {/* Section Header (Frequently Asked Questions) */}
            <h2 className="mx-auto text-center ">
                <KStoreTitle title={sectionTitle} textType={"sectionheader"} />
            </h2>

            {/* Accordion Content */}
            <div className="mx-auto font-quicksand">
                {/* FAQ Container */}
                {faqs}

            </div>
        </section>


    )
}

export default FAQ