import styled from "styled-components"

export const Container = styled.ul`
    box-sizing: border-box;
    height: 48px;
    padding: 8px;
    
    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: 300;
    
    & li:not(li:last-child) { padding-right: 16px; }

    // underline
    .active {
        font-weight: 400;
        color: #0D1B2A;
        position: relative;
    }
    .active::after {
        content: '';
        position: absolute;
        left: 50%; bottom: -8px;
        transform: translateX(-50%);
        width: 8px; height: 100%;
        border-bottom: 2px solid #0AF7A7;
    }
`