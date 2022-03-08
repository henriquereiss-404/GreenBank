import React from 'react'
import { Container } from './style'

export default function () {
    return(
        <Container>
            <li><a href='#' className='active'>Home</a></li>
            <li><a href='#'>Sobre nós</a></li>
            <li><a href='#'>Depoimentos</a></li>
            <li><a href='#'>Artigos</a></li>
        </Container>
    )
}