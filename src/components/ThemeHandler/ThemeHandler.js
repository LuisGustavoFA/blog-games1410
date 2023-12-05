import { useEffect } from "react";
import changeTheme from "../../index";

const ThemeHandler = () => {
  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    if (isDarkMode) changeTheme("black", "white", "#9e9e9e");
    else changeTheme("white", "black", "#3f3f3f");
  }, []);
}

export default ThemeHandler;