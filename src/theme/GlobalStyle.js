/* eslint-disable no-unused-vars */
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');

    *, *::before, *::after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    /* Happy rem */
    html {
        font-size: 62.5%;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: "Montserrat", sans-serif;
        font-size: 1.6rem; // Happy rems
    }
`;

export default GlobalStyle;
