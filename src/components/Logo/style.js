import styled from "styled-components"

export const Container = styled.div`
    box-sizing: border-box;
    max-height: 48px; width: 137px;
    padding: 8px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    & span { font-size: 16px; }

    &:hover { cursor: pointer; }
`