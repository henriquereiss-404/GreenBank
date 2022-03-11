import React from "react"
import { Container, UserData, Slider } from './style'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons"

export default function () {
    return(
        <Container>
            <div className='reveal-top'>
                <UserData>
                    <div>
                        <img src='https://upload.wikimedia.org/wikipedia/en/0/03/Walter_White_S5B.png'/>
                    </div>
                    
                    <div>
                        <p>User Name</p>
                        <span>Nationality</span>
                    </div>
                </UserData>
                <p>
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec semper augue. Nullam nec nunc ex. Duis neque orci, fermentum eget ornare ut, mollis nec quam. Pellentesque faucibus diam in vulputate tincidunt. Nullam porttitor justo et sodales auctor. “
                </p>
            </div>
            <Slider className='reveal-top'>
                <FontAwesomeIcon icon={faCaretLeft}/>
                <ul>
                    <li className='active'></li>
                    <li></li>
                    <li></li>
                </ul>
                <FontAwesomeIcon icon={faCaretRight}/>
            </Slider>
        </Container>
    )
}