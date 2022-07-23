import React from 'react';

export function MobileNavStandardLink(menuData) {
  return menuData.map(section => (section.type !== "button") ?
    <div key={section.id}>
      <li
        className="text-center w-full h-fit py-12 hover:font-bold hover:text-kyellow hover:drop-shadow-kmag1 cursor-pointer flex  my-auto justify-center items-center"> {section.sectionTitle}
      </li>
      <div className="w-10/12 border-slate-200 h-1 mx-auto border-b border-opacity-100 border-dotted"></div>
    </div> :
    <div key={section.id}></div>
  );
}
