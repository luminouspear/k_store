import React from 'react';
import { Link } from 'react-router-dom';

export function MobileNavStandardLink(props) {

  const { menuData, click } = props

  return menuData.map(section => (section.type !== "button") ?
    <Link to={section.linkLocation} className="w-full">
    <div key={section.id} className="flex flex-col items-center justify-center w-10/12 mx-auto" >
      <li
        className="flex items-center justify-center w-full py-12 my-auto text-center cursor-pointer h-fit hover:font-bold hover:text-kyellow " onClick={click}>
          {section.sectionTitle}
      </li>
      <div className="w-10/12 h-1 mx-auto border-b border-dotted border-opacity-100 border-slate-200"></div>
    </div>
        </Link>  :
    <div key={section.id}></div>
  );
}
