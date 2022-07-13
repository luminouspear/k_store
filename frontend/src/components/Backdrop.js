const Backdrop = ({ show, click }) => {
  return show && (
      <div className="w-full min-h-screen bg-black/50 z-[100] top-28 fixed transition-all ease-in duration-300 md:hidden"
          onClick={click}>

    </div>
  )
}

export default Backdrop