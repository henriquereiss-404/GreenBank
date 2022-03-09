import styled from "styled-components"

export const Main = styled.main`
    & > svg { width: 24px;}
`

export const CopySection = styled.section`
    padding: 64px;

    display: flex;
    flex-direction: column;
    align-items: center;

    text-align: center;
    background-color: #0D1B2A;
    color: #fff;

    & > div { max-width: 1024px; padding: 8px; }
    & > div:first-child p { margin-top: 16px; }
`
export const BenefitsContainer = styled.div`
    width: 100%;
    margin: 64px 0;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    justify-items: center;
    grid-gap: 24px;
`

export const AboutUs = styled.div`
    margin: 192px auto;
    max-width: 1024px;

    display: flex;
    flex-direction: row-reverse;

    & p { margin-top: 32px; }
`

export const DepoimentSection = styled.section`
    & article { margin: 0 auto; }
`

export const ArticleSection = styled.div`
    margin: 192px auto;
    max-width: 1024px;
    
    h1 { text-align: center; }

    & > div {
        margin: 40px 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        justify-items: center;
        grid-gap: 24px;
    }
`
