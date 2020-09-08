import { createGlobalStyle } from 'styled-components'

import Background from '../assets/github.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: linear-gradient(135deg, #7d0633, #31112c);
    /*background: #f4f4f4 url(${Background}) no-repeat 70% top; */
    -webkit-font-smoothing:  antialiased;
  }

  body, input, button {
    font: 16px 'Ubuntu', sans-serif;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: orange;

    &:hover {
      text-decoration: underline;
      cursor: progress;
    }
  }
`;
