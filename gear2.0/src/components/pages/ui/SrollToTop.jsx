// ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const targetHash = hash || window.location.hash;
    if (targetHash) {
      const timeout = window.setTimeout(() => {
        document.getElementById(decodeURIComponent(targetHash.slice(1)))?.scrollIntoView({ behavior: 'smooth' });
      }, 0);
      return () => window.clearTimeout(timeout);
    }

    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname, hash]);

  return null;
}
