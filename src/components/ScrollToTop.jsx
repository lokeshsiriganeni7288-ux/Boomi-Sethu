import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Scroll to top on route change, or to a hash/section when provided. */
function ScrollToTop() {
  const { pathname, hash, state } = useLocation();

  useEffect(() => {
    const targetId = state?.scrollTo || (hash ? hash.replace("#", "") : null);

    if (targetId) {
      // Wait for the page to render before scrolling
      const timer = setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          const navOffset = 72;
          const top =
            el.getBoundingClientRect().top + window.scrollY - navOffset;
          window.scrollTo({ top, behavior: "smooth" });
        } else {
          window.scrollTo(0, 0);
        }
      }, 80);

      return () => clearTimeout(timer);
    }

    window.scrollTo(0, 0);
  }, [pathname, hash, state]);

  return null;
}

export default ScrollToTop;
