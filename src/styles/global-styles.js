import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: ${({theme}) => theme.colors.textColor};
  }
  
  html {
    font-size: 14px;
  }

  body {
    background: ${({theme}) => theme.colors.bg};
    color: ${({theme}) => theme.colors.textColor};
    font-family: Roboto, Arial, sans-serif;
    font-size: 1rem;
  }

  img {
    max-width: 100%;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.6rem;
  }

  a, a:visited {
    text-decoration: none;
  }
`

export default GlobalStyles
