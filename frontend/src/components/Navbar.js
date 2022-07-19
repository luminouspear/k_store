import { Link } from "react-router-dom";

const menuItems = ['Shop','Gallery','Meet Kendall']

const Navbar = ({click}) => {
  return (
    <nav className="w-full max-w-7xl  container mx-auto bg-transparent flex justify-between pb-6 lg:pb-2 px-6 md:px-8 lg:pl-6 lg:pr-6 xl:pr-2 z-50 h-24">
  <div className="flex align-middle content-center items-center h-24 whitespace-nowrap">
    <h1 className="font-berkshire bg-chill-grad bg-clip-text text-transparent animate-glow  cursor-pointer font-bold drop-shadow-kyellow1 md:drop-shadow-kyellow2  leading-3 ">
      <span className="text-5xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl py-0">
        s
      </span>
      <span className="text-4xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-3xl tracking-wide">
        imcoe{" "}
      </span>
      <br className="xl:hidden" />
      <span className="-mt-4">
        <span className="text-5xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl tracking-tighter">
          s
        </span>
        <span className="text-4xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-3xl -translate-x-2 tracking-wide">
          titchcraft
        </span>
      </span>
    </h1>
  </div>
  <ul className="flex list-none items-center  font-quicksand font-light text-slate-200 sm
  :text-md lg:text-xl xl:text-xl cursor-pointer">
        {menuItems.map(sectionName => <li className="ml-2 md:ml-4 px-2 text-center hover:font-bold hover:text-kyellow hover:drop-shadow-kmag1" key={sectionName}> {sectionName}</li>) }

    <li className="ml-2 md:ml-4 text-center hover:Font-bold hover:text-kyellow  group lg:w-fit sm:flex sm:items-center sm:content-center hidden hover:drop-shadow-kmag2">
      <Link
        to="/cart"
        className="bg-kmag group-hover:bg-kyellow group-hover:text-kmag p-2 flex justify-center items-center text-center w-full rounded-full"
      >
        <i className="fas fa-shopping-cart mx-2" />
        <span className="px-1 flex justify-center items-center">
          My Cart
          <span className="mx-2.5 h-8 w-8 text-kmag bg-slate-200 group-hover:text-kyellow group-hover:bg-kmag group-hover:transition-all group-hover:duration-300 py-1.5 px-2.5 text-sm font-bold rounded-full">
            0
          </span>
        </span>
      </Link>

    </li>
  </ul>
</nav>


    // <div className="w-full bg-black">
    //   <nav className="navbar w-full max-w-7xl min-w-full container mx-auto bg-black flex justify-between  py-6 px-4 md:px-4 lg:px-6 xl:px-16 z-50 h-28">
    //     {/* logo */}
    //     <div className="logo flex align-middle content-center items-center">
    //       <h1 className="font-berkshire bg-gradient-to-r bg-clip-text h-12 lg:h-20 text-transparent from-pink-500 via-pink-200 to-pink-500 animate-glow text-4xl sm:text-2xl md:text-3xl sm:mt-2.5 lg:mt-6 xl:mt-2 lg:text-4xl xl:text-6xl cursor-pointer font-bold drop-shadow-[-2px_2px_0_rgba(234,117,7,1.0)]">
    //         Simcoe Stitchcraft
    //       </h1>
    //     </div>
    //     {/* links */}
    //     <ul className="flex list-none items-center justify-center align-center font-quicksand text-pink-500  sm:text-md lg:text-2xl font-medium ">
    //       <li className="mx-2 md:mx-4 px-2 text-center font-bold hover:text-yellow-300  hover:drop-shadow-[-2px_2px_0px_rgba(244,114,182,.80)] cursor-pointer leading-tight hidden sm:inline-block">
    //         <Link to="/product">
    //           Shop</Link>
    //       </li>

    //       <li className="mx-2 md:mx-4 text-center font-bold hover:text-yellow-300 cursor-pointer hidden sm:inline-block hover:drop-shadow-[-2px_2px_0px_rgba(244,114,182,.80)]">
    //         <Link to="/gallery">
    //           Gallery</Link>
    //       </li>

    //       <li className="mx-2 md:mx-4 text-center font-bold hover:text-yellow-300 cursor-pointer hidden md:my-0 sm:inline-block hover:drop-shadow-[-2px_2px_0px_rgba(244,114,182,.80)]">
    //         <Link to="/meetkendall">
    //           Meet Kendall</Link>
    //       </li>

    //       <li className="group  lg:w-fit hover:text-white cursor-pointer sm:flex sm:items-center sm:content-center hidden hover:drop-shadow-[-2px_4px_0px_rgba(234,117,7,.80)]">
    //         <Link
    //           to="/cart"
    //           className="bg-slate-800 group-hover:bg-yellow-300 group-hover:text-pink-500 p-3 rounded-lg flex justify-center items-center text-center">
    //           <i className="fas fa-shopping-cart mx-2"></i>
    //           <span className="px-1 flex font-bold justify-center items-center group-hover:text-pink-500">
    //             My Cart
    //             <span className="mx-2.5 h-8 w-8 bg-slate-200 group-hover:text-yellow-300 group-hover:bg-pink-500 group-hover:ease-in group-hover:duration-150 py-1.5 px-2.5 text-sm font-bold rounded-full ">
    //               0
    //             </span>
    //           </span>
    //         </Link>
    //       </li>

    //       <li className="justify-center text-center inline-block sm:hidden">
    //         {/* Nav Icon*/}
    //         <div className="group menu h-16 w-16 flex items-center justify-center cursor-pointer" onClick={click}>
    //           <i className="fa-solid fa-bars group-hover:text-yellow-300 text-4xl drop-shadow-[-2px_2px_0px_rgba(234,117,7,.80)] group-hover:drop-shadow-[-2px_4px_0px_rgba(244,114,182,.80)]"></i>
    //         </div>
    //       </li>
    //     </ul>


    //   </nav>
    // </div>
  );
};

export default Navbar;
