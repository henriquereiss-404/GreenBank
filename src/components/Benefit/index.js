import React from 'react'
import { Container } from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export default function () {
    return (
        <Container className='benefit-reveal'>
            <FontAwesomeIcon icon={faHeart}/>
            <div>
                <h3>Title</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit auctor luctus. Nunc at sem faucibus, hendrerit nisi quis, mattis enim.</p>
            </div>
        </Container>
    )
}