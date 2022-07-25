import React from 'react';

export function CTAButton(text, level) {
    const buttonColor = level === "primary" ? "bg-kmag shadow-kyellow4 hover:shadow-kcyan4" : "bg-kcyan shadow-kyellow4 hover:shadow-kmag4 ";
    const CTAStyles = buttonColor + " w-10/12 md:w-6/12 lg:w-10/12 py-4 text-2xl lg:text-3xl font-bold font-quicksand rounded-full mx-auto text-white cursor-auto transition duration-150 hover:bg-kyellow hover:text-kmag ";

    return <div className="my-12 flex">
        <button className={CTAStyles}>
            {text}
        </button>
    </div>
}
