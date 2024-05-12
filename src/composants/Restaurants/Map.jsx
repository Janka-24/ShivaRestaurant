import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import TitleTemplate from '../Title';
import fck from '../../assets/fck.png'
import inst from '../../assets/inst.png'
import tik from '../../assets/tik.png'
import mail from '../../assets/mail.svg'
import phone from '../../assets/phone.svg'

const locations = [
    {
        title: "Servette",
        address: "Rue Tronchin 14, 1202 Genève",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11044.2713735474!2d6.108605047376533!3d46.20910537506288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c65b0d93b7f9b%3A0x461f541b0849b969!2sShiva%20Restaurant!5e0!3m2!1sfr!2sch!4v1711441744690!5m2!1sfr!2sch",
        timetable: [
            { day: "Lundi", hours: "07h00 ~ 21h00" },
            { day: "Mardi", hours: "07h00 ~ 21h00" },
            { day: "Mercredi", hours: "07h00 ~ 21h00" },
            { day: "Jeudi", hours: "07h00 ~ 21h00" },
            { day: "Vendredi", hours: "07h00 ~ 21h00" },
            { day: "Samedi", hours: "07h00 ~ 21h00" },
            { day: "Dimanche", hours: "07h00 ~ 21h00" }
        ],
        phone: "022 557 09 31"
    },
    {
        title: "Jonction",
        address: "Rue du Vélodrome 14, 1205 Genève",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11044.2713735474!2d6.108605047376533!3d46.20910537506288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c64d2e6a42beb%3A0x32a0a8306906b3b!2sShiva%20Restaurant%20Jonction!5e0!3m2!1sfr!2sch!4v1711443527118!5m2!1sfr!2sch",
        timetable: [
            { day: "Lundi", hours: "07h00 ~ 21h00" },
            { day: "Mardi", hours: "07h00 ~ 21h00" },
            { day: "Mercredi", hours: "07h00 ~ 21h00" },
            { day: "Jeudi", hours: "07h00 ~ 21h00" },
            { day: "Vendredi", hours: "07h00 ~ 21h00" },
            { day: "Samedi", hours: "07h00 ~ 21h00" },
            { day: "Dimanche", hours: "07h00 ~ 21h00" }
        ],
        phone: "022 321 90 46"
    }
];

const Map = () => {
    useEffect(() => {
        document.title = "Trouvé !";
    }, []);

    return (
        <>
            {locations.map((location, index) => (
                <section key={index} className='mapSec'>
                    <TitleTemplate title={location.title} />
                    <motion.div className='resaux' key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>

                        <div className='oneResaux'>
                            <img src={fck} alt="facebookLogo" />
                            <a href="https://www.facebook.com/Shivarestaurantgeneva/"> @Shiva Restaurant</a>
                        </div>
                        <div className='oneResaux'>
                            <img src={inst} alt="instaLogo" />
                            <a href="https://www.instagram.com/shiva_restaurant/"> @Shiva Restaurant</a>
                        </div>
                        <div className='oneResaux'>
                            <img src={tik} alt="tiktokLogo" />
                            <a href="https://www.tiktok.com/@shiva_restaurant"> @Shiva Restaurant</a>
                        </div>

                        <div className='oneResaux'>
                            <img src={phone} alt="tiktokLogo" />
                            <p>{location.phone}</p>
                        </div>

                        <div className='oneResaux' id='fMail'>
                            <img src={mail} alt="tiktokLogo" />
                            <p>shivageneva@gmail.com</p>
                        </div>
                    </motion.div>

                    <div className='container'>
                        <div id="timeTable">
                            <h2>Horaire:</h2>
                            <div>
                                {location.timetable.map((item, index) => (
                                    <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                                        <p>{item.day}:</p> <span>{item.hours}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div id="mapDiv">
                            <iframe id='mapPra' src={location.mapSrc} style={{ border: '0' }} loading="lazy"></iframe>
                            <div>
                                <p>{location.address}</p>
                                <a href={`https://www.google.com/maps/place/${encodeURIComponent(location.address)}`} className='btnMap btnVitrine'>S'y rendre</a>
                            </div>
                        </div>
                    </div>
                </section>
            ))}
        </>
    );
}

export default Map;
