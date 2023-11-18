import './DarkToggle.css';
import changeTheme from "../../index";
import { BsMoon, BsMoonFill } from 'react-icons/bs'
import { useState, useEffect } from "react";

function DarkToggle() {
  const [darkMode, setDarkMode] = useState(false);

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
      {darkMode ? <BsMoonFill size={32} /> : <BsMoon size={32} />}
    </div>
  );
}
export default DarkToggle;
