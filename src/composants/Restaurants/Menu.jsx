import React, { useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Styles pour le carousel
import imgKottu from '../../assets/kottu.jpeg';
import imgLogo from '../../assets/logo.png';
import svgDeco from '../../assets/deco.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Menu = () => {
    return (
        <>
            <section id='menuSec'>
                <TitleTemplate title="Menu" />
                <div id="menuContainer">
                    <MenuCard img={imgKottu} name="Dosai" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans"></MenuCard>
                    <MenuCard img={imgKottu} name="Dosai" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans"></MenuCard>
                    <MenuCard img={imgKottu} name="Dosai" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans"></MenuCard>
                    <MenuCard img={imgKottu} name="Dosai" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans"></MenuCard>
                    <MenuCard img={imgKottu} name="Dosai" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans"></MenuCard>
                    <MenuCard img={imgKottu} name="Dosai" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans"></MenuCard>
                    <MenuCard img={imgKottu} name="Dosai" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans"></MenuCard>
                    <MenuCard img={imgKottu} name="Dosai" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans"></MenuCard>
                    <MenuCard img={imgKottu} name="Dosai" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans"></MenuCard>
                    <MenuCard img={imgKottu} name="Dosai" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans"></MenuCard>
                    <MenuCard img={imgKottu} name="Dosai" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans"></MenuCard>
                    <MenuCard img={imgKottu} name="Dosai" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans"></MenuCard>
                    <MenuCard img={imgKottu} name="Dosai" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans"></MenuCard>
                    <MenuCard img={imgKottu} name="Dosai" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans"></MenuCard>
                    <MenuCard img={imgKottu} name="Dosai" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans"></MenuCard>

                </div>
            </section>
        </>
    );
}

const MenuCard = (props) => {
    useEffect(() => {
        AOS.init({ duration: 1500 });
    })
    return (<div data-aos="fade-up" className='menuCard'>
        <img src={props.img} alt="" className='menu-card-img' />
        <div className='menu-card-text'>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
        </div>
    </div>)
}
const TitleTemplate = (props) => {
    return (
        <div className='titleTemplate'>
            <h2>{props.title}</h2>
            <img src={svgDeco} alt="" className='decoForTitle' />
        </div>
    )
}
export default Menu;
