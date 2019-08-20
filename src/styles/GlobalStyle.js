import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  button {
    font-family: monospace;
    font-size: 2em;
  }

  /*@font-face {
    font-family: ;
    src: url();
  }*/
`;
