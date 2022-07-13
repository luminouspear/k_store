import { Link } from "react-router-dom";


const SideDrawer = ({show, click}) => {
    const sideDrawerClass = ["sidedrawer"]

    const translation = click ? 'translate-x-0' : 'translate-x-full'
    const visiblity = show ? 'inline-block' : 'hidden'

    const animationProps = [translation, visiblity]


    return (
      <div
            className={'w-9/12 min-h-screen sm:hidden fixed top-0 right-0 z-[200] transition-all ease-in duration-300 ' + animationProps.join(" ")}>
            {/* Block menu icon and show X icon */}
            <div className="flex justify-end ">

                <div className="h-28 bg-black w-28 flex items-center justify-end ">

                        {/* Nav Icon*/}
                    <div    className="group menu h-16 w-16 flex items-center justify-center mr-4 cursor-pointer"
                            onClick={click}>

                        <i className="fa-solid fa-xmark text-pink-500 group-hover:text-yellow-300 text-4xl drop-shadow-[-2px_2px_0px_rgba(234,117,7,.80)] group-hover:drop-shadow-[-2px_2px_0px_rgba(244,114,182,.80)]"></i>

                    </div>
                </div>
            </div>

            <ul
                className="h-screen w-full bg-black list-none ">

                <li className="hover:drop-shadow-[-2px_4px_0px_rgba(244,114,182,.80)] hover:text-yellow-300 text-5xl text-pink-500 font-quicksand font-bold flex justify-center items-center align-middle h-28">
                    <Link to="/product">
                        Shop</Link>
                </li>

                <li className="hover:drop-shadow-[-2px_4px_0px_rgba(244,114,182,.80)] hover:text-yellow-300  text-5xl text-pink-500 font-quicksand font-bold flex justify-center items-center align-middle h-28 border-t-2 border-t-yellow-400">
                    <Link to="/gallery">
              Gallery</Link>
                </li>

                <li className="hover:drop-shadow-[-2px_4px_0px_rgba(244,114,182,.80)] hover:text-yellow-300 text-5xl text-pink-500 font-quicksand font-bold flex justify-center items-center align-middle  h-28 border-t-2 border-t-yellow-400">
                    <Link to="/meetkendall">
              Meet Kendall</Link>
                </li>

                <li className="group hover:text-yellow-300 h-28 w-full flex justify-center align-middle items-center border-t-2 border-t-yellow-400">
                    <i className="fas fa-shopping-cart text-4xl text-pink-500 mx-4 group-hover:text-yellow-300 group-hover:drop-shadow-[-2px_4px_0px_rgba(244,114,182,.80)]"></i>
                    <Link to="/cart">
                    <span className="group-hover:text-yellow-300 px-1 flex text-5xl text-pink-500 font-quicksand font-bold justify-center items-center group-hover:drop-shadow-[-2px_4px_0px_rgba(244,114,182,.80)]">

                            My Cart

                            <span className=" h-8 w-8 bg-slate-200 group-hover:bg-yellow-300 py-1.5 px-2.5 mx-4 text-xl group-hover:text-pink-500 sm:text-sm font-bold rounded-full flex items-center ">
                                0
                            </span>
                        </span>
                    </Link>
                </li>
                <li className="flex flex-row justify-center pt-8 mx-8 space-x-8">
                    <ul><i className="fa-brands fa-instagram  text-slate-100 text-5xl opacity-90 hover:drop-shadow-[-2px_4px_0px_rgba(244,114,182,.80)] hover:opacity-100 hover:text-yellow-300"></i></ul>
                    <ul><i className="fa-brands fa-facebook-square  text-slate-100 text-5xl opacity-90 hover:drop-shadow-[-2px_4px_0px_rgba(244,114,182,.80)] hover:opacity-100 hover:text-yellow-300"></i></ul>
                    <ul><i className="fa-brands fa-reddit-square  text-slate-100 text-5xl opacity-90 hover:drop-shadow-[-2px_4px_0px_rgba(244,114,182,.80)] hover:opacity-100 hover:text-yellow-300"></i></ul>
                </li>
            </ul>
          </div>
  )
}

export default SideDrawer