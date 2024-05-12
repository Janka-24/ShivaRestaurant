import React, { useEffect } from 'react';
import imgExterior from '../../assets/dash.jpeg';
import imgInterior from '../../assets/indoor.jpeg';
import imgDosa from '../../assets/dosa.jpg';
import imgKottu from '../../assets/kottu.png';
import imgFried from '../../assets/fried.jpg';
import imgLogo from '../../assets/logo.png';
import Plx from "react-plx";
import AOS from 'aos';
import 'aos/dist/aos.css';
import TitleTemplate from '../Title';
import { motion } from "framer-motion";

const landingImgPlx = [
    {
        start: 0,
        end: 900,
        duration: 900,
        properties: [{ startValue: 1, endValue: 50, property: "translateX" }],
    },
];

const Home = () => {
    useEffect(() => {
        document.title = "Shiva";
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <>
            <section id='landingDiv'>
                <div>
                    <motion.h1 initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className='princTitle'>shiva</motion.h1>
                    <motion.h2 initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }} className='princTitle'>restaurant</motion.h2>
                </div>

                <Plx id='arrt' className="MyAwesomeParallax" parallaxData={landingImgPlx}>
                    <img src={imgExterior} alt="" loading="lazy" id='big-img-landing' />
                    <img src={imgInterior} alt="" loading="lazy" id='small-img-landing' />
                </Plx>

                <motion.img initial={{ opacity: 0, rotateY: 90 }} animate={{ opacity: 1, rotateY: 0 }} transition={{ delay: 0.4, duration: 1.2 }} src={imgLogo} id='landImg_logo' />
            </section>

            <section id='bestMenu'>
                <TitleTemplate title="nos spécialités" />
                <div>
                    <BestCard img={imgDosa} name="Dosa" description="Le dosa est une sorte de crêpe croustillante à base de lentilles et de riz." />
                    <BestCard img={imgKottu} name="Kottu" description="Galettes de pain indiennes coupés en petits morceaux et mélangés avec des oeufs, légumes et viande de votre choix." />
                    <BestCard img={imgFried} name="Fried rice" description="Riz sauté aux légumes et viande de votre choix." />
                </div>
            </section>

            <section id='aboutUs'>
                <TitleTemplate title="à propos de nous" />
                <div className='aboutUsParagraph'>
                    <p>
                        Bienvenue dans le premier restaurant sri lankais et indien du Sud à offrir des dosas à Genève! Pour découvrir de nouveaux plats authentiques et vous immerger dans une autre culture à travers la nourriture nous vous proposons des plats tels que les thalis, biryanis, kotthu parotta et plus encore!
                        Ayant commencé à proposer de la nourriture tamile dans le Shiva Restaurant de la jonction en 2012 nous avons eu le plaisir de l’étendre dans le restaurant de la Servette en 2019. Les plats sont préparés avec amour, de manière authentique pour que vous vous sentiez comme chez vous!
                        *options vegan et viande halal
                    </p>
                </div>
            </section>
        </>
    );
}

const BestCard = (props) => (
    <div data-aos="fade-up" className='card'>
        <img src={props.img} alt="" className='card-img' />
        <div>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
        </div>
    </div>
);

export default Home;
