import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Hamburger from "./Hamburger";
import useInView from "./useInView"; // Import useInView

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu"
  });

  const [disabled, setDisabled] = useState(false);

  // Use useInView for each element to detect when it should slide in
  const [logoRef, isLogoInView] = useInView({ threshold: 0.1 });
  const [contactRef, isContactInView] = useInView({ threshold: 0.1 });
  const [menuRef, isMenuInView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    setState({ clicked: false, menuName: "Menu" });
  }, [location]);

  const handleMenu = () => {
    disableMenu();
    setState((prevState) => ({
      initial: prevState.initial === false ? null : prevState.initial,
      clicked: !prevState.clicked,
      menuName: prevState.clicked ? "Menu" : "Close"
    }));
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
            {/* Logo with slide-in effect */}
            <div
              ref={logoRef}
              className={`logo ${isLogoInView ? "slide-in" : ""}`}
            >
              <Link to="/">0tnda.</Link>
            </div>

            {/* Contact section with slide-in effect */}
            <div
              ref={contactRef}
              className={`contactt ${isContactInView ? "slide-in" : ""}`}
            >
              <a href="/contact">
                Let's work together
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M14 3v2h3.59l-9.3 9.29 1.42 1.42 9.29-9.3V10h2V3z" />
                  <path d="M5 5v14h14v-7h2v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h7v2H5z" />
                </svg>
              </a>
            </div>

            {/* Menu button with slide-in effect */}
            <div
              ref={menuRef}
              className={`menu ${isMenuInView ? "slide-in" : ""}`}
            >
              <button 
              disabled={disabled} 
              onClick={handleMenu}>
                {state.clicked ? "✖" : "☰"}
              </button>
              <div
              ref={logoRef} 
              className={`button3 ${isMenuInView ? "slide-in" : ""}`} 
              >Let's Talk</div>
            </div>
          </div>
        </div>
      </div>
      <Hamburger state={state} />
    </header>
  );
};

export default Header;
