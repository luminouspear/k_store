import React from 'react';
import { Link } from 'react-router-dom';

export function CTAButton({ text, level, location = "/", onClickEvent, id }) {
    const buttonColor = level === "primary" ? "bg-kmag shadow-kyellow4 hover:shadow-kcyan4" : "bg-kcyan shadow-kyellow4 hover:shadow-kmag4 ";
    const CTAStyles = buttonColor + " w-10/12 md:w-6/12 lg:w-10/12 py-4 text-2xl lg:text-3xl font-bold font-quicksand rounded-full mx-auto text-white cursor-auto transition duration-150 hover:bg-kyellow hover:text-kmag ";

    function doNothing() {
        console.log("No event handler for this CTA")
        return
    }

    return <Link to={location}>
        <div className="flex my-12">
            <button className={CTAStyles} onClick={onClickEvent ? onClickEvent : doNothing }>
                {text}
            </button>
        </div>
    </Link>
}
