import { React, useEffect, useRef } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import imgExterior from '../../assets/exterieur.jpg';
import test01 from '../../assets/test01.jpeg';
import test02 from '../../assets/test02.webp';
import test03 from '../../assets/test03.jpeg';
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
                    <RestaurantVitrine place="Jonction" img={imgExterior} link="/map" />
                    <RestaurantVitrine place="Servette" img={imgExterior} link="/map" />
                </div>

                <div className='vitrineResto'>
                    <RestaurantVitrinePhone place="Jonction" img={imgExterior} link="/map" />
                    <RestaurantVitrinePhone place="Servette" img={imgExterior} link="/map" />
                </div>
            </section>

            <section id='galerie'>
                <TitleTemplate title="galerie" />
                <Carousel className='galleryBox exclude-gallery' showStatus={false} transitionTime={1500} showArrows={true} showThumbs={false} autoPlay={true} interval={3000} infiniteLoop={true} >
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
                <img src={props.img} alt="image restaurant" className='vitrineImg' />
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
