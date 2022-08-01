import React from 'react';

const TextCalloutBox = props => {

    const { layoutPrefs, absolute = true } = props
    const absolutePref = absolute ? 'lg:absolute' : 'lg:block'

    return <div className={`w-full   lg:bg-white lg:shadow-kmag4 static ${absolutePref} ${layoutPrefs} lg:rounded-3xl flex flex-col align-center ${layoutPrefs} `}>{props.children}</div>
}

export default TextCalloutBox