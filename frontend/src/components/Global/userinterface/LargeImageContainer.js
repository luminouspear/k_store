import React from 'react';

export function LargeImageContainer({ contents, layoutPrefs }) {
    return <div className={`min-h-[50%] md:min-h-fit md:h-3/4 mx-auto my-6 lg:my-0 w-10/12 lg:w-8/12 xl:w-8/12 bg-gray-300 static rounded-3xl isolate overflow-hidden  ${layoutPrefs} `}>{contents}</div>
}