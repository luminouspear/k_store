import React from 'react'
import FAQComponent from './FAQComponent';
import ErrorBoundary from '../../ErrorBoundary';
import { KStoreTitle } from '../../userinterface/KStoreTitle';

const FAQ = (props) => {

    const { sectionTitle, faqData } = props
    // console.log(faqData)
    const faqs = faqData.map((question) => FAQComponent(question))
    // const faqs = faqData.map((question) => console.log(question))

    // console.log(`faqs ${faqs[1].faqQuestionHeader}`)

    return (

        <section className="container w-full mx-auto my-20 bg-transparent  max-w-7xl">
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