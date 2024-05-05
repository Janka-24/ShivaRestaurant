import React, { useEffect, useRef } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'aos/dist/aos.css';
import TitleTemplate from '../Title';
import { motion, useInView, useAnimation } from 'framer-motion';


const Menu = () => {
    useEffect(() => {
        document.title = "Menu";
    }, []);
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

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const mainControl = useAnimation();
    useEffect(() => {
        if (isInView) {
            mainControl.start("apres");
        }
    }, [isInView]);

    return (
        <div className='menuCard' ref={ref}>
            <motion.div
                variants={{
                    avant: { opacity: 0, x: 200 },
                    apres: { opacity: 1, x: 0 },
                }}
                initial={"avant"}
                animate={mainControl}
                transition={{ duration: 0.3, delay: 0.1 }}
            >
                <div className='c1'>
                    <motion.h3
                        variants={{
                            avant: { opacity: 0 },
                            apres: { opacity: 1 },
                        }}
                        initial={"avant"}
                        animate={mainControl}
                        transition={{ duration: 0.3, delay: 0.2 }}
                    >
                        <span>{props.name}</span>
                    </motion.h3>
                    <motion.p
                        variants={{
                            avant: { opacity: 0 },
                            apres: { opacity: 1 },
                        }}
                        initial={"avant"}
                        animate={mainControl}
                        transition={{ duration: 0.3, delay: 0.3 }}
                    >
                        {props.description}
                    </motion.p>
                </div>
                <div className='c2'>
                    <motion.p
                        variants={{
                            avant: { opacity: 0 },
                            apres: { opacity: 1 },
                        }}
                        initial={"avant"}
                        animate={mainControl}
                        transition={{ duration: 0.3, delay: 0.4 }}
                    >
                        {props.prix} .-
                    </motion.p>
                </div>
            </motion.div>
        </div>
    );
}

export default Menu;
