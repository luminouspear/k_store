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

    console.log(`Props: ${props.faqQuestionHeader} ${props.faqAnswer}`)
    return (
        <div key={props.id}>
            <div className="accordion-header cursor-pointer w-10/12 md:w-9/12 xl:w-7/12 mx-auto flex space-x-6 items-center h-24 mt-12 transition hover:font-kyellow group ">
                <i className="fa-solid fa-caret-down  text-3xl text-kmag drop-shadow-kyellow2" />
                <h3 className="text-3xl font-medium text-white">
                    {props.faqQuestionHeader}
                </h3>
            </div>

            {/* Content */}
            <div className="accordion-content mx-auto pl-12  w-10/12 md:w-9/12 xl:w-7/12 transition-[max-height:0.3s_ease-out,padding_0.3s_ease]">
                <p className="text-xl font-light text-white mt-6">
                    {props.faqAnswer}
                </p>
            </div>

            <div className="h-1  w-10/12 md:w-9/12 xl:w-7/12 mx-auto border-b my-12 border-opacity-60 border-dotted" />
        </div>
    )
}


export default FAQComponent
