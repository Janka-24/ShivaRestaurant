import React from 'react';
import { Link } from 'react-router-dom';
import imgSrc from '../../assets/logo.png'

export default function NavBar() {
    return (
        <header>
            <div className="separeHeader">
                <Link to={'/'}>
                    <img src={imgSrc} alt="" className='logo' />
                </Link>
            </div>
            <Link to={'/restaurants'}>les restaurants</Link>
            <Link to={'/menu'}>menu</Link>
            <Link to={'/reservation'}>réservation</Link>
            <Link to={'/services'}>où nous trouver ?</Link>
            <div className="separeHeader">
                <a href="">EN</a>
                <p>|</p>
                <a href="">FR</a>
            </div>
        </header>
    )
}
