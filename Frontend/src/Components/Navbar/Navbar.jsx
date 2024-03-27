import React, { useState, useEffect, useRef } from 'react';
import { useNavigate} from "react-router-dom"
import './Navbar.css';
import Search from '../SearchBar/Search';

// Props are passed as parameters
export default function Navbar({navPosition,navTextStyle,navIcon,navBGColor,navCartIcon,navSearchIcon}){

  // The state of the sidenav is used to check for further conditions
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const sidenavRef = useRef(null);
    const customIconRef = useRef(null);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1000);

    const toggleNav = () => {
      setSidebarOpen(!sidebarOpen);
    };

    const toggleSearch = () => {
      console.log("Search button clicked");
      console.log("Search Visibility:",isSearchOpen);
      setIsSearchOpen(true);
    };

    const closeSearch = () => {
      setIsSearchOpen(false);
    };

  // Once you click on any part of the outside screen and the sidenav closes when open
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


  // This is for search logo to appear when the device width is less than 768px
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1000);
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures this effect runs only on mount and unmount


  // Navigating to collections
  const navigate = useNavigate();

  const navigateToCollections = () => {
    navigate('/collections');
  };

  const navigateTologin = () => {
    navigate('/login');
  };

  const navigateToCart = () => {
    navigate('/cart');
  };

  const navigateToHomePage = () => {
    navigate('/homepage');
  }

  // Navigatet to home
  const navigateToHome = () => {
    navigate('/');
  };

  // const navigateToSearch = () => {
  //   navigate('/search');
  // }

  // This specific style takes care of the underline color
  const navStyle = {
    ...navTextStyle,
    '--after-bg-color': navBGColor
  }

  console.log("nav search icon",navSearchIcon)

  return (
    
    /* container to fix the navbar at the top using absolute */
    <div className='navbar-container' style={navPosition}>
      <div className='nav-top'>
        <div className='nav-left'>
        <div className='menu-text' style={navStyle} onClick={toggleNav} ref={customIconRef}>
          <div className='menu'>MENU</div>
        </div>

        </div>

      <div className='nav-center'>
        <div className='nav-text' style={navStyle}>
          <button className='logo' onClick={navigateToHome}>SWISS</button>
        </div>
      </div>
      
      {isSmallScreen ?(
        <div className='nav-right'>
            <div className='nav-text' style={navStyle}>
                
          <button className='search' onClick={toggleSearch}>
            <img src={navSearchIcon} alt='search-logo' className='svg-icon w-8 h-8' />
          </button>
        </div>
        {isSearchOpen && <Search isOpen={isSearchOpen} closeSearch={closeSearch}/>}
        </div>
        ):(
            <div className='nav-right'>
              <div className='nav-text' style={navStyle}>
                <button className='search' onClick={toggleSearch}>SEARCH</button>
              </div>
              {isSearchOpen && <Search isOpen={isSearchOpen} closeSearch={closeSearch}/>}
              <div className='nav-text' style={navStyle}>
                <button className='collections' onClick={navigateToCollections}>COLLECTIONS</button>
              </div>
              <div className='nav-text' style={navStyle}>
                <button className='collections' onClick={navigateToCart}>
                  <img src={navCartIcon} alt='CART' className='svg-icon w-8 h-8' />
                </button>
              </div>
            </div>
      )}

      </div>

      <div ref={sidenavRef} id="mySidenav" className={`sidenav ${sidebarOpen ? 'open' : ''}`}>
  <div className="nav-icon-container" onClick={toggleNav}>
    <div id="nav-icon" className={`nav-icon ${sidebarOpen ? 'open' : ''}`}>
      <span style={navIcon}></span>
      <span style={navIcon}></span>
    </div>
  </div>

  <div className='sidebar-section1'>
    <div className={`links ${sidebarOpen ? 'fade-in' : 'fade-out'}`} >
      <a href="https://www.google.com">THE BRAND</a>
      <a className='collections-s' onClick={navigateToCollections}>COLLECTIONS</a>
      <a className='cart-s' onClick={navigateToCart}>CART</a>
      <a className='login-s' onClick={navigateTologin}>LOGIN</a>
    </div>
  </div>
  {/* <div className={`sidebar-section2 ${sidebarOpen ? '' : 'fade-out'}`}>
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
  </div> */}
</div>


    </div>
  );
};

