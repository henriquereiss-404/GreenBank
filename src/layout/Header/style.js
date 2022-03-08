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
`