import React from 'react'
import { Container } from './style'

export default function () {
    return(
        <Container>
            <li><a href='#' className='active'>Home</a></li>
            <li><a href='#about-us'>Sobre nós</a></li>
            <li><a href='#depoiments'>Depoimentos</a></li>
            <li><a href='#articles'>Artigos</a></li>
        </Container>
    )
}