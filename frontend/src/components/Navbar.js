import { generateTitle } from "./Navbar/GenerateTitle";
import MobileNavbar from "./Navbar/MobileNavbar";
import { NavStandardLink } from "./Navbar/NavStandardLink";
import { NavCartButton } from "./Navbar/NavCartButton";
import { menuData } from "./Navbar/MenuData";
import { Link } from 'react-router-dom';





const Navbar = ({ toggleNav, click, setSideToggle }) => {
  console.log(`From NavBar: ${click}`)

  return (


    <nav className="w-full max-w-7xl relative container mx-auto bg-transparent flex justify-between pb-6 lg:pb-2 px-6 md:px-8 lg:pl-6 lg:pr-6 xl:pr-2 z-50 h-28 2xl:h-28">
      <div className="flex  h-24 " onClick={() => setSideToggle(false)}>
        <Link to="/">
          <h1 className="h-full flex items-center justify-center lg:mt-0 ">{generateTitle("simcoe stitchcraft")}</h1>
        </Link>
      </div>

      <ul className="hidden lg:flex list-none items-center  font-quicksand font-light text-slate-200 sm:text-md lg:text-xl xl:text-xl cursor-pointer lg:mt-6 2xl:mt-4">
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
