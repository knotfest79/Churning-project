import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
/* Import external styles separately */
@import url("https://unpkg.com/leaflet@1.7.1/dist/leaflet.css");
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&display=swap");

:root {
  --color-brand--1: #ffb545;
  --color-brand--2: #00c46a;
  --color-dark--1: #242a2e;
  --color-dark--2: #2d3439;
  --color-dark--3: #42484d;
  --color-light--1: #aaa;
  --color-light--2: #ececec;
  --color-light--3: #d6dee0;
}

html, body {
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  width: 100%;
  box-sizing: border-box;
  font-family: "Manrope", sans-serif;
}

* {
  box-sizing: border-box;
  max-width: 100%;
}

/* General CTA Button */
.cta {
  display: inline-block;
  background-color: #9062f2;
  color: var(--color-dark--1);
  text-transform: uppercase;
  text-decoration: none;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.8rem 2rem;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.cta:hover, .cta:active {
  background-color: #7a4adb;
  color: white;
}

/* Specific Style for Navbar Login Button */
.cta.cta-border {
  color: var(--color-brand--2);
  border: 2px solid var(--color-brand--2);
}

.cta.cta-border:hover {
  background-color: var(--color-brand--2);
  color: white;
}
`;

export default GlobalStyles;
