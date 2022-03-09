import styled from 'styled-components'

export const Container = styled.article`
    width: 525px; height: 280px;
    padding: 16px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border-radius: 24px;
    background-color: #0D1B2A;
    color: white;

    & > div { display: flex; }
    & > div > p { text-align: justify; }
`

export const UserData = styled.div`
    min-width: 160px;
    margin-right: 16px;

    display: flex;
    align-items: center;

    & > div:first-child {
        margin-right: 8px;
        width: 64px; height: 64px;
        overflow: hidden;
        border-radius: 100%;
    }
    & div img { width: 100%; }
    & p { font-weight: 400; }
    & span { font-weight: 300; }
`

export const Slider = styled.div`
    margin-top: 32px;

    display: flex;
    align-items: center;
    
    color: rgba(10,247,167,0.32);

    // Essa parte deveria tá dentro do carrossel?
    & ul {
        margin: 0 40px;
        width: 64px;

        display: flex;
        justify-content: space-between;
    }
    & li {
        width: 8px; height: 8px;
        border-radius: 100%;
        background-color: rgba(10,247,167,0.32);
    }

    & li.active { background-color: #0af7a7; }
`