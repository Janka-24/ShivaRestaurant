import React from 'react';
import { Link } from 'react-router-dom';
import imgSrc from '../../assets/logo.png'

export default function Footer() {
    return (
        <footer>
            <div className="separeFooter">
                <img src={imgSrc} alt="" className='logo' />
                &copy; shiva restaurant
            </div>
            <div>
                2024
            </div>
        </footer>
    )
}
