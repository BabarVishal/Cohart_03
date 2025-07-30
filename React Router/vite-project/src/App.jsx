import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Navbar from './componats/navbar';
import About from './componats/About';
import Home from './componats/Home';
import Data from './componats/Data';
import Footer from './componats/Footer';

// Create a layout component that includes the Navbar and Outlet
function Layout() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet /> {/* This will render the matched child route */}
      </main>
      <Footer/>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Use the Layout as the parent route */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="data" element={<Data />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
