import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';


//Screens
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import GalleryScreen from "./screens/GalleryScreen";
import MeetKendallScreen from "./screens/MeetKendallScreen";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";
import Modal from "./Modal.js";


//Components

import Navbar from './components/global/navbar/Navbar';
import NotFound from './screens/NotFound';



function App() {

  // This defines a function, setSideToggle() that takes
  // takes a boolean value, sideToggle, and assigns the
  // useState hook with an intial value of false.
  //
  // This will let me call setSideToggle(value) to open
  // or close the menu.

  const [sideToggle, setSideToggle] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState(null)
  const [selectedImageAlt, setSelectedImageAlt] = useState(null)

  const debugWindowSize = false;

  const onSelectImage = (imageUrl, imageAlt) => {
    setSelectedImageUrl(imageUrl)
    setSelectedImageAlt(imageAlt)
}

  const handleCloseModal = () => {
    setSelectedImageUrl(null)
    setSelectedImageAlt(null)
  }

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  }

  useEffect(() => {
        if (selectedImageUrl) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
    }, [selectedImageUrl])


  return (

    <main className=" bg-texture bg-repeat w-full min-h-screen bg-left bg-[length:200px_200px] ">
      <div className="w-full h-full bg-black-grad ">

        {debugWindowSize && <div
          className="fixed bottom-0 right-0 flex items-center justify-center w-12 h-12 font-bold text-center align-middle bg-cyan-400 text-black/90">
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


        </div>}

        <Router>

          { /* Modal */}
          {selectedImageUrl && selectedImageAlt && (<Modal className="relative z-[100]" onClose={handleCloseModal}
            imageUrl={selectedImageUrl} imageAlt={selectedImageAlt}>
          </Modal>)}

          { /* Navbar */}
          <Navbar toggleNav={sideToggle} click={() => setSideToggle(!sideToggle)} setSideToggle={setSideToggle} />



          <div>
            <Routes>
              {/* Used to be "Switch" */}
              <Route path="/shop/:id" element={<ProductDetailsScreen onSelectImage={onSelectImage} onClick={scrollToTop} />} />
              <Route path="/shop" element={<ProductScreen onSelectImage={onSelectImage} onClick={scrollToTop} />}  />
              <Route path="/cart" element={<CartScreen />} />
              <Route path='/gallery' element={<GalleryScreen onSelectImage={onSelectImage} onClick={scrollToTop} />}  />
              <Route path='/meetkendall' element={<MeetKendallScreen />} onClick={scrollToTop} />
              <Route path='/404' element={<NotFound />} onClick={scrollToTop} />
              <Route path='*' element={<NotFound />} onClick={scrollToTop} />
              <Route path="/" element={<HomeScreen onSelectImage={onSelectImage} />} onClick={scrollToTop} scrollToTop={scrollToTop} />
            </Routes>
          </div>
          {/* HomeScreen */}

        </Router>
      </div>
    </main>

  );
}

export default App;
