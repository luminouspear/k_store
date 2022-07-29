import { KStoreTitle } from "../userinterface/KStoreTitle";
import MobileNavbar from "./MobileNavbar";
import { NavStandardLink } from "./NavStandardLink";
import { NavCartButton } from "./NavCartButton";
import { menuData } from "../localdata/MenuData";
import { Link } from 'react-router-dom';





const Navbar = ({ toggleNav, click, setSideToggle }) => {
  

  return (


    <nav className="w-full max-w-7xl relative container mx-auto bg-transparent flex justify-between pb-6 lg:pb-2 px-6 md:px-8 lg:pl-6 lg:pr-6 xl:pr-2 z-50 h-28 2xl:h-28 ">
      <div className="flex items-center justify-start pb-4 lg:pb-0 lg:pt-2 xl:pt-0 2xl:pb-2 h-24 w-[600px] " onClick={() => setSideToggle(false)}>
        <Link to="/">
          <h1 className=" h-full w- flex align-middle justify-center lg:mt-0 "><KStoreTitle title={"simcoe stitchcraft"} textType={"logo"} /></h1>
        </Link>
      </div>

      <ul className="hidden lg:flex list-none items-center  font-quicksand font-light text-slate-200 sm:text-md lg:text-lg xl:text-xl cursor-pointer lg:mt-6 2xl:mt-4">
        {menuData.map(section => (
          (section.type !== "button") ?
            NavStandardLink(section) :
            NavCartButton(section)
        )
        )}



      </ul>
      {/* Mobile Navigation */}
      <MobileNavbar toggleNav={toggleNav} menuData={menuData} click={click} />


    </nav>



  );
};

export default Navbar;
