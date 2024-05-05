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
                    <TitleTemplate title="nos entrées" />
                    <MenuCard prix={4.50} name="Lassi nature (salé)" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={5.50} name="Lassi à la mangue" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={5.50} name="Lassi au sucre" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={5.50} name="Rose milk" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={4.50} name="Chaï (masala tea)" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={4.50} name="Thé au lait (Nido - milk powder)" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />

                    <TitleTemplate title="nos entrées" />
                    <MenuCard prix={3.50} name="Samosa aux légumes" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={4.00} name="Cutlet (à base de thon / with tuna)" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={3.50} name="Roll (agneau / lamb)" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={4.00} name="Vadai (à base de lentilles)" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={2.50} name="Samosa" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={2.00} name="Cutlet" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={3.00} name="Roll" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={2.50} name="Vadai" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={8.00} name="Soupe aux légumes" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />

                    <MenuCard prix={7.00} name="OFFRE SPÉCIALE (UN DE CHAQUE)" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />


                    <TitleTemplate title="nos plats" />
                    <MenuCard prix={35.00} name="Thali végétarien" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={20.00} name="Thali poulet" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={20.00} name="Thali agneau" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={20.00} name="Thali poisson" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={25.00} name="Grand Thali" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />


                    <TitleTemplate title="Dosa" />
                    <MenuCard prix={19.00} name="Dosas: 2 sada dosas" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={20.00} name="Paper dosa" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={20.00} name="Ghee / Beurre (Butter) / Fromage (Cheese) paper dosa" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={20.00} name="Masala dosa (Fourré aux pommes de terre)" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={25.00} name="Dosas aux œufs (Egg dosa)" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={18.00} name="Everything dosa (Masala, fromage, légumes)" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />


                    <MenuCard prix={15.00} name="Idlis (à base de lentilles et de riz)" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />

                    <TitleTemplate title="Kottu" />
                    <MenuCard prix={18.00} name="Kottu végétarien" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={19.00} name="Kottu aux œufs (Egg kottu)" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={20.00} name="Kottu agneau (Lamb kottu)" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={20.00} name="Kottu au poulet (Chicken kottu)" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={25.00} name="Kottu mixte (Poulet + Agneau)" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />

                    <div className="biryani">
                        <TitleTemplate title="Biryani" />
                        <MenuCard prix={18.00} name="Biryani végétarien" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                        <MenuCard prix={18.00} name="Biryani au poulet" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                        <MenuCard prix={22.00} name="Biryani au poulet" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                        <MenuCard prix={22.00} name="Biryani au poisson" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                        <MenuCard prix={25.00} name="Biryani au poisson" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                        <MenuCard prix={22.00} name="Biryani à l'agneau" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                        <MenuCard prix={25.00} name="Biryani à l'agneau" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                        <MenuCard prix={28.00} name="Biryani à l'agneau" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    </div>



                    <MenuCard prix={15.00} name="Piddu" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={8.00} name="Fried rice" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={10.00} name="Iddiyappam (à base de farine de riz et de blé)" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={13.00} name="Iddiyappam (à base de farine de riz et de blé)" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={10.00} name="Shiva's special: Assiette de dosa, 3 idlis, 2 vadais, masala, kesar, sambar, raita, chutney à la noix de coco" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />

                    <TitleTemplate title="Suppléments / extras" />
                    <MenuCard prix={15.00} name="Rasam (Soupe préparée au coulis de tamarin, tomates, piments et d'autres épices)" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={8.00} name="Sambar (Soupe de légumes et de daal)" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={10.00} name="Coconut chutney (Condiment à base de noix de coco)" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={13.00} name="Riz" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={10.00} name="Daal (Lentilles)" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={6.00} name="Curry végétarien" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={6.00} name="Curry de poulet" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={5.00} name="Curry de poulet au beurre" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={5.00} name="Curry d'agneau" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={6.00} name="Curry de poisson" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={18.00} name="Omelette" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />


                    <TitleTemplate title="accompagnements" />
                    <MenuCard prix={3.00} name="Chapati (Pain indien)" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={3.50} name="Naan (Galette indienne)" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={4.00} name="Naan à l'ail (Garlic naan)" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={5.00} name="Appam - Hoppers (Crêpe - nature)" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={6.00} name="Appam (Sucré / Aux œufs)" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />


                    <TitleTemplate title="Desserts" />
                    <MenuCard prix={5.50} name="Payasam" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={5.50} name="Kesari" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={5.50} name="Gulab Jamun (Sphères de lait frit)" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={5.50} name="Laddu (Boule sucrée)" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={5.50} name="Halwa" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={5.50} name="Jelabi" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={5.00} name="Caramel pudding (Lait / Eggs)" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={6.00} name="Mousse de mangue (Mango mousse)" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={6.00} name="Apéritifs" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />

                    <TitleTemplate title="apéritifs" />
                    <MenuCard prix={6.00} name="Martini blanc ou rouge 15% (1 dl)" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={6.00} name="Porto rouge 19% (1 dl)" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={3.50} name="Pastis 51 - Ricard 45% (2 cl)" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={6.50} name="Pastis 51 - Ricard 45% (4 cl)" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={7.90} name="Gin tonic 37.5% (2 cl)" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={7.00} name="Cognac 40% (1 dl)" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={7.00} name="Rhum 37.5% (2 cl)" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={7.00} name="Whisky Red Label 40% (2 cl)" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={7.00} name="Vodka 40% (2 cl)" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={7.00} name="Prosecco 11% (20 cl)" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />


                    <TitleTemplate title="Vins blancs" />
                    <MenuCard prix={3.50} name="Chasselas genevois 12% (1 dl)" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={3.50} name="La côte vaudois 12% (1 dl)" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={3.90} name="Kir (1 dl)" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />

                    <TitleTemplate title="Vins rouges" />
                    <MenuCard prix={3.50} name="Gamay 12.5% (1 dl)" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={3.50} name="Pinot noir 12.5% (1 dl)" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={3.50} name="Bordeaux 13% (1 dl)" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={3.50} name="Goron 12.9% (1 dl)" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />

                    <TitleTemplate title="rosés" />
                    <MenuCard prix={3.50} name="Gamay 13%" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={3.90} name="Provence 11.9%" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={3.50} name="Eil de perdix 12.9%" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />

                    <TitleTemplate title="bières" />
                    <MenuCard prix={3.50} name="Galopin (0.25 l)" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={3.50} name="Pression (0.30 l)" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={3.50} name="Monaco Panaché" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={3.50} name="Canette (0.5 l)" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={3.50} name="Kingfisher 4.8% (330 ml)" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={3.50} name="Cobra 4.8%" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={3.70} name="Lion 4.8% (330 ml)" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />


                    <TitleTemplate title="soft drink" />
                    <MenuCard prix={5.00} name="Lion 4.8% (330 ml)" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={4.00} name="Coca-Cola (330 ml)" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={3.50} name="Schweppes (25 cl)" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={4.00} name="Thé froid (0.5 l)" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={3.50} name="Ginger beer soda (330 ml)" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={3.50} name="Eau de coco (330 ml)" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={3.50} name="Jus de fruit / Nectar Michel (20 cl)" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={4.00} name="Jus de pomme Fizzy (350 cl)" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={4.00} name="Fizzy (350 ml)" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />

                    <TitleTemplate title="autres" />
                    <MenuCard prix={3.50} name="Henniez gazeuse" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={3.50} name="Vals (330 cl)" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={3.50} name="Evian (330 cl)" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={3.00} name="Eau minérale" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={2.50} name="Verre de lait" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                    <MenuCard prix={2.50} name="Sirop" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans" />
                </div>
            </section>
        </>
    );
}

const TitleForMenu = (props) => {
    return (
        <div className='titleForMenuTemplate'>
            &#9733;<h2>{props.title}</h2>&#9733;
        </div>
    )
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
