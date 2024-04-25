import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import imgSrc from '../../assets/logo.png';
import Hamburger from 'hamburger-react';

export default function NavBar() {
    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('overlay-active');
        } else {
            document.body.classList.remove('overlay-active');
        }
    }, [isOpen]);

    const handleLinkClick = () => {
        setOpen(false); // Fermer l'overlay lorsque vous cliquez sur un lien
    };

    return (
        <>
            {/* Overlay */}
            <div className={isOpen ? 'overlay active' : 'overlay'} onClick={() => setOpen(false)}></div>

            {/* Burger */}
            <Hamburger color='white' toggled={isOpen} toggle={setOpen} />

            {/* Contenu pour les PC */}
            <header className='ForPc'>
                <div className="separeHeader">
                    <Link to={'/'} id='separeHeaderFImg'>
                        <img src={imgSrc} alt="" className='logo' />
                    </Link>
                </div>
                <Link to={'/restaurants'}>les restaurants</Link>
                <Link to={'/menu'}>menu</Link>
                <Link to={'/map'}>où nous trouver ?</Link>
            </header>

            {/* Contenu pour les tablettes */}
            <header className={isOpen ? 'ForIpad ForIphone open' : 'ForIpad ForIphone'}>
                <nav id='menuForBurger' className={isOpen ? 'nav-open' : 'nav-closed'}>
                    <Link to={'/'} onClick={handleLinkClick}>Acceuil</Link>
                    <Link to={'/restaurants'} onClick={handleLinkClick}>les restaurants</Link>
                    <Link to={'/menu'} onClick={handleLinkClick}>menu</Link>
                    <Link to={'/map'} onClick={handleLinkClick}>où nous trouver ?</Link>
                </nav>
            </header >
        </>
    );
}
