import React from 'react'
import { MobileNavStandardLink } from './MobileNavStandardLink';

export default function MobileNavbar(props) {

  //   let toggleNav = props.toggleNav;
  // let menuData = props.menuData;

  const { toggleNav, menuData, click } = props


  return (
    <div className="h-fit lg:hidden" >
      <div className="w-full h-24 flex justify-end items-center space-x-0 align-middle ">
        <div className="flex w-16 h-16 flex-row justify-center items-center space-x-0 group">
          <i className="relative fas fa-shopping-cart h-10 w-10 text-center text-slate-200 text-4xl group-hover:text-kyellow group-hover:drop-shadow-kmag2 scale-[85%]">
            <span className="absolute h-4 w-4 -top-1 -right-2 text-kmag bg-slate-200 group-hover:text-kmag group-hover:shadow-kmag2 group-hover:bg-kyellow
              text-xs font-extrabold rounded-full shadow-kblack2">0
            </span></i>
        </div>
        <div className="flex  w-16 h-16 px-4 justify-center align-center items-center"
          onClick={click} >
          <i className={(toggleNav ?
            "fas fa-close " : "fas fa-bars ") + " h-10 w-10 text-center text-slate-200 text-4xl  hover:text-kyellow hover:drop-shadow-kmag2 visible"}></i></div>
      </div>
      <div className={"absolute top-24 inset-0 w-full h-screen bg-kblack  " + (toggleNav ? "" : "hidden")} >
        <div className="bg-black-grad bg-opacity-30 h-screen">
          <ul className="flex flex-col list-none items-center font-quicksand font-light text-slate-200 text-4xl">
            {/* {MobileNavStandardLink(menuData, click)} */}
            <MobileNavStandardLink menuData={menuData} click={click} />
          </ul>
        </div>
      </div>
    </div>
  )
}