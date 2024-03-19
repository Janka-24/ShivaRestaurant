import React from 'react';
import imgExterior from '../../assets/exterieur.jpg';
import imgInterior from '../../assets/interieur.jpg';
import imgKottu from '../../assets/kottu.jpeg';
import imgLogo from '../../assets/logo.png';
import svgDeco from '../../assets/deco.svg';
import Plx from "react-plx";


// Table pour effet
const landingImgPlx = [
    {
        start: 0,
        end: 900,
        duration: 900,
        properties: [
            {
                startValue: 1,
                endValue: 50,
                property: "translateX",
            },
        ],
    },
];

const Home = () => {
    return (
        <>
            <section id='landingDiv'>
                <div >
                    <h1 className='princTitle'>shiva </h1>
                    <h2 className='princTitle'>restaurant</h2>
                </div>

                <Plx className="MyAwesomeParallax" parallaxData={landingImgPlx}>
                    <img src={imgExterior} alt="" loading="lazy" id='big-img-landing' />
                    <img src={imgInterior} alt="" loading="lazy" id='small-img-landing' />
                </Plx>
            </section>

            <section id='bestMenu'>
                <TitleTemplate title="nos meilleurs plats"/>
                <div>
                    <BestCard img={imgKottu} name="Dosai" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans"></BestCard>
                    <BestCard img={imgKottu} name="Dosai" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans"></BestCard>
                    <BestCard img={imgKottu} name="Dosai" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans"></BestCard>
                </div>
            </section>

            <section id='aboutUs'>
                <TitleTemplate title="about us" />
                <div className='aboutUsParagraph'>
                    <p>
                        Bienvenue à notre restaurant exotique, un joyau culinaire situé au cœur de Genève, où Saveurs de l'Inde et du Sri Lanka fusionnent pour créer une expérience gastronomique unique. Plongez dans la richesse des saveurs indiennes et sri lankaises dans un cadre chaleureux et accueillant.
                        Notre menu, une célébration des délices de l'Inde et du Sri Lanka, propose une variété de plats alléchants, allant des classiques indiens tels que le poulet tandoori et les currys aromatiques aux spécialités sri lankaises telles que le Kottu Rotti, le dosa croustillant et les idlis moelleux. Chaque plat est préparé avec soin par nos chefs talentueux, qui utilisent des ingrédients authentiques pour capturer l'essence même de ces cuisines exotiques.

                        L'ambiance de notre restaurant est imprégnée d'une hospitalité chaleureuse, créant l'endroit idéal pour savourer des repas en famille, entre amis ou pour célébrer des moments spéciaux. Nous sommes fiers de vous offrir une expérience culinaire qui transcende les frontières, tout en vous transportant dans un voyage de saveurs exotiques à chaque bouchée. Venez nous rejoindre pour une aventure gustative inoubliable à Genève.
                    </p>

                    <img src={imgLogo} alt="" srcset="" />

                    <p>
                        Citation: "fsdfdsjfskhjfjkhhjgfksdjhfjdkshjfdhgljkghfdjhgjlk dh ghdfjghk jgh jhd jghdf"
                    </p>
                </div>
            </section >
        </>
    );
}

const TitleTemplate = (props) => {
    return (<div className='titleTemplate'>
        <h2>{props.title}</h2>
        <img src={svgDeco} alt="" className='decoForTitle' />
    </div>)
}

const BestCard = (props) => {
    return (<div className='card'>
        <img src={props.img} alt="" className='card-img' />
        <div>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
        </div>
    </div>)
}


export default Home;
