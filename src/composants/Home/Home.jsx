import React, { useEffect } from 'react';
import imgExterior from '../../assets/exterieur.jpg';
import imgInterior from '../../assets/interieur.jpg';
import imgKottu from '../../assets/kottu.jpeg';
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
                    <BestCard img={imgKottu} name="Dosai" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <BestCard img={imgKottu} name="Dosai" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <BestCard img={imgKottu} name="Dosai" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                </div>
            </section>

            <section id='aboutUs'>
                <TitleTemplate title="à propos de nous" />
                <div className='aboutUsParagraph'>
                    <p>
                        Bienvenue à notre restaurant exotique, un joyau culinaire situé au cœur de Genève, où Saveurs de l'Inde et du Sri Lanka fusionnent pour créer une expérience gastronomique unique. Plongez dans la richesse des saveurs indiennes et sri lankaises dans un cadre chaleureux et accueillant.
                        Notre menu, une célébration des délices de l'Inde et du Sri Lanka, propose une variété de plats alléchants, allant des classiques indiens tels que le poulet tandoori et les currys aromatiques aux spécialités sri lankaises telles que le Kottu Rotti, le dosa croustillant et les idlis moelleux. Chaque plat est préparé avec soin par nos chefs talentueux, qui utilisent des ingrédients authentiques pour capturer l'essence même de ces cuisines exotiques.
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
