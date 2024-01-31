import React, { useEffect, useState } from 'react'
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";
import "./header.scss"
import ContentWrapper from '../ContentWrapper/ContentWrapper';
import logo from "../../assets/movix-logo.svg";

// Header component definition
function Header() {

  // State variables
  const [show, setShow] = useState("top")         // Controls the visibility of the header (top, show, hide)
  const [lastScrollY, setLastScrollY] = useState(0) // Stores the last scroll position
  const [mobileMenu, setMobileMenu] = useState(false) // Indicates whether the mobile menu is open
  const [query, setQuery] = useState(false)         // Stores the search query
  const [showSearch, setShowSearch] = useState(false) // Indicates whether the search bar is visible
  const navigate = useNavigate()                    // Navigation function from React Router
  const location = useLocation()                    // Location object from React Router

  // Function to handle scroll events and update header visibility
  const scrollNavbar = () => {
    if (window.scrollY > 250) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("hide");
      } else {
        setShow("show");
      }
    } else {
      setShow("top");
    }
    setLastScrollY(window.scrollY);
  }

  // Effect hook to add scroll event listener and cleanup
  useEffect(() => {
    window.addEventListener("scroll", scrollNavbar);
    return () => {
      window.removeEventListener("scroll", scrollNavbar);
    }
  }, [lastScrollY])

  // Effect hook to scroll to the top when the location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location])

  // Function to open the search bar
  const openSearch = () => {
    setMobileMenu(false);
    setShowSearch(true);
  }

  // Function to open/close the mobile menu
  const openMobileMenu = () => {
    setMobileMenu(!mobileMenu);
    setShowSearch(false);
  }

  // Function to handle search queries
  const searchQueryHandler = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
      setTimeout(() => {
        setShowSearch(false);
      }, 1000);
    }
  }

  // Function to handle navigation based on the type (movies or TV shows)
  const navigationHandler = (type) => {
    if (type === "movies") {
      navigate("/explore/movies");
    } else {
      navigate("/explore/tv-shows");
    }
    setMobileMenu(false);
  }

  // JSX rendering of the Header component
  return (
    // Header element with dynamic class names based on state variables
    <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
      {/* Wrapper for content within the header */}
      <ContentWrapper>
        {/* Logo section */}
        <div className="logo">
          <img src={logo} alt="movix-logo" />
        </div>

        {/* Menu items for desktop view */}
        <ul className="menuItems">
          <li className="menuItem" onClick={() => navigationHandler("movies")}>Movies</li>
          <li className="menuItem" onClick={() => navigationHandler("tv-shows")}>TV Shows</li>
          <li className="menuItem" onClick={openSearch}>
            <HiOutlineSearch />
          </li>
        </ul>

        {/* Mobile menu items */}
        <div className="mobileMenuItems">
          {/* Search icon for mobile view */}
          <HiOutlineSearch onClick={openSearch} />

          {/* Conditional rendering based on mobileMenu state */}
          {mobileMenu ? (
            // Close icon for mobile menu when it's open
            <VscChromeClose onClick={() => setMobileMenu(false)} />
          ) : (
            // Menu icon for mobile view when menu is closed
            <SlMenu onClick={openMobileMenu} />
          )}
        </div>
      </ContentWrapper>

      {/* Conditional rendering of the search bar based on showSearch state */}
      {showSearch && (
        <div className="searchBar">
          {/* Wrapper for content within the search bar */}
          <ContentWrapper>
            {/* Input field for search */}
            <div className="searchInput">
              <input
                type="text"
                placeholder="Search for a movie or TV show"
                onKeyUp={searchQueryHandler}
                onChange={(e) => setQuery(e.target.value)}
              />
              {/* Close icon for hiding the search bar */}
              <VscChromeClose onClick={() => setShowSearch(false)} />
            </div>
          </ContentWrapper>
        </div>
      )}
    </header>
  );

}

export default Header
