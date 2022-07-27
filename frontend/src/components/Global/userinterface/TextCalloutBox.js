import React from 'react';

export function TextCalloutBox({contents, layoutPrefs}) {
    return <div className={`w-full h-auto lg:w-5/12 lg:bg-white lg:shadow-kmag4 static lg:absolute lg:rounded-3xl flex flex-col align-center ${layoutPrefs} `}>{contents}</div>
}