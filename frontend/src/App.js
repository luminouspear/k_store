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

    <Router>
      { /* Navbar */}
      <Navbar click={() => {
        console.log("Navbar: " + sideToggle);
        setSideToggle(true);
      }
      } />


      {/* SideDrawer */}
      <SideDrawer show={sideToggle} click={() => {
        setSideToggle(false);
        console.log('text sideToggle')
      }
      } />
      {/* Backdrop */}
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
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
  );
}

export default App;
