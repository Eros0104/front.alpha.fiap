import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    
  }

  html {
    font-size: 16px;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    font-family: 'Inter', sans-serif;
  }
`;
