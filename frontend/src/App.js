import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

//Screens
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import GalleryScreen from "./screens/GalleryScreen";
import MeetKendallScreen from "./screens/MeetKendallScreen";


//Components

import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import SideDrawer from './components/SideDrawer';



function App() {

  // This defines a function, setSideToggle() that takes
  // takes a boolean value, sideToggle, and assigns the
  // useState hook with an intial value of false.
  //
  // This will let me call setSideToggle(value) to open
  // or close the menu.

    const [sideToggle, setSideToggle] = useState(false);




  return (

      <main className=" bg-texture bg-repeat w-full min-h-screen bg-left bg-[length:200px_200px] ">
          <div className="w-full h-full bg-black-grad ">

        <div
        className=" fixed bottom-0 right-0 w-12 h-12 bg-cyan-400 text-black/90 flex align-middle text-center items-center justify-center font-bold ">
        <span className="sm:hidden">xs</span>
        <span className="hidden sm:inline md:hidden">sm</span>
        <span className="hidden md:inline lg:hidden">md</span>
        <span className="hidden lg:inline xl:hidden">lg</span>
        <span className="hidden xl:inline 2xl:hidden">xl</span>
        <span className="hidden 2xl:inline 3xl:hidden">2xl</span>
        <span className="hidden 3xl:inline 4xl:hidden">3xl</span>
        <span className="hidden 4xl:inline 5xl:hidden">4xl</span>
        <span className="hidden 5xl:inline 6xl:hidden">5xl</span>
        <span className="hidden 6xl:inline 7xl:hidden">6xl</span>
        <span className="hidden 7xl:inline 8xl:hidden">7xl</span>


        </div>

      <Router>
                    { /* Navbar */}
                  <Navbar toggleNav={sideToggle} click={() => setSideToggle(!sideToggle)} setSideToggle={setSideToggle} />


                    {/* SideDrawer */}
                    <SideDrawer
                        // show={sideToggle} click={() => {
                        // setSideToggle(false);
                        // console.log('text sideToggle')
                    // }
                    // }
                    />
                    {/* Backdrop */}
                    <Backdrop
                        // show={sideToggle} click={() => setSideToggle(false)}
                    />
                    <div>
                        <Routes>
                            {/* Used to be "Switch" */}
                            <Route exact path="/" component={HomeScreen} />
                            <Route exact path="/product/:id" component={ProductScreen} />
                            <Route exact path="/cart" component={CartScreen} />
                            <Route exact path='/gallery' component={GalleryScreen} />
                            <Route exact path='/meetkendall' component={MeetKendallScreen} />
                        </Routes>
                    </div>
                    {/* HomeScreen */}
                    <HomeScreen />
                    {/* ProductScreen */}
                    {/* CartScreen */}
                </Router>
          </div>
      </main>

  );
}

export default App;
