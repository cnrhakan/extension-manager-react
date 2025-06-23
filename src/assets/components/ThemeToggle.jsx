import { useState } from "react";
import iconMoon from "/images/icon-moon.svg";
import iconSun from "/images/icon-sun.svg";

function ThemeToggle() {
  const html = document.querySelector("html");
  const [isLight, setIsLight] = useState(true);

  const toggleTheme = () => {
    setIsLight(!isLight);
    html.classList.toggle("dark");
  };
  return (
    <div>
      {isLight ? (
        <button className="cursor-pointer bg-neutral-200 hover:bg-neutral-400 p-2 rounded-xl duration-300">
          <img src={iconMoon} alt="" onClick={() => toggleTheme()} />
        </button>
      ) : (
        <button className="cursor-pointer bg-neutral-700 hover:bg-neutral-500 p-2 rounded-xl duration-500">
          <img src={iconSun} alt="" onClick={() => toggleTheme()} />
        </button>
      )}
    </div>
  );
}

export default ThemeToggle;
