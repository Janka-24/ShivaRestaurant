import React from 'react';
import { Link } from 'react-router-dom';
import imgSrc from '../../assets/logo.png'

export default function NavBar() {
    return (
        <header>
            <div className="separeHeader">
                <Link to={'/'} id='separeHeaderFImg'>
                    <img src={imgSrc} alt="" className='logo' />
                </Link>
            </div>
            <Link to={'/restaurants'}>les restaurants</Link>
            <Link to={'/menu'}>menu</Link>
            <Link to={'/map'}>où nous trouver ?</Link>
        </header>
    )
}
