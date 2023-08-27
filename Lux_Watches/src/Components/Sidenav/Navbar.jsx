import React, { useState, useEffect, useRef } from 'react';
import './Sidenav.css';
import './Navbar.css'

const Sidenav = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidenavRef = useRef(null);
  const customIconRef = useRef(null);

  const toggleNav = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // This is for clicking on the screen and the sidenav closes when open
  const handleOutsideClick = (event) => {
    if (
      sidenavRef.current &&
      !sidenavRef.current.contains(event.target) &&
      customIconRef.current &&
      !customIconRef.current.contains(event.target)
    ) {
      setSidebarOpen(false);
    }
  };

  // This is for checking and applying the effects
  useEffect(() => {
    if (sidebarOpen) {
      document.addEventListener('click', handleOutsideClick);
    } else {
      document.removeEventListener('click', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [sidebarOpen]);

  return (
    <div>
      <div
        className="custom-icon"
        onClick={toggleNav}
        ref={customIconRef}
      >
        <div
          id="nav-icon"
          className={`nav-icon ${sidebarOpen ? 'open hover-effect' : 'hover-effect'}`}
        >
          <span></span>
          <span></span>
        </div>

        <div
          className={`menu-text ${sidebarOpen ? 'fade-out' : 'fade-in'}`}
        >
          MENU
        </div>

      </div>

      <div className='logo-container'>
        <div className='logo'>
                LOGO
            </div>
      </div>

      
      <div className='other-nav'>

          <div className='search'>
            SEARCH
          </div>
          <div className='collections'>
            COLLECTIONS
          </div>
        </div>

      <div
        ref={sidenavRef}
        id="mySidenav"
        className={`sidenav ${sidebarOpen ? 'open' : ''}`}
      >
        <div className="nav-icon-container" onClick={toggleNav}>
          <div
            id="nav-icon"
            className={`nav-icon ${sidebarOpen ? 'open' : ''}`}
          >
            <span></span>
            <span></span>
          </div>
        </div>

        <div className='sidebar-section1'>
          <div className={`links ${sidebarOpen ? 'fade-in' : 'fade-out'}`} >
            <a href="https://www.google.com">THE BRAND</a>
            <a href="https://www.example.com">COLLECTIONS</a>
            <a href="https://www.openai.com">STORE</a>
            <a href="https://www.github.com">EVENTS</a>
          </div>
        </div>

        <div className={`sidebar-section2 ${sidebarOpen ? '' : 'fade-out'}`}>
          <div className='test-element-container'>
            <div className='test-element'>
              Test
            </div>
            <div className='test-element'>
              Test
            </div>
            <div className='test-element'>
              Test
            </div>
            <div className='test-element'>
              Test
            </div>
            <div className='test-element'>
              Test
            </div>
            <div className='test-element'>
              Test
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
