import React from 'react'
import { Container } from './style'

const logo_url = require('../../assets/logo.png')

export default function () {
    return(
        <Container>
            <img src={logo_url}/>
            <span>GreenBank</span>
        </Container>
    )
}