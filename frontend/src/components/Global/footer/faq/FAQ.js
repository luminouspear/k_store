import React from 'react'
import { KStoreSubtitle } from '../../KStoreSubtitle';
import FAQComponent from './FAQComponent';
import ErrorBoundary from '../../ErrorBoundary';

const FAQ = (props) => {

    const { sectionTitle, faqData } = props
    console.log(faqData)
    const faqs = faqData.map((question) => FAQComponent(question))
    // const faqs = faqData.map((question) => console.log(question))

    // console.log(`faqs ${faqs[1].faqQuestionHeader}`)

    return (

        <section className="w-full  max-w-7xl container mx-auto bg-transparent my-20 ">
            {/* Section Header (Frequently Asked Questions) */}
            <h2 className="mx-auto text-center  font-berkshire text-kyellow text-4xl drop-shadow-kmag2">
                {KStoreSubtitle(sectionTitle)}
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