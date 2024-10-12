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
            <div className="logo">
              <Link to="/">0tnda.</Link>
            </div>
            <div className="contactt">
              <a href="/contact">Let's work together</a>
            </div>
            <div className="menu">
              <button disabled={disabled} onClick={handleMenu}>
                {/* Conditionally render Hamburger or Close icon */}
                {state.clicked ? "✖" : "☰"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Hamburger state={state} />
    </header>
  );
};

export default Header;
