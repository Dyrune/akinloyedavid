import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Hamburger from "./Hamburger";
import useInView from "./useInView";
import gsap from "gsap";

// Function to trigger the loading screen transition
function pageTransition() {
  const tl = gsap.timeline();
  tl.to(".loading-screen", {
    duration: 1.2,
    width: "100%",
    left: "0%",
    ease: "Expo.easeInOut",
  }).to(".loading-screen", {
    duration: 1,
    width: "100%",
    left: "100%",
    ease: "Expo.easeInOut",
    delay: 0.3,
  }).set(".loading-screen", { left: "-100%" });
}

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu"
  });
  const [disabled, setDisabled] = useState(false);

  // Check if we are on the AboutInfo page
  const isAboutInfoPage = location.pathname === "/about-info";

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

  // Handle logo click with loading screen transition
  const handleLogoClick = (e) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      pageTransition(); // Trigger loading screen transition
      setTimeout(() => navigate("/"), 1200); // Navigate to main page after transition
    }
  };

  return (
    <header className={`header ${isAboutInfoPage ? "header-black" : ""}`}>
      <div className="container">
        <div className="wrapper">
          <div className={`inner-header ${isAboutInfoPage ? "header-blackk" : ""}`}>
            {/* Logo with click handler for transition */}
            <div ref={logoRef} className={`logo ${isLogoInView ? "slide-in" : isAboutInfoPage ? "h-black" : ""}`}>
              <Link to="/" onClick={handleLogoClick}>0tnda.</Link>
            </div>

            {/* Contact section with slide-in effect */}
            <div ref={contactRef} className={`contactt ${isContactInView ? "slide-in" : ""}`}>
              <a href="/contact">
                Let's work together
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M14 3v2h3.59l-9.3 9.29 1.42 1.42 9.29-9.3V10h2V3z" />
                  <path d="M5 5v14h14v-7h2v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h7v2H5z" />
                </svg>
              </a>
            </div>

            {/* Menu button with slide-in effect */}
            <div ref={menuRef} className={`menu ${isMenuInView ? "slide-in" : ""}`}>
              <button disabled={disabled} onClick={handleMenu}>
                {state.clicked ? "✖" : "☰"}
              </button>
              <div className={`button3 ${isMenuInView ? "slide-in" : ""}`}>Let's Talk</div>
            </div>
          </div>
        </div>
      </div>
      <Hamburger state={state} />
    </header>
  );
};

export default Header;
