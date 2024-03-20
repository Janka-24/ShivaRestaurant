import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Styles pour le carousel
import imgExterior from '../../assets/exterieur.jpg';
import imgInterior from '../../assets/interieur.jpg';
import test01 from '../../assets/test01.jpeg';
import test02 from '../../assets/test02.webp';
import test03 from '../../assets/test03.jpeg';
import imgKottu from '../../assets/kottu.jpeg';
import imgLogo from '../../assets/logo.png';
import svgDeco from '../../assets/deco.svg';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Restaurants = () => {
    return (
        <>
            <section id='allRestaurants'>
                <TitleTemplate title="nos restaurants" />
                <div>
                    <RestaurantVitrine place="Jonction" img={imgExterior} link="/" />
                    <RestaurantVitrine place="Prairie" img={imgExterior} link="/" />
                </div>
            </section>

            <section id='galerie'>
                <TitleTemplate title="galerie" />
                <Carousel className='galleryBox'showStatus={false} transitionTime={2000} showArrows={true} showThumbs={false} autoPlay={true} interval={3000} infiniteLoop={true} >
                    <div>
                        <img src={test01} alt="Exterior" />
                    </div>
                    <div>
                        <img src={test02} alt="Interior" />
                    </div>
                    <div>
                        <img src={test03} alt="Kottu" />
                    </div>
                </Carousel>
            </section>
        </>
    );
}

const RestaurantVitrine = (props) => {
    return (
        <div className='oneRestaurantVitrine'>
            <h2>{props.place}</h2>
            <img src={props.img} alt="image restaurant" className='vitrineImg' />
            <a href={props.link} className='btnVitrine'>Voir en détails</a>
        </div>
    )
}

const TitleTemplate = (props) => {
    return (
        <div className='titleTemplate'>
            <h2>{props.title}</h2>
            <img src={svgDeco} alt="" className='decoForTitle' />
        </div>
    )
}

export default Restaurants;
