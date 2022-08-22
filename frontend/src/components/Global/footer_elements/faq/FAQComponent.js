import React, { Component } from 'react'

//  class FAQComponent extends Component {
// constructor(props) {
//   super(props)

//   this.state = {
//       active: false,
//       header: this.props.faqQuestionHeader,
//       body: this.props.faqAnswer
//   }
// }
//   render() {

const FAQComponent = props => {

    // console.log(`Props: ${props.faqQuestionHeader} ${props.faqAnswer}`)
    return (
        <div key={props.id}>
            <div className="flex items-center w-10/12 h-24 mx-auto mt-12 cursor-pointer accordion-header md:w-9/12 xl:w-7/12 space-x-6 transition hover:font-kyellow group ">
                <i className="text-3xl fa-solid fa-caret-down  text-kmag drop-shadow-kyellow2" />
                <h3 className="text-3xl font-medium text-white">
                    {props.faqQuestionHeader}
                </h3>
            </div>

            {/* Content */}
            <div className="accordion-content mx-auto pl-12  w-10/12 md:w-9/12 xl:w-7/12 transition-[max-height:0.3s_ease-out,padding_0.3s_ease]">
                <p className="mt-6 text-xl font-light text-white">
                    {props.faqAnswer}
                </p>
            </div>

            <div className="w-10/12 h-1 mx-auto my-12 border-b border-dotted  md:w-9/12 xl:w-7/12 border-opacity-60" />
        </div>
    )
}


export default FAQComponent
