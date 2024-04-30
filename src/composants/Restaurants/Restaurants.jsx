import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import imgExterior from '../../assets/exterieur.jpg';
import test01 from '../../assets/test01.jpeg';
import test02 from '../../assets/test02.webp';
import test03 from '../../assets/test03.jpeg';
import svgDeco from '../../assets/deco.svg';
import TitleTemplate from '../Title';

const Restaurants = () => {
    return (
        <>
            <section id='allRestaurants'>
                <TitleTemplate title="nos restaurants" />
                <div>
                    <RestaurantVitrine place="Jonction" img={imgExterior} link="/map" />
                    <RestaurantVitrine place="Servette" img={imgExterior} link="/map" />
                </div>

                <div>
                    <RestaurantVitrinePhone place="Jonction" img={imgExterior} link="/map" />
                    <RestaurantVitrinePhone place="Servette" img={imgExterior} link="/map" />
                </div>
            </section>

            <section id='galerie'>
                <TitleTemplate title="galerie" />
                <Carousel className='galleryBox' showStatus={false} transitionTime={2000} showArrows={true} showThumbs={false} autoPlay={true} interval={3000} infiniteLoop={true} >
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
const RestaurantVitrinePhone = (props) => {
    return (
        <div className='oneRestaurantVitrinePhone'>
            <div>

                <h2>{props.place}</h2>
                <a href={props.link} className='btnVitrine'>Voir en détails</a>
            </div>
            <img src={props.img} alt="image restaurant" className='vitrineImg' />

        </div>
    )
}

export default Restaurants;
