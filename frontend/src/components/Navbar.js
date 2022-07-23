import { Link } from "react-router-dom";
import MobileNavbar from "./MobileNavbar";

const menuItems = ['Shop', 'Gallery', 'Meet Kendall'];

let toggleNav = false;

function generateTitle(title) {
  let wordInTitle = title.split(' ');
  let output = [];

  //console.log(wordInTitle);
  for (let i = 0; i < wordInTitle.length; i++) {
    output.push(<span className="inline-block font-berkshire bg-chill-grad bg-clip-text text-transparent animate-glow  first-letter:text-5xl first-letter:sm:text-5xl  first-letter:md:text-5xl first-letter:lg:text-6xl first-letter:xl:text-7xl first-letter:2xl:text-8xl first-letter:py-0 pr-2 lg:pr-3 text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl cursor-pointer font-bold drop-shadow-kyellow1 md:drop-shadow-kyellow2 leading-3 whitespace-nowrap leading-tighter lg:pb-4">{wordInTitle[i]}</span>);

  };
  return (<div>{output}</div>);
}

const Navbar = ({click}) => {
  return (
    <nav className="w-full max-w-7xl relative container mx-auto bg-transparent flex justify-between pb-6 lg:pb-2 px-6 md:px-8 lg:pl-6 lg:pr-6 xl:pr-2 z-50 h-24 2xl:h-28">
      <div className="flex  h-24 ">
        <h1 className="h-full flex items-center justify-center lg:mt-0">{generateTitle("simcoe stitchcraft")}</h1>

      </div>

      <ul className="hidden lg:flex list-none items-center  font-quicksand font-light text-slate-200 sm:text-md lg:text-xl xl:text-xl cursor-pointer lg:mt-6 2xl:mt-4">
        {menuItems.map(sectionName => <li className="ml-2 md:ml-4 px-2 text-center hover:font-bold hover:text-kyellow hover:drop-shadow-kmag1 " key={sectionName}> {sectionName}</li>) }
        <li className="ml-2 md:ml-4 text-center hover:Font-bold hover:text-kyellow  group lg:w-fit sm:flex sm:items-center sm:content-center hidden hover:drop-shadow-kmag2  lg:inline">

          <Link
            to="/cart"
            className="bg-kmag group-hover:bg-kyellow group-hover:text-kmag p-2 flex justify-center items-center text-center w-full rounded-full">
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
      {/* Mobile Navigation */}
      <MobileNavbar toggleNav={toggleNav} menuItems={menuItems} />


</nav>



  );
};

export default Navbar;
