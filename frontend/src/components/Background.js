import React, {Component} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import HomeScreen from "../screens/HomeScreen";
import ProductScreen from "../screens/ProductScreen";
import CartScreen from "../screens/CartScreen";
import GalleryScreen from "../screens/GalleryScreen";
import MeetKendallScreen from "../screens/MeetKendallScreen";

//Components

import Navbar from './Navbar';
import Backdrop from './Backdrop';
import SideDrawer from './SideDrawer';


export default class Background extends Component {




    render() {
        // const [sideToggle, setSideToggle] = useState(false);
        return (
            <div className="bg-texture bg-repeat w-full min-h-screen bg-left bg-[length:200px_200px]">
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
        )
    }
}
