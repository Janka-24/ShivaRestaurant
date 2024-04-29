import React, { useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Styles pour le carousel
import imgKottu from '../../assets/kottu.jpeg';
import svgDeco from '../../assets/deco.svg'; import { isMobile } from 'react-device-detect';
import 'aos/dist/aos.css';
import TitleTemplate from '../Title';


const Menu = () => {

    return (
        <>
            <section id='menuSec'>
                <TitleTemplate title="Menu" />
                <div id="menuContainer">
                    <MenuCard prix={50} name="Dosai" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans"></MenuCard>
                    <MenuCard prix={50} name="K" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans"></MenuCard>
                    <MenuCard prix={50} name="Dosai" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans"></MenuCard>
                    <MenuCard prix={50} name="Dosai" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans"></MenuCard>
                    <MenuCard prix={50} name="Dosai" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans"></MenuCard>
                    <MenuCard prix={50} name="Dosai" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans"></MenuCard>
                    <MenuCard prix={50} name="Dosai" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans"></MenuCard>
                    <MenuCard prix={50} name="Dosai" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans"></MenuCard>
                    <MenuCard prix={50} name="Dosai" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans"></MenuCard>
                    <MenuCard prix={50} name="Dosai" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans"></MenuCard>
                    <MenuCard prix={50} name="Dosai" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans"></MenuCard>
                    <MenuCard prix={50} name="Dosai" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans"></MenuCard>
                    <MenuCard prix={50} name="Dosai" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans"></MenuCard>
                    <MenuCard prix={50} name="Dosai" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans"></MenuCard>
                    <MenuCard prix={50} name="Dosai" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans"></MenuCard>
                    <MenuCard prix={50} name="Dosai" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans"></MenuCard>
                    <MenuCard prix={50} name="Dosai" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans"></MenuCard>
                    <MenuCard prix={50} name="Dosai" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans"></MenuCard>
                    <MenuCard prix={50} name="Dosai" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans"></MenuCard>
                    <MenuCard prix={50} name="Dosai" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans"></MenuCard>
                    <MenuCard prix={50} name="Dosai" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans"></MenuCard>
                </div>
            </section>
        </>
    );
}

const MenuCard = (props) => {
    return (
        <div className='menuCard'>
            <div className='c1'>
                <h3>
                    <span>{props.name}</span>
                </h3>
                <p>{props.description}</p>

            </div>
            <div className='c2'>
                <p>{props.prix} .-</p>
            </div>
        </div>
    );
}

export default Menu;
