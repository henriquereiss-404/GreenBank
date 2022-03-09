import React from 'react'
import { Container } from './style'

const article_image = require('../../assets/articles/article-1.png')

export default function () {
    return(
        <Container>
            <img src={article_image}/>
            <div>
                <h3>Title</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec semper augue...</p>
                <a>Ler mais</a>
            </div>
        </Container>
    )
}