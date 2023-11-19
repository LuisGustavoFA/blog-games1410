import './DarkToggle.css';
import changeTheme from "../../index";
import { BsMoonFill } from 'react-icons/bs'
import { MdLightMode } from "react-icons/md";
import { useState, useEffect } from "react";

function DarkToggle({mobile = false}) {
  const [darkMode, setDarkMode] = useState(false);
  const iconSize = mobile? 28 : 32;

  const handleTheme = () => {
    const newDarkMode = !darkMode;
    if (newDarkMode) changeTheme("black", "white");
    else changeTheme("white", "black");
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", JSON.parse(newDarkMode));
  };

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    if (isDarkMode) changeTheme("black", "white");
    else changeTheme("white", "black");
    setDarkMode(isDarkMode);
  }, []);

  return (
    <div onClick={handleTheme} className="dark-icon">
      {darkMode ? <BsMoonFill size={iconSize} /> : <MdLightMode size={iconSize} />}
    </div>
  );
}
export default DarkToggle;
