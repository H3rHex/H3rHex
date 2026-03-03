import { useEffect, useState } from "react";

export const useIsDarkMode = (): boolean => {
  const getTheme = () =>
    document.documentElement.getAttribute("data-theme") === "dark";

  const [isDark, setIsDark] = useState(getTheme());

  useEffect(() => {
    const observer = new MutationObserver(() => setIsDark(getTheme()));

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  return isDark;
};
