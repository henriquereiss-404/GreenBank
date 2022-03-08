import React from 'react'
import { Navbar } from './style'

import Logo from '../../components/Logo'
import Menu from '../../components/Menu'

export default function () {
    return(
        <Navbar>
            <Logo/>
            <Menu/>
        </Navbar>
    )
}