import React from 'react'
import { Navbar } from './style'

import Logo from '../../components/Logo'
import Menu from '../../components/Menu'
import HamburgerMenu from "../../components/HamburgerMenu"

export default function () {
    return(
        <Navbar>
            <Logo/>
            <Menu/>
            <HamburgerMenu/>
        </Navbar>
    )
}