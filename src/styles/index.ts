import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        width: 100vw;
        height: 100vh;
        background-color: #bcccd4;
    }

    h1,h2,h3,span,p{
        font-family: 'Poppins', sans-serif;
    }
`;

export default GlobalStyle;
