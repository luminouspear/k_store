
const SideDrawer = ({show, click}) => {
    const sideDrawerClass = ["sidedrawer"]

    const translation = click ? 'translate-x-0' : 'translate-x-full'
    const visiblity = show ? 'inline-block' : 'hidden'

    const animationProps = [translation, visiblity]


    return (
      <div
            className={'w-9/12 min-h-screen bg-white md:hidden fixed top-0 right-0 z-[200] transition-all ease-in duration-300 ' + animationProps.join(" ")}>
            <div className="h-28 bg-blue-400 w-full flex items-center justify-end ">
                {/* Nav Icon*/}
                <div className="group menu h-16 w-16 flex items-center justify-center mr-4 cursor-pointer"
                onClick={click}>
              <i className="fa-solid fa-xmark group-hover:text-yellow-300 text-4xl drop-shadow-[-2px_2px_0px_rgba(234,117,7,.80)] group-hover:drop-shadow-[-2px_4px_0px_rgba(244,114,182,.80)]"></i>
            </div>
            </div>
            <ul onClick={click}>
                <li></li>
            </ul>
          </div>
  )
}

export default SideDrawer