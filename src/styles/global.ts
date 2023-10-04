import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --background: #FAFAFA;
    --purple-extra-light: #F1ECFE;
    --purple-light: #EBE5F9;
    --purple: #8047F8;
    --purple-dark: #4B2995;
    --yellow-light: #F1E9C9;
    --yellow: #DBAC2C;
    --yellow-dark: #C47F17;
    --green-light: #ccf1c9;
    --green: #3bdb2c;
    --green-dark: #128c0f;

    --green-label-text: #5E915B;
    --green-label-bg: #E6FFE9;

    --red-label-text: #E18980;
    --red-label-bg: #FEE5E6;
    
    --black-300: #574F4D;

    --title: #272221;
    --subtitle: #403937;
    --card: #F3F2F2;
    --label: #8D8686;
    --button: #E6E5E5;
    --input: #EDEDED;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    line-height: 130%;
    list-style: none;
  }

  a {
    all: unset;
    cursor: pointer;
  }
  
  button {
    all: unset;
    cursor: pointer;
  }

  html {
    font-size: 62.5%;
    font-family: 'Roboto', sans-serif;
  }
  
  body {
    background-color: var(--background);
  }
  
  h1,h2,h3,h4,h5,h6 {
    font-family: "Baloo 2", cursive;
  }

  ::-webkit-scrollbar {
    width: 8px;
    position: absolute;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--label);
    border-radius: 6px;
    position: absolute;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: var(--label);
  }
  
  @media (max-width: 768px) {
    body {
      padding: 0 2rem;
    }
  }
`;
