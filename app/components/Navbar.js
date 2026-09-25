'use client';

import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">

    {/* Desktop Navbar */}
     <div className="hidden md:flex fixed top-0 left-0 w-full bg-black text-white py-4 px-8 justify-between z-50 mb-10">
       <div className="flex space-x-8">
         {['Home', 'Projects', 'About', 'Contact'].map((item) => (
          <div key={item}>
            <a
              href={`/#${item.toLowerCase()}`}
              className="text-white hover:text-lime-500"
            >
              {item}
            </a>
          </div>
        ))}
      </div>
    
      {/* Logo */}
      <div className= "ml-auto font-bold hover:text-lime-500 transition-transform hover:scale-105 duration-300">
        <h1>
          <a href='/#'>{'{malcolmjconnor}'}</a>
        </h1>
      </div>
    </div>

      {/* Mobile Navbar */}
      <div
        className={`bg-black text-white fixed h-screen transition-all duration-600 z-10 ${
          isOpen ? 'w-64' : 'w-0 overflow-hidden'
        }`}
      >
      
      {/* Mobile Navbar content */}
      <div className="flex flex-col items-center pt-8 text-xl">
        {['Home', 'Projects', 'About', 'Contact'].map((item) => (
          <div key={item} className="mt-4">
            <a href={`/#${item.toLowerCase()}`} className="text-white hover:text-lime-500"
            onClick={() => setIsOpen(false)}>
              {item}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile content */}
      <div className={`flex-1 p-4 ${isOpen ? 'ml-64' : 'ml-0'}`}>
        {/* Button to toggle mobile Navbar */}
        <div className="ml-auto fixed md:hidden">
          <button
            className="hover:text-lime-400 text-slate-500 z-100 hover:scale-150 transition-transform font-bold py-2 px-4 rounded"
            onClick={() => setIsOpen(!isOpen)}
          >
            {/* Toggle icon based on isOpen state */}
            {isOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}

          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
