import React from "react"
import { Header } from './style'

import Navbar from '../Navbar'
import Button from '../../components/Button'

const illustration_url = require('../../assets/illustrations/coin.png')

export default function () {
    return(
        <Header>
            <Navbar/>
            <section>
                <div>
                    <h1>Um banco digital feito pra você!</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec semper augue. Nullam nec nunc ex. Duis neque orci, fermentum eget ornare ut, mollis nec quam. Pellentesque faucibus diam in vulputate tincidunt. Nullam porttitor justo et sodales auctor.</p>
                    <Button/>
                </div>
                <img src={illustration_url}/>
            </section>
        </Header>
    )
}