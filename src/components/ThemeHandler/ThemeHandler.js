import { useEffect } from "react";
import changeTheme from "../../index";

const ThemeHandler = () => {
  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    if (isDarkMode) changeTheme("black", "white");
    else changeTheme("white", "black");
  }, []);
}

export default ThemeHandler;