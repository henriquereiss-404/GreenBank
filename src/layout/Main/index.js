import React from 'react'
import { Main, CopySection, BenefitsContainer, AboutUs, DepoimentSection, ArticleSection } from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

import Benefit from '../../components/Benefit'
import Depoiment from '../../components/Depoiment'
import Article from '../../components/Article'

const illustration_url = require('../../assets/illustrations/money.png')

export default function () {
    return(
        <Main>
            <CopySection>
                <div>
                    <h2>Por que usar GreenBank?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec semper augue. Nullam nec nunc ex. Duis neque orci, fermentum eget ornare ut, mollis nec quam. Pellentesque faucibus diam in vulputate tincidunt. Nullam porttitor justo et sodales auctor.</p>
                </div>
                <BenefitsContainer>
                    <Benefit/>
                    <Benefit/>
                    <Benefit/>

                    <Benefit/>
                    <Benefit/>
                    <Benefit/>
                </BenefitsContainer>
                <span className='arrow-reveal'>
                    <FontAwesomeIcon icon={faAngleDown}/>
                </span>
            </CopySection>
            
            <AboutUs id='about-us'>
                <div className='reveal-right'>
                    <h1>Somo o banco digital que se importa</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec semper augue. Nullam nec nunc ex. Duis neque orci, fermentum eget ornare ut, mollis nec quam. Pellentesque faucibus diam in vulputate tincidunt. Nullam porttitor justo et sodales auctor.<br/><br/>Duis neque orci, fermentum eget ornare ut, mollis nec quam. Pellentesque faucibus diam in vulputate tincidunt. Nullam porttitor justo et sodales auctor.
                    </p>
                </div>
                <img src={illustration_url} className='reveal-left'/>
            </AboutUs>
            
            <DepoimentSection id='depoiments'>
                <Depoiment/>
            </DepoimentSection>

            <ArticleSection id='articles'>
                <h1 className='reveal-top'>Veja nossos últimos artigos</h1>
                <div className='reveal-top'>
                    <Article/>
                    <Article/>
                    <Article/>
                </div>
            </ArticleSection>
        </Main>
    )
}