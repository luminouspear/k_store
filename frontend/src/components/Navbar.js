import { Link } from "react-router-dom";

const menuItems = ['Shop', 'Gallery', 'Meet Kendall']

let toggleNav = false;

function generateTitle(title) {
  let wordInTitle = title.split(' ');
  let output = [];

  //console.log(wordInTitle);
  for (let i = 0; i < wordInTitle.length; i++) {
    output.push(<><span className="inline-block font-berkshire bg-chill-grad bg-clip-text text-transparent animate-glow first-letter:text-5xl first-letter:sm:text-4xl  first-letter:md:text-5xl first-letter:xl:text-5xl first-letter:py-0 pr-2 lg:pr-3 py-1 text-4xl sm:text-3xl md:text-3xl xl:text-3xl cursor-pointer font-bold drop-shadow-kyellow1 md:drop-shadow-kyellow2 leading-3">{wordInTitle[i]}</span></>);

  };
  return (<div>{output}</div>);
}

const Navbar = ({click}) => {
  return (
    <nav className="w-full max-w-7xl relative container mx-auto bg-transparent flex justify-between pb-6 lg:pb-2 px-6 md:px-8 lg:pl-6 lg:pr-6 xl:pr-2 z-50 h-24">
      <div className="flex align-middle content-center items-center h-24 whitespace-nowrap">
        <h1 className="h-full my-auto mt-4 lg:mt-0">{generateTitle("simcoe stitchcraft")}</h1>

      </div>

      <ul className="hidden lg:flex list-none items-center  font-quicksand font-light text-slate-200 sm:text-md lg:text-xl xl:text-xl cursor-pointer ">
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
      <div className={toggleNav ? " w-full h-screen lg:hidden" : "hidden"} >
        <div className="w-full h-24 flex justify-end items-center space-x-6 align-middle mt-2 ">
          <div className="flex w-24 h-16 flex-row justify-center items-center space-x-2 group">
            <i className="fas fa-shopping-cart h-10 w-10 text-center text-slate-200 text-4xl group-hover:text-kyellow group-hover:drop-shadow-kmag2 scale-[85%]"></i>
            <span className=" h-8 w-8 text-kmag bg-slate-200 group-hover:text-kmag group-hover:drop-shadow-kmag2 group-hover:bg-kyellow
             py-1.5 px-2.5 text-sm font-bold rounded-full">0
              </span></div>
          <div className="flex w-16 h-16 justify-center align-center items-center ">
            <i className={toggleNav ?
              "fas fa-close h-10 w-10 text-center text-slate-200 text-4xl  hover:text-kyellow hover:drop-shadow-kmag2" :
              "fas fa-bars visible text-slate-200 text-bars text-4xl hover:text-kyellow hover:drop-shadow-kmag2"}></i></div>
        </div>
        <div className="absolute top-24 inset-0 w-full h-screen bg-kblack">
          <ul className="flex flex-col list-none items-center font-quicksand font-light text-slate-200 text-4xl">
            {menuItems.map(sectionName => <>
              <li className="text-center w-full h-fit py-12 hover:font-bold hover:text-kyellow hover:drop-shadow-kmag1 cursor-pointer flex my-auto justify-center items-center" key={sectionName}> {sectionName}
              </li><div className="w-10/12 border-slate-200 h-1 mx-auto border-b border-opacity-100 border-dotted"></div>
            </>)}
            </ul>
        </div>
      </div>

</nav>



  );
};

export default Navbar;
