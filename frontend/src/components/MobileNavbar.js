import React from 'react'

export default function MobileNavbar(props) {

    let toggleNav = props.toggleNav;
    let menuItems = props.menuItems;

    console.log("The mobile navbar received: " + menuItems)

    return (
          <div className={(toggleNav ? " w-full h-screen" : "") + " lg:hidden"} >
        <div className="w-full h-24 flex justify-end items-center space-x-0 align-middle mt-2  ">
          <div className="flex w-16 h-16 flex-row justify-center items-center space-x-0 group">
            <i className="relative fas fa-shopping-cart h-10 w-10 text-center text-slate-200 text-4xl group-hover:text-kyellow group-hover:drop-shadow-kmag2 scale-[85%]">
            <span className="absolute h-4 w-4 -top-1 -right-2 text-kmag bg-slate-200 group-hover:text-kmag group-hover:drop-shadow-kmag2 group-hover:bg-kyellow
              text-xs font-extrabold rounded-full drop-shadow-kblack2">0
                        </span></i>
                </div>
          <div className="flex w-16 h-16 justify-center align-center items-center ">
            <i className={(toggleNav ?
              "fas fa-close":"fas fa-bars") + " h-10 w-10 text-center text-slate-200 text-4xl  hover:text-kyellow hover:drop-shadow-kmag2 visible"}></i></div>
        </div>
            <div className={"absolute top-24 inset-0 w-full h-screen bg-kblack  " + (toggleNav ? "":"hidden")} >
          <ul className="flex flex-col list-none items-center font-quicksand font-light text-slate-200 text-4xl">
            {menuItems.map(sectionName => <>
              <li className="text-center w-full h-fit py-12 hover:font-bold hover:text-kyellow hover:drop-shadow-kmag1 cursor-pointer flex my-auto justify-center items-center" key={sectionName}> {sectionName}
              </li><div className="w-10/12 border-slate-200 h-1 mx-auto border-b border-opacity-100 border-dotted"></div>
            </>)}
            </ul>
        </div>
      </div>
  )
}
