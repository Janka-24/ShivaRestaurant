import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import imgSrc from '../../assets/logo.png';
import { Fade as Hamburger } from 'hamburger-react'

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
        setOpen(false);
    };

    return (
        <>
            <div className={isOpen ? 'overlay active' : 'overlay'} onClick={() => setOpen(false)}></div>

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

            <header id='hdMobile'>
                <img src={imgSrc} alt="" className='logo' />
                <div className={isOpen ? 'ForIphone open' : 'ForIphone'}>
                    <nav id='menuForBurger' className={isOpen ? 'nav-open' : 'nav-closed'}>
                        <div className='containerForMenu'>
                            <Link to={'/'} onClick={handleLinkClick}>Acceuil</Link>
                            <Link to={'/restaurants'} onClick={handleLinkClick}>les restaurants</Link>
                            <Link to={'/menu'} onClick={handleLinkClick}>menu</Link>
                            <Link to={'/map'} onClick={handleLinkClick}>où nous trouver ?</Link>
                        </div>
                        <div className='containerForMenuLogo'>

                            <h1 className='princTitle'>shiva </h1>
                            <h2 className='princTitle'>restaurant</h2>

                        </div>
                    </nav>
                </div >
                <Hamburger color='black' toggled={isOpen} toggle={setOpen} />
            </header>

            <header id='hdTablet'>
                <img src={imgSrc} alt="" className='logo' />
                <div className={isOpen ? 'ForIpad open' : 'ForIpad'}>
                    <nav id='menuForBurger' className={isOpen ? 'nav-open' : 'nav-closed'}>
                        <Link to={'/'} onClick={handleLinkClick}>Acceuil</Link>
                        <Link to={'/restaurants'} onClick={handleLinkClick}>les restaurants</Link>
                        <Link to={'/menu'} onClick={handleLinkClick}>menu</Link>
                        <Link to={'/map'} onClick={handleLinkClick}>où nous trouver ?</Link>
                    </nav>
                </div >
                <Hamburger color='black' toggled={isOpen} toggle={setOpen} />
            </header>
        </>
    );
}
