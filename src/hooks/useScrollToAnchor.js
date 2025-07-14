import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const useScrollToAnchor = () => {
  const location = useLocation();
  const lastHash = useRef("");
  const scrollTimeout = useRef(null);

  useEffect(() => {
    const handleScrollToAnchor = () => {
      if (location.hash) {
        lastHash.current = location.hash.slice(1);
      }

      if (lastHash.current) {
        const element = document.getElementById(lastHash.current);
        if (element) {
          if (scrollTimeout.current) {
            clearTimeout(scrollTimeout.current);
          }

          scrollTimeout.current = setTimeout(() => {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "nearest"
            });
            lastHash.current = "";
          }, 100);
        }
      }
    };

    handleScrollToAnchor();

    return () => {
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [location]);

  return null;
};

export default useScrollToAnchor;