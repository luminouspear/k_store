import React from 'react'

const FAQ = () => {
    return (
    
    <section className="w-full  max-w-7xl container mx-auto bg-transparent my-20 ">
{/* Section Header (Frequently Asked Questions) */}
<h2 className="mx-auto text-center  font-berkshire text-kyellow text-4xl drop-shadow-kmag2">
    <span className="text-5xl">f</span>requently{" "}
    <span className="text-5xl">a</span>sked <span className="text-5xl">q</span>
    uestions
</h2>
{/* Accordion Content */}
<div className="mx-auto font-quicksand">
    {/* Header */}
    <div className="accordion-header cursor-pointer w-10/12 md:w-9/12 xl:w-7/12 mx-auto flex space-x-6 items-center h-24 mt-12 transition hover:font-kyellow group ">
    <i className="fa-solid fa-caret-down  text-3xl text-kmag drop-shadow-kyellow2" />
    <h3 className="text-3xl font-medium text-white">
        Will you make a custom quilt for me?
    </h3>
    </div>
    {/* Content */}
    <div className="accordion-content mx-auto pl-12  w-10/12 md:w-9/12 xl:w-7/12 transition-[max-height:0.3s_ease-out,padding_0.3s_ease]">
    <p className="text-xl font-light text-white mt-6">
        Probably! It depends on how busy I am and how complex of a quilt you are
        looking for, but I would love the opportunity to hear what you’d like to
        do! The easiest way is to Contact Me and we can get started on your
        idea!
    </p>
    </div>
    <div className="h-1  w-10/12 md:w-9/12 xl:w-7/12 mx-auto border-b my-12 border-opacity-60 border-dotted" />
    {/* Header */}
    <div className="accordion-header cursor-pointer  w-10/12 md:w-9/12 xl:w-7/12 mx-auto flex space-x-6 items-center h-24 mt-12 transition hover:font-kyellow group ">
    <i className="fa-solid fa-caret-right text-white text-3xl " />
    <h3 className="text-3xl font-medium text-white">
        How long does it take to make a quilt?
    </h3>
    </div>
    {/* Content */}
    <div className="accordion-content mx-auto pl-12  w-10/12 md:w-9/12 xl:w-7/12 transition-[max-height:0.3s_ease-out,padding_0.3s_ease] hidden">
    <p className="text-xl font-light text-white">
        Probably! It depends on how busy I am and how complex of a quilt you are
        looking for, but I would love the opportunity to hear what you’d like to
        do! The easiest way is to Contact Me and we can get started on your
        idea!
    </p>
    </div>
    <div className="h-1  w-10/12 md:w-9/12 xl:w-7/12 mx-auto border-b my-12 border-opacity-60 border-dotted" />
    {/* Header */}
    <div className="accordion-header cursor-pointer  w-10/12 md:w-9/12 xl:w-7/12 mx-auto flex space-x-6 items-center h-24 mt-12 transition hover:font-kyellow group ">
    <i className="fa-solid fa-caret-right text-white text-3xl active active:text-kmag active:drop-shadow-kyellow2" />
    <h3 className="text-3xl font-medium text-white">
        Do you ship internationally?
    </h3>
    </div>
    {/* Content */}
    <div className="accordion-content mx-auto pl-12 w-10/12 md:w-9/12 xl:w-7/12 transition-[max-height:0.3s_ease-out,padding_0.3s_ease] hidden">
    <p className="text-xl font-light text-white">
        Probably! It depends on how busy I am and how complex of a quilt you are
        looking for, but I would love the opportunity to hear what you’d like to
        do! The easiest way is to Contact Me and we can get started on your
        idea!
    </p>
    </div>
    <div className="h-1 w-10/12 md:w-9/12 xl:w-7/12 mx-auto border-b my-12 border-opacity-60 border-dotted" />
</div>
    </section>


)
}

export default FAQ