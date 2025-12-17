import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  // Extracts pathname property from the location object
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top of the page on path change
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
