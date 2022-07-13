import { Link } from "react-router-dom";

const Navbar = ({click}) => {
  return (
    <div className="w-full bg-black">
      <nav className="navbar w-full max-w-7xl container mx-auto bg-black flex justify-between items-center py-6 px-4 z-50 h-28">
        {/* logo */}
        <div className="logo">
          <h1 className="font-berkshire text-pink-500 text-4xl sm:text-2xl lg:text-6xl cursor-pointer font-bold drop-shadow-[-2px_2px_0px_rgba(234,117,7,.80)]">
            Simcoe Stitchcraft
          </h1>
        </div>
        {/* links */}
        <ul className="flex list-none items-center justify-center align-center font-quicksand text-pink-500  sm:text-md lg:text-2xl font-medium ">
          <li className="mx-2 md:mx-4 px-2 text-center font-bold hover:text-yellow-300  hover:drop-shadow-[-2px_2px_0px_rgba(244,114,182,.80)] cursor-pointer leading-tight hidden sm:inline-block">
            <Link to="/product">
              Shop</Link>
          </li>

          <li className="mx-2 md:mx-4 text-center font-bold hover:text-yellow-300 cursor-pointer hidden sm:inline-block hover:drop-shadow-[-2px_2px_0px_rgba(244,114,182,.80)]">
            <Link to="/gallery">
              Gallery</Link>
          </li>

          <li className="mx-2 md:mx-4 text-center font-bold hover:text-yellow-300 cursor-pointer hidden md:my-0 sm:inline-block hover:drop-shadow-[-2px_2px_0px_rgba(244,114,182,.80)]">
            <Link to="/meetkendall">
              Meet Kendall</Link>
          </li>

          <li className="group mx-2 md:mx-2.5 md:w-60 hover:text-white cursor-pointer sm:flex sm:items-center sm:content-center hidden hover:drop-shadow-[-2px_4px_0px_rgba(234,117,7,.80)]">
            <Link
              to="/cart"
              className="bg-slate-800 group-hover:bg-yellow-300 group-hover:text-pink-500 p-3 rounded-lg flex justify-center items-center text-center">
              <i className="fas fa-shopping-cart mx-2"></i>
              <span className="px-1 flex font-bold justify-center items-center group-hover:text-pink-500">
                My Cart
                <span className="mx-2.5 h-8 w-8 bg-slate-200 group-hover:text-yellow-300 group-hover:bg-pink-500 group-hover:ease-in group-hover:duration-150 py-1.5 px-2.5 text-sm font-bold rounded-full ">
                  0
                </span>
              </span>
            </Link>
          </li>

          <li className="justify-center text-center inline-block sm:hidden">
            {/* Nav Icon*/}
            <div className="group menu h-16 w-16 flex items-center justify-center cursor-pointer" onClick={click}>
              <i className="fa-solid fa-bars group-hover:text-yellow-300 text-4xl drop-shadow-[-2px_2px_0px_rgba(234,117,7,.80)] group-hover:drop-shadow-[-2px_4px_0px_rgba(244,114,182,.80)]"></i>
            </div>
          </li>
        </ul>


      </nav>
    </div>
  );
};

export default Navbar;
