import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Styles pour le carousel
import imgKottu from '../../assets/kottu.jpeg';
import imgLogo from '../../assets/logo.png';
import svgDeco from '../../assets/deco.svg';
import TitleTemplate from '../Title';
import { motion } from "framer-motion";

const Map = () => {
    return (
        <>
            <section className='mapSec'>
                <TitleTemplate title="Servette" />
                <div className='container'>
                    <div id="timeTable">
                        <h2>Horaire:</h2>
                        <div>
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                                <p>Lundi:</p> <span>07h00 ~ 21h00 </span>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                                <p>Lundi:</p> <span>07h00 ~ 21h00 </span>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                                <p>Lundi:</p> <span>07h00 ~ 21h00 </span>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                                <p>Lundi:</p> <span>07h00 ~ 21h00 </span>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                                <p>Lundi:</p> <span>07h00 ~ 21h00 </span>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                                <p>Lundi:</p> <span>07h00 ~ 21h00 </span>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                                <p>Lundi:</p> <span>07h00 ~ 21h00 </span>
                            </motion.div>
                        </div>
                    </div>


                    <div id="mapDiv">
                        <iframe id='mapPra' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11044.2713735474!2d6.108605047376533!3d46.20910537506288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c65b0d93b7f9b%3A0x461f541b0849b969!2sShiva%20Restaurant!5e0!3m2!1sfr!2sch!4v1711441744690!5m2!1sfr!2sch" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        <div>
                            <p>Rue Tronchin 14, 1202 Genève</p>
                            <a href={'https://www.google.com/maps/place/Shiva+Restaurant/@46.209958,6.134444,14z/data=!4m6!3m5!1s0x478c65b0d93b7f9b:0x461f541b0849b969!8m2!3d46.2099578!4d6.1344436!16s%2Fg%2F11fjzkdpk4?hl=fr&entry=ttu'} className='btnMap btnVitrine'>S'y rendre</a>
                        </div>
                    </div>
                </div>

            </section>


            <section className='mapSec'>
                <TitleTemplate title="Jonction" />
                <div className='container'>
                    <div id="timeTable">
                        <h2>Horaire:</h2>
                        <div>
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                                <p>Lundi:</p> <span>07h00 ~ 21h00 </span>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                                <p>Lundi:</p> <span>07h00 ~ 21h00 </span>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                                <p>Lundi:</p> <span>07h00 ~ 21h00 </span>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                                <p>Lundi:</p> <span>07h00 ~ 21h00 </span>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                                <p>Lundi:</p> <span>07h00 ~ 21h00 </span>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                                <p>Lundi:</p> <span>07h00 ~ 21h00 </span>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                                <p>Lundi:</p> <span>07h00 ~ 21h00 </span>
                            </motion.div>
                        </div>
                    </div>


                    <div id="mapDiv">
                        <iframe id='mapPra' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11044.2713735474!2d6.108605047376533!3d46.20910537506288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c64d2e6a42beb%3A0x32a0a8306906b3b!2sShiva%20Restaurant%20Jonction!5e0!3m2!1sfr!2sch!4v1711443527118!5m2!1sfr!2sch" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        <div>
                            <p>Rue du Vélodrome 14, 1205 Genève</p>
                            <a href={'https://maps.app.goo.gl/RTZmizRYNiuUYY669'} className='btnMap btnVitrine'>S'y rendre</a>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}

export default Map;
