import React from "react";

export default function DarkModeToggle() {
  let clickedClass = "clicked";
  const body = document.body;
  const lightTheme = "light";
  const darkTheme = "dark";
  let theme;

  if (localStorage) {
    theme = localStorage.getItem("theme");
  }

  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme);
  } else {
    body.classList.add(lightTheme);
  }

  const switchTheme = (e) => {
    if (theme === darkTheme) {
      body.classList.replace(darkTheme, lightTheme);
      e.target.classList.remove(clickedClass);
      localStorage.setItem("theme", "light");
      theme = lightTheme;
    } else {
      body.classList.replace(lightTheme, darkTheme);
      e.target.classList.add(clickedClass);
      localStorage.setItem("theme", "dark");
      theme = darkTheme;
    }
  };

  return (
    <button
      className={theme === "dark" ? clickedClass : ""}
      id="darkMode"
      onClick={(e) => switchTheme(e)}
    ></button>
    
  );
}
/* import React from "react";
import $ from "jquery";

export default function DarkModeToggle() {
darkLight() {
    "dark" != localStorage.toggled
      ? ($("body").toggleClass("dark", !0),
        (localStorage.toggled = "dark"))
      : ($("body").toggleClass("dark", !1),
        (localStorage.toggled = ""));
  }

  return (
    <label class="switch"> <input type="checkbox" onclick={darkLight} id="checkBox"/> <span class="slider"></span> </label>
  ); */