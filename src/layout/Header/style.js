import styled from "styled-components"

export const Header = styled.header`
    margin: 24px auto 0;
    max-width: 1024px;

    & section {
        margin: 40px 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    & section div { width: 414px; }
    & section div h1 { margin: 8px; }
    & section div p { margin: 16px 8px; text-align: justify; }

    & section img { width: 360px; }

    @media screen and (max-width: 768px) {
        & section {
            flex-direction: column-reverse;
            justify-content: center;
        }
        
        & section div {
            width: auto; max-width: 414px;
            padding: 0 16px;

            display: flex;
            flex-direction: column;
            align-items: center;
        }
        & section div h1 { text-align: center; }
        
        & section img { width: 200px; }
    }
`