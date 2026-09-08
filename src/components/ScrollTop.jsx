import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollTop() {
  const { pathname, hash } = useLocation();

    useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (hash) {
        const section = document.getElementById(hash.slice(1));

        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
      }

      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [pathname, hash]);
    
  return null;
  
}
