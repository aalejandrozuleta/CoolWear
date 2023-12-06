import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const NightModeToggle = () => {
  const storedNightMode = localStorage.getItem("nightMode");
  const [isNightMode, setIsNightMode] = useState(
    storedNightMode ? JSON.parse(storedNightMode) : false
  );

  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    if (isNightMode) {
      body.classList.add("night-mode");
    } else {
      body.classList.remove("night-mode");
    }

    // Almacena el estado en localStorage
    localStorage.setItem("nightMode", JSON.stringify(isNightMode));
  }, [isNightMode]);

  return (
    <div
      className={`night-mode-toggle ${isNightMode ? "active" : ""}`}
      onClick={toggleNightMode}
    >
      <span className="toggle-icon">
        <FontAwesomeIcon icon={isNightMode ? faMoon : faSun} />
      </span>
    </div>
  );
};

export default NightModeToggle;
