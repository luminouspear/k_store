import React from 'react';

export function Dot(dotState = "") {
    return <div className={`w-2 md:w-4 h-2 md:h-4 bg-kyellow shadow-kmag2 rounded-full active:scale-125 ${dotState}`}></div>;
}
