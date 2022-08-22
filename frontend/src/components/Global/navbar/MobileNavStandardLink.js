import React from 'react';
import { Link } from 'react-router-dom';

export function MobileNavStandardLink(props) {

  const { menuData, click } = props

  return menuData.map(section => (section.type !== "button") ?
    <div key={section.id} className="flex flex-col items-center justify-center w-10/12 mx-auto" >
      <li
        className="flex items-center justify-center w-8/12 py-12 my-auto text-center cursor-pointer h-fit hover:font-bold hover:text-kyellow hover:shadow-kmag1 " onClick={click}>
        <Link to={section.linkLocation}>
          {section.sectionTitle}
        </Link>
      </li>
      <div className="w-10/12 h-1 mx-auto border-b border-dotted border-slate-200 border-opacity-100"></div>
    </div> :
    <div key={section.id}></div>
  );
}
