import React from 'react'

const FAQComponent = props => {

    const {faqQuestionHeader, faqAnswer } = props

    return (
        <div>
            <div className="flex items-center w-10/12 h-24 mx-auto mt-12 space-x-6 transition cursor-pointer accordion-header md:w-9/12 xl:w-7/12 hover:font-kyellow group ">
                <i className="text-3xl fa-solid fa-caret-down text-kmag drop-shadow-kyellow2" />
                <h3 className="text-3xl font-medium text-white">
                    {faqQuestionHeader}
                </h3>
            </div>

            {/* Content */}
            <div className="accordion-content mx-auto pl-12  w-10/12 md:w-9/12 xl:w-7/12 transition-[max-height:0.3s_ease-out,padding_0.3s_ease]">
                <p className="mt-6 text-xl font-light text-white">
                    {faqAnswer}
                </p>
            </div>

            <div className="w-10/12 h-1 mx-auto my-12 border-b border-dotted md:w-9/12 xl:w-7/12 border-opacity-60" />
        </div>
    )
}


export default FAQComponent
