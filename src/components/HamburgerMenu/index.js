import React from 'react'
import { Container } from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function () {
    return(
        <Container>
            <FontAwesomeIcon icon={faBars}/>
        </Container>
    )
}