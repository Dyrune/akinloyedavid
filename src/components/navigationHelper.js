import { gsap } from "gsap";

// Shared function for smooth navigation with GSAP animation
export const handleLinkClick = (e, path, navigate, menuLayer, reveal1, reveal2) => {
  e.preventDefault();
  
  // Perform the navigation with a smooth animation if refs are defined
  if (reveal1 && reveal2) {
    gsap.to([reveal1.current, reveal2.current], {
      duration: 0.8,
      height: 0,
      ease: "power3.inOut",
      onComplete: () => {
        // Hide the menu layer (if present) and navigate to the path
        if (menuLayer && menuLayer.current) {
          gsap.to(menuLayer.current, { css: { display: "none" } });
        }
        navigate(path);
      },
    });
  } else {
    // Directly navigate without animation if refs are not provided
    navigate(path);
  }
};
