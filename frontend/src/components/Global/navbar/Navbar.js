import { KStoreTitle } from "../userinterface/KStoreTitle";
import MobileNavbar from "./MobileNavbar";
import { NavStandardLink } from "./NavStandardLink";
import { NavCartButton } from "./NavCartButton";
import { menuData } from "../localdata/MenuData";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'

const Navbar = ({ toggleNav, click, setSideToggle }) => {

  const cart = useSelector(state => state.cart)
  const { cartItems } = cart

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => qty + Number(item.quantity), 0)
  }

  console.log(getCartCount())




  return (


    <nav className="container relative z-50 flex justify-between w-full px-6 pb-6 mx-auto bg-transparent max-w-7xl lg:pb-2 md:px-8 lg:px-6 h-28 2xl:h-28 ">
      <div className="flex items-center justify-start pb-4 lg:pb-0 lg:pt-2 xl:pt-0 2xl:pb-2 h-24 w-[600px] " onClick={() => setSideToggle(false)}>
        <Link to="/">
          <h1 className="flex justify-center h-full align-middle lg:mt-0"><KStoreTitle title={"simcoe stitchcraft"} textType={"logo"} /></h1>
        </Link>
      </div>

      <ul className="items-center hidden font-light list-none cursor-pointer lg:flex font-quicksand text-slate-200 sm:text-md lg:text-lg xl:text-xl lg:mt-6 2xl:mt-4">
        {menuData.map(section => (
          (section.type !== "button") ?
            NavStandardLink(section) :
            NavCartButton(section, getCartCount())
        )
        )}



      </ul>
      {/* Mobile Navigation */}
      <MobileNavbar
        toggleNav={toggleNav}
        menuData={menuData}
        click={click}
        cartCount={getCartCount()}
      />


    </nav>



  );
};

export default Navbar;
