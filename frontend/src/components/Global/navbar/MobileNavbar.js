import React from 'react'
import { MobileNavStandardLink } from './MobileNavStandardLink';
import { Link } from 'react-router-dom'


export default function MobileNavbar(props) {

  //   let toggleNav = props.toggleNav;
  // let menuData = props.menuData;

  const { toggleNav, menuData, click, cartCount } = props


  return (
    <div className=" h-fit lg:hidden" >
      <div className="flex items-center justify-end w-full h-24 align-middle space-x-0 ">
        <Link to="/cart"
        className="flex flex-row items-center justify-center w-12 h-12 space-x-0 group">
          <i className="relative fas fa-shopping-cart h-8 w-8 text-center text-slate-200 text-2xl group-hover:text-kyellow group-hover:drop-shadow-kmag2 scale-[85%]">
            <span className="absolute w-4 h-4 text-xs font-extrabold rounded-full -top-1 -right-2 text-kmag bg-slate-200 group-hover:text-kmag group-hover:shadow-kmag2 group-hover:bg-kyellow shadow-kblack2">{cartCount}
            </span></i>

          </Link>

        <div className="flex items-center justify-center w-12 h-12 px-4 align-center"
          onClick={click} >
          <i className={(toggleNav ?
            "fas fa-close " : "fas fa-bars ") + " h-8 w-8 text-center text-slate-200 text-2xl  hover:text-kyellow hover:drop-shadow-kmag2 visible"}></i></div>
      </div>

      <div className={"absolute z-50 top-24 inset-0 w-full h-screen bg-kblack  " + (toggleNav ? "" : "hidden")} >
        <div className="h-screen bg-black-grad ">
          <ul className="flex flex-col items-center text-4xl font-light list-none font-quicksand text-slate-200">
            {/* {MobileNavStandardLink(menuData, click)} */}
            <MobileNavStandardLink menuData={menuData} click={click} />
          </ul>
        </div>
      </div>
    </div>
  )
}
