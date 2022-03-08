import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    // font
    @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap');
    
    // text settings
    div#root { font-family: 'Ubuntu', sans-serif; }

    h1 {
        font-size: 40px;
        font-weight: 700;
    }

    h2 {
        font-size: 32px;
        font-weight: 500;
    }

    h3 {
        font-size: 24px;
        font-weight: 400;
    }

    p {
        font-size: 16px;
        font-weight: 300;
    }
`