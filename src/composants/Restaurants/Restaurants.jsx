import React, { useEffect, useRef } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Jonction from '../../assets/outdoor.jpeg';
import Servette from '../../assets/outdoor.jpeg';
import board from '../../assets/board.jpeg';
import fun from '../../assets/fun.jpeg';
import all from '../../assets/carousel_anim.gif';
import god from '../../assets/god.jpeg';
import out from '../../assets/out.jpeg';
import servette from '../../assets/servette.jpeg';
import TitleTemplate from '../Title';
import { motion, useInView, useAnimation } from 'framer-motion';

const Restaurants = () => {
    useEffect(() => {
        document.title = "Restaurants";
    }, []);
    return (
        <>
            <section id='allRestaurants'>
                <TitleTemplate title="nos restaurants" />
                <div>
                    <RestaurantVitrine place="Jonction" img={Jonction} link="/map" />
                    <RestaurantVitrine place="Servette" img={Servette} link="/map" />
                </div>

                <div className='vitrineResto'>
                    <RestaurantVitrinePhone place="Jonction" img={Jonction} link="/map" />
                    <RestaurantVitrinePhone place="Servette" img={Servette} link="/map" />
                </div>
            </section>

            <section id='galerie'>
                <TitleTemplate title="galerie" />

                <Carousel className='galleryBox exclude-gallery' showStatus={false} transitionTime={1000} showArrows={true} showThumbs={false} autoPlay={true} interval={3000} infiniteLoop={true} >
                    <div>
                        <img className='fGlr' src={all} alt="Exterior" loading="lazy" />
                    </div>
                    <div>
                        <img className='fGlr' src={servette} alt="Exterior" loading="lazy" />
                    </div>
                    <div>
                        <img className='fGlr' src={out} alt="Exterior" loading="lazy" />
                    </div>
                    <div>
                        <img className='fGlr' src={board} alt="Exterior" loading="lazy" />
                    </div>
                    <div>
                        <img className='fGlr' src={fun} alt="Interior" loading="lazy" />
                    </div>
                    <div>
                        <img className='fGlr' src={god} alt="Kottu" loading="lazy" />
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
            <img src={props.img} alt="image restaurant" className='vitrineImg' loading="lazy" />
            <a href={props.link} className='btnVitrine'>Voir en détails</a>
        </div>
    )
}

const RestaurantVitrinePhone = (props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const titleControl = useAnimation();
    const buttonControl = useAnimation();

    useEffect(() => {
        if (isInView) {
            titleControl.start("apres");
            buttonControl.start("apres");
        }
    }, [isInView]);

    return (
        <div className='oneRestaurantVitrinePhone' ref={ref}>
            <motion.div
                variants={{
                    avant: { opacity: 0, y: 200 },
                    apres: { opacity: 1, y: 0 },
                }}
                initial={"avant"}
                animate={titleControl}
                transition={{ duration: 0.5, delay: 0.25 }}
            >
                <img src={props.img} alt="image restaurant" className='vitrineImg' loading="lazy" />
                <div className='articleBoard'>
                    <motion.div
                        variants={{
                            avant: { opacity: 0, y: 50 },
                            apres: { opacity: 1, y: 0 },
                        }}
                        initial={"avant"}
                        animate={titleControl}
                        transition={{ duration: 0.5, delay: 1.0 }}
                    >
                        <h2>{props.place}</h2>
                    </motion.div>
                    <motion.div
                        variants={{
                            avant: { opacity: 0, y: 50 },
                            apres: { opacity: 1, y: 0 },
                        }}
                        initial={"avant"}
                        animate={buttonControl}
                        transition={{ duration: 0.5, delay: 1.0 }}
                    >
                        <a href={props.link} className='btnVitrine'>Voir en détails</a>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}

export default Restaurants;
