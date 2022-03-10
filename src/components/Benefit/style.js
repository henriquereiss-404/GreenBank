import styled from 'styled-components'

export const Container = styled.article`
    width: 248px;
    padding: 8px;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #0D1B2A;
    color: #fff;

    & svg {
        width: 48px; height: 48px;
        color: #0AF7A7;
    }

    & div h3 { text-align: center; margin: 24px 0 8px; }
    & div p { text-align: justify; }

    @media screen and (max-width: 425px) {
        width: auto; max-width: 248px;
    }
`