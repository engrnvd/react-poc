import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: ${({theme}) => theme.colors.bg};
    color: ${({theme}) => theme.colors.textColor};
    font-family: Roboto, Arial, sans-serif;
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
`

export default GlobalStyles
