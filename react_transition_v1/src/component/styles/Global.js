import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body{
        background: ${({theme}) => theme.colors.body};
        color: hsl(192, 100%, 9%);
        font-size: 1.15em;
        font-family: 'Poppins', sans-serif;
        margin: 0;
    }

    img{
        max-width: 100%;
    }


`

export default GlobalStyles;