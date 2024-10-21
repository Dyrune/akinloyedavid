import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Hamburger from "./Hamburger";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu"
  });

  const [disabled, setDisabled] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0); // Track scroll position
  const [isHidden, setIsHidden] = useState(false); // Track when content should be hidden

  // Detect scroll changes to hide/show content
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      // Hide the content when scrolling down and past 100px
      if (currentScrollPos > scrollPosition && currentScrollPos > 700) {
        setIsHidden(true);
      } else {
        setIsHidden(false); // Show the content when scrolling up
      }

      setScrollPosition(currentScrollPos); // Update the scroll position
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  useEffect(() => {
    setState({ clicked: false, menuName: "Menu" });
  }, [location]);

  const handleMenu = () => {
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close"
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu"
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close"
      });
    }
  };

  const disableMenu = () => {
    setDisabled(true);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <div className="inner-header">
            {/* Logo that slides up on scroll */}
            <div className={`logo ${isHidden ? "slide-up" : ""}`}>
              <Link to="/">0tnda.</Link>
            </div>

            {/* Contact section that slides up on scroll */}
            <div className={`contactt ${isHidden ? "slide-up" : ""}`}>
              <a href="/contact">
                Let's work together
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M14 3v2h3.59l-9.3 9.29 1.42 1.42 9.29-9.3V10h2V3z" />
                  <path d="M5 5v14h14v-7h2v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h7v2H5z" />
                </svg>
              </a>
            </div>

            {/* Menu with "Let's Talk" button */}
            <div className="menu">
              <button disabled={disabled} onClick={handleMenu}>
                {state.clicked ? "✖" : "☰"}
              </button>
              <div className={`button3 ${isHidden ? "slide-up" : ""}`}>
                Let's Talk
              </div>
            </div>
          </div>
        </div>
      </div>
      <Hamburger state={state} />
    </header>
  );
};

export default Header;
