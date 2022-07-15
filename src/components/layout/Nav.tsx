import React from 'react'
import { NavLink } from 'react-router-dom'

export const Nav = () => (
    <nav>
        <ul>
            <li><NavLink to="/">Browse Gallery</NavLink></li>
            <li><NavLink to="/add">Add Travel Log</NavLink></li>
        </ul>
    </nav>
)
