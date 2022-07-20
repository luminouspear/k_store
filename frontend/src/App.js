import { Fragment } from 'react';
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




  return (

    <div className="bg-texture bg-repeat w-full min-h-screen bg-left bg-[length:200px_200px]">

      <div
        class=" fixed bottom-0 right-0 w-12 h-12 bg-cyan-400 text-black/90 flex align-middle text-center items-center justify-center font-bold ">
        <span class="sm:hidden">xs</span>
        <span class="hidden sm:inline md:hidden">sm</span>
        <span class="hidden md:inline lg:hidden">md</span>
        <span class="hidden lg:inline xl:hidden">lg</span>
        <span class="hidden xl:inline 2xl:hidden">xl</span>
        <span class="hidden 2xl:inline 3xl:hidden">2xl</span>
        <span class="hidden 3xl:inline 4xl:hidden">3xl</span>
        <span class="hidden 4xl:inline 5xl:hidden">4xl</span>
        <span class="hidden 5xl:inline 6xl:hidden">5xl</span>
        <span class="hidden 6xl:inline 7xl:hidden">6xl</span>
        <span class="hidden 7xl:inline 8xl:hidden">7xl</span>


    </div>

      <Router>
                    { /* Navbar */}
                    <Navbar click={() => {
                    //    console.log("Navbar: " + sideToggle);
                        // setSideToggle(true);
                    }
                    } />


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
                    <main>
                        <Routes>
                            {/* Used to be "Switch" */}
                            <Route exact path="/" element={HomeScreen} />
                            <Route exact path="/product/:id" element={ProductScreen} />
                            <Route exact path="/cart" element={CartScreen} />
                            <Route exact path='/gallery' element={GalleryScreen} />
                            <Route exact path='/meetkendall' element={MeetKendallScreen} />
                        </Routes>
                    </main>
                    {/* HomeScreen */}
                    <HomeScreen />
                    {/* ProductScreen */}
                    {/* CartScreen */}
                </Router>
      </div>

  );
}

export default App;
