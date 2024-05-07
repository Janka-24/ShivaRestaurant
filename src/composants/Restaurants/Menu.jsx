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


                    <div className="menuDiv">
                        <TitleMenu title="nos entrées" />

                        <div> <MenuCard
                            prix={2.50}
                            name="Samosa"
                            description="samosa aux légumes"
                        />
                            <MenuCard
                                prix={2.00}
                                name="Cutlet"
                                description="à base de thon"
                            />
                            <MenuCard
                                prix={3.00}
                                name="Roll"
                                description="Un rouleau généreusement garni d'agneau"
                            />
                            <MenuCard
                                prix={2.50}
                                name="Vadai"
                                description="à base de lentilles"
                            />
                            <MenuCard
                                prix={7.00}
                                name="Soupe aux légumes"
                                description=""
                            />
                            <MenuCard speciale={true} prix={8.00} name="OFFRE SPÉCIALE" description="Toutes nos entrées réunies en un seul plat ! Des samosas aux vadai, accompagnés d'une soupe aux légumes. Un festin complet en une seule commande" />
                        </div>

                    </div>
                    <div className="menuDiv">
                        <TitleMenu title="nos spécialités" />
                        <div>
                            <MenuCard
                                prix={4.50}
                                name="Lassi nature (salé)"
                                description=""
                            />
                            <MenuCard
                                prix={5.50}
                                name="Lassi à la mangue"
                                description=""
                            />
                            <MenuCard
                                prix={5.50}
                                name="Lassi au sucre"
                                description=""
                            />
                            <MenuCard
                                prix={5.50}
                                name="Rose milk"
                                description=""
                            />
                            <MenuCard
                                prix={4.50}
                                name="Chaï (masala tea)"
                                description=""
                            />
                            <MenuCard
                                prix={4.50}
                                name="Thé au lait"
                                description="Nido - milk powder"
                            />


                        </div>
                    </div>



                    <div className="menuDiv">
                        <TitleMenu title="nos plats" description="Tous les thalis contiennent du riz, manioc, daal (lentilles), épinards et papadam" />
                        <div>
                            <MenuCard prix={20.00} name="Thali végétarien" description="" />
                            <MenuCard prix={20.00} name="Thali poulet" description="" />
                            <MenuCard prix={20.00} name="Thali agneau" description="" />
                            <MenuCard prix={20.00} name="Thali poisson" description="" />
                            <MenuCard prix={18.00} name="Piddu" description="à base de farine de riz et de blé" />
                            <MenuCard prix={22.00} name="Fried rice" description="riz mélangé à du poulet, des œufs et des légumes " />
                            <MenuCard prix={18.00} name="Iddiyappam" description="à base de farine de riz et de blé" />
                            <MenuCard prix={15.00} name="Idlis" description="à base de lentilles et de riz" />
                            <MenuCard speciale={true} prix={35.00} name="Grand Thali" description="rasam, yaourt, sambar, pickles indien + poisson frit/agneau/poulet ou pommes de terre frites" />
                            <MenuCard speciale={true} prix={10.00} name="Shiva's special" description=" Assiette de dosa, 3 idlis, 2 vadais, masala, kesar, sambar, raita, chutney à la noix de coco" />
                        </div>
                    </div>

                    <div className="menuDiv">
                        <TitleMenu title="Dosa" description="crêpe indienne à base de lentilles et de riz" />
                        <div>
                            <MenuCard prix={15.00} name="2 sada dosas" description="" />
                            <MenuCard prix={18.00} name="Paper dosa" description="Ghee, Beurre, Fromage" />
                            <MenuCard prix={19.00} name="Masala dosa" description="Fourré aux pommes de terre" />
                            <MenuCard prix={20.00} name="Egg dosa" description="dosa aux œufs" />
                            <MenuCard prix={25.00} name="Everything dosa" description="masala, fromage, légumes" />
                        </div>
                    </div>



                    <div className="menuDiv">
                        <TitleMenu title="Kottu" description="tout les kottus contiennent des poireaux, carottes et du chou blanc (sauf végétarien contient des poivrons en plus)" />
                        <div>
                            <MenuCard prix={18.00} name="Kottu végétarien" description="" />
                            <MenuCard prix={19.00} name="Egg kottu" description="Kottu aux œufs " />
                            <MenuCard prix={20.00} name="Lamb kottu" description="Kottu aux agneau" />
                            <MenuCard prix={20.00} name="Chicken kottu" description="Kottu aux poulet" />
                            <MenuCard prix={25.00} name="Kottu mixte" description="Kottu aux poulet et à l'agneau" />

                        </div>
                    </div>
                    <div className="menuDiv">
                        <TitleMenu title="Biryani" />
                        <div>
                            <MenuCard prix={22.00} name="Biryani végétarien" description="" />
                            <MenuCard prix={25.00} name="Biryani au poulet" description="" />
                            <MenuCard prix={28.00} name="Biryani à l'agneau" description="" />



                        </div>

                    </div>
                    <div className="menuDiv">
                        <TitleMenu title="Suppléments / extras" />
                        <div>
                            <MenuCard prix={6.00} name="Rasam" description="Soupe préparée au coulis de tamarin, tomates, piments et d'autres épices" />
                            <MenuCard prix={6.00} name="Sambar" description="Soupe de légumes et de daal" />
                            <MenuCard prix={5.00} name="Coconut chutney" description="Condiment à base de noix de coco" />
                            <MenuCard prix={5.00} name="Riz" description="" />
                            <MenuCard prix={6.00} name="Daal (Lentilles)" description="" />
                            <MenuCard prix={8.00} name="Curry végétarien" description="" />
                            <MenuCard prix={10.00} name="Curry de poulet" description="" />
                            <MenuCard prix={15.00} name="Curry de poulet au beurre" description="" />
                            <MenuCard prix={13.00} name="Curry d'agneau" description="" />
                            <MenuCard prix={10.00} name="Curry de poisson" description="" />
                            <MenuCard prix={6.00} name="Omelette" description="" />

                        </div>
                    </div>

                    <div className="menuDiv">
                        <TitleMenu title="accompagnements" />

                        <div>
                            <MenuCard prix={3.00} name="Chapati" description="Pain indien" />
                            <MenuCard prix={3.50} name="Naan" description="Galette indienne" />
                            <MenuCard prix={4.00} name="Naan à l'ail (Garlic naan)" description="" />
                            <MenuCard prix={5.00} name="Appam" description=" Hoppers / Crêpe nature" />
                            <MenuCard prix={6.00} name="Appam" description="Sucré / Aux œufs" />
                        </div>
                    </div>
                    <div className="menuDiv">

                        <TitleMenu title="Desserts" />

                        <div>
                            <MenuCard prix={5.50} name="Payasam" description="" />
                            <MenuCard prix={5.00} name="Kesari" description="" />
                            <MenuCard prix={5.50} name="Gulab Jamun" description="" />
                            <MenuCard prix={5.00} name="Caramel pudding" description="lait, œufs" />
                            <MenuCard prix={6.00} name="Mousse de mangue" description="" />

                        </div>
                    </div>
                    <div className="menuDiv">
                        <TitleMenu title="apéritifs" />
                        <div>
                            <MenuCard prix={6.00} name="Martini blanc ou rouge 15% (1 dl)" description="" />
                            <MenuCard prix={6.00} name="Porto rouge 19% (1 dl)" description="" />
                            <MenuCard prix={3.50} name="Pastis 51 - Ricard 45% (2 cl)" description="" />
                            <MenuCard prix={6.50} name="Pastis 51 - Ricard 45% (4 cl)" description="" />
                            <MenuCard prix={7.90} name="Gin tonic 37.5% (2 cl)" description="" />
                            <MenuCard prix={7.00} name="Cognac 40% (1 dl)" description="" />
                            <MenuCard prix={7.00} name="Rhum 37.5% (2 cl)" description="" />
                            <MenuCard prix={7.00} name="Whisky Red Label 40% (2 cl)" description="" />
                            <MenuCard prix={7.00} name="Vodka 40% (2 cl)" description="" />
                            <MenuCard prix={7.00} name="Prosecco 11% (20 cl)" description="" />
                        </div>
                    </div>

                    <div className="menuDiv">
                        <TitleMenu title="Vins blancs" />
                        <div>
                            <MenuCard prix={3.50} name="Chasselas genevois 12% (1 dl)" description="" />
                            <MenuCard prix={3.50} name="La côte vaudois 12% (1 dl)" description="" />
                            <MenuCard prix={3.90} name="Kir (1 dl)" description="" />

                        </div>
                    </div>

                    <div className="menuDiv">
                        <TitleMenu title="Vins rouges" />
                        <div>
                            <MenuCard prix={3.50} name="Gamay 12.5% (1 dl)" description="" />
                            <MenuCard prix={3.50} name="Pinot noir 12.5% (1 dl)" description="" />
                            <MenuCard prix={3.50} name="Bordeaux 13% (1 dl)" description="" />
                            <MenuCard prix={3.50} name="Goron 12.9% (1 dl)" description="" />

                        </div>
                    </div>

                    <div className="menuDiv">
                        <TitleMenu title="rosés" />
                        <div>
                            <MenuCard prix={3.50} name="Gamay 13%" description="" />
                            <MenuCard prix={3.50} name="Provence 11.9%" description="" />
                            <MenuCard prix={3.50} name="Eil de perdix 12.9%" description="" />

                        </div>
                    </div>

                    <div className="menuDiv">
                        <TitleMenu title="bières" />
                        <div>
                            <MenuCard prix={3.50} name="Galopin (0.25 l)" description="" />
                            <MenuCard prix={3.70} name="Pression (0.30 l)" description="" />
                            <MenuCard prix={3.90} name="Monaco Panaché" description="" />
                            <MenuCard prix={5.00} name="Canette (0.5 l)" description="" />
                            <MenuCard prix={5.00} name="Kingfisher 4.8% (330 ml)" description="" />
                            <MenuCard prix={5.00} name="Cobra 4.8%" description="" />
                            <MenuCard prix={5.00} name="Lion 4.8% (330 ml)" description="" />
                        </div>
                    </div>

                    <div className="menuDiv">
                        <TitleMenu title="soft drink" />

                        <div>
                            <MenuCard prix={4.00} name="Coca-Cola (330 ml)" description="" />
                            <MenuCard prix={3.50} name="Schweppes (25 cl)" description="" />
                            <MenuCard prix={4.00} name="Thé froid (0.5 l)" description="" />
                            <MenuCard prix={3.50} name="Ginger beer soda (330 ml)" description="" />
                            <MenuCard prix={3.50} name="Eau de coco (330 ml)" description="" />
                            <MenuCard prix={3.50} name="Jus de fruit / Nectar Michel (20 cl)" description="" />
                            <MenuCard prix={4.00} name="Jus de pomme Fizzy (350 cl)" description="" />
                            <MenuCard prix={4.50} name="Fizzy (350 ml)" description="" />

                        </div>
                    </div>

                    <div className="menuDiv">
                        <TitleMenu title="autres" />
                        <div>
                            <MenuCard prix={3.50} name="Henniez gazeuse" description="" />
                            <MenuCard prix={3.50} name="Vals (330 cl)" description="" />
                            <MenuCard prix={3.50} name="Evian (330 cl)" description="" />
                            <MenuCard prix={3.00} name="Eau minérale" description="" />
                            <MenuCard prix={2.50} name="Verre de lait" description="" />
                            <MenuCard prix={2.50} name="Sirop" description="" />
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}
function TitleMenu(props) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const mainControl = useAnimation();
    useEffect(() => {
        if (isInView) {
            mainControl.start("apres");
        }
    }, [isInView]);

    return (
        <div className='TitleMenu' ref={ref}>
            <motion.div
                variants={{
                    avant: { opacity: 0, x: 200 },
                    apres: { opacity: 1, x: 0 },
                }}
                initial={"avant"}
                animate={mainControl}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <motion.h2
                    variants={{
                        avant: { opacity: 0 },
                        apres: { opacity: 1 },
                    }}
                    initial={"avant"}
                    animate={mainControl}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    {props.title}
                </motion.h2>
                <motion.p
                    variants={{
                        avant: { opacity: 0 },
                        apres: { opacity: 1 },
                    }}
                    initial={"avant"}
                    animate={mainControl}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    {props.description}
                </motion.p>
            </motion.div>
        </div>
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

    if (props.speciale === true) {
        return (

            <div className='menuCardSpecial' ref={ref}>
                <motion.div
                    variants={{
                        avant: { opacity: 0, x: 200 },
                        apres: { opacity: 1, x: 0 },
                    }}
                    initial={"avant"}
                    animate={mainControl}
                    transition={{ duration: 0.3, delay: 0.1 }}
                >
                    <div className='b1'>
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
                    <div className='b2'>
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
    } else {
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

}

export default Menu;
