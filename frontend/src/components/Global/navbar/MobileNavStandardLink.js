import React from 'react';
import { Link } from 'react-router-dom';

export function MobileNavStandardLink(props) {

  const { menuData, click } = props

  return menuData.map(section => (section.type !== "button") ?
    <div key={section.id} className="w-10/12 mx-auto flex flex-col justify-center items-center" >
      <li
        className="text-center w-8/12 h-fit py-12 hover:font-bold hover:text-kyellow hover:shadow-kmag1 cursor-pointer flex  my-auto justify-center items-center" onClick={click}>
        <Link to={section.linkLocation}>
          {section.sectionTitle}
        </Link>
      </li>
      <div className="w-10/12 border-slate-200 h-1 mx-auto border-b border-opacity-100 border-dotted"></div>
    </div> :
    <div key={section.id}></div>
  );
}
