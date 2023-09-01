import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';


  // The state of the sidenav is used to check for further conditions
  const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const sidenavRef = useRef(null);
    const customIconRef = useRef(null);

    const toggleNav = () => {
      setSidebarOpen(!sidebarOpen);
    };

  // Once you click on the screen and the sidenav closes when open
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

  // This is for checking and applying the effects, when the sidebar is open, it handles the outside click
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
    /* container to fix the navbar at the top using absolute */
    <div className='navbar-container'>
      <div className='nav-top'>
        <div className='nav-left'>
          <div className='menu-text' onClick={toggleNav} ref={customIconRef}>
            <div>MENU</div>
          </div>
        </div>

      <div className='nav-center'>
        <div className='nav-text'>
          <div>LOGO</div>
        </div>
      </div>
      
        <div className='nav-right'>
          <div className='nav-text'>
            <div className='search'>SEARCH</div>
          </div>
          <div className='nav-text'>
            <div className='collections'>COLLECTIONS</div>
          </div>
        </div>
      </div>


      <div ref={sidenavRef} id="mySidenav" className={`sidenav ${sidebarOpen ? 'open' : ''}`}>
        <div className="nav-icon-container" onClick={toggleNav}>
          <div id="nav-icon" className={`nav-icon ${sidebarOpen ? 'open' : ''}`}>
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

export default Navbar;
