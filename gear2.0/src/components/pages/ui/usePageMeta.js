import { useEffect } from "react";

const siteOrigin = "https://www.zaynlevi.com";

export default function usePageMeta(title, description) {
  useEffect(() => {
    const url = new URL(window.location.pathname, siteOrigin).href;
    document.title = title;

    const descriptionMeta = document.querySelector('meta[name="description"]');
    const openGraphTitle = document.querySelector('meta[property="og:title"]');
    const openGraphDescription = document.querySelector('meta[property="og:description"]');
    const openGraphUrl = document.querySelector('meta[property="og:url"]');
    const canonical = document.querySelector('link[rel="canonical"]');

    if (descriptionMeta) descriptionMeta.content = description;
    if (openGraphTitle) openGraphTitle.content = title;
    if (openGraphDescription) openGraphDescription.content = description;
    if (openGraphUrl) openGraphUrl.content = url;
    if (canonical) canonical.href = url;
  }, [description, title]);
}
