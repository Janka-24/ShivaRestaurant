// import React, { useEffect } from 'react';
// import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Styles pour le carousel
// import imgKottu from '../../assets/kottu.jpeg';
// import svgDeco from '../../assets/deco.svg'; import { isMobile } from 'react-device-detect';
// import 'aos/dist/aos.css';


// const Menu = () => {

//     return (
//         <>
//             <section id='menuSec'>
//                 <TitleTemplate title="Menu" />
//                 <div id="menuContainer">
//                     <MenuCard img={imgKottu} name="Dosai" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans"></MenuCard>
//                     <MenuCard img={imgKottu} name="Dosai" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans"></MenuCard>
//                     <MenuCard img={imgKottu} name="Dosai" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans"></MenuCard>
//                     <MenuCard img={imgKottu} name="Dosai" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans"></MenuCard>
//                     <MenuCard img={imgKottu} name="Dosai" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans"></MenuCard>
//                     <MenuCard img={imgKottu} name="Dosai" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans"></MenuCard>
//                     <MenuCard img={imgKottu} name="Dosai" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans"></MenuCard>
//                     <MenuCard img={imgKottu} name="Dosai" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans"></MenuCard>
//                     <MenuCard img={imgKottu} name="Dosai" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans"></MenuCard>
//                     <MenuCard img={imgKottu} name="Dosai" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans"></MenuCard>
//                     <MenuCard img={imgKottu} name="Dosai" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans"></MenuCard>
//                     <MenuCard img={imgKottu} name="Dosai" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans"></MenuCard>
//                     <MenuCard img={imgKottu} name="Dosai" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans"></MenuCard>
//                     <MenuCard img={imgKottu} name="Dosai" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans"></MenuCard>
//                     <MenuCard img={imgKottu} name="Dosai" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans"></MenuCard>
//                     <MenuCard img={imgKottu} name="Dosai" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans"></MenuCard>
//                     <MenuCard img={imgKottu} name="Dosai" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans"></MenuCard>
//                     <MenuCard img={imgKottu} name="Dosai" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans"></MenuCard>
//                     <MenuCard img={imgKottu} name="Dosai" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans"></MenuCard>
//                     <MenuCard img={imgKottu} name="Dosai" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans"></MenuCard>
//                     <MenuCard img={imgKottu} name="Dosai" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans"></MenuCard>
//                     <MenuCard img={imgKottu} name="Dosai" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans"></MenuCard>
//                     <MenuCard img={imgKottu} name="Dosai" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans"></MenuCard>
//                     <MenuCard img={imgKottu} name="Dosai" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans"></MenuCard>
//                     <MenuCard img={imgKottu} name="Dosai" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans"></MenuCard>
//                     <MenuCard img={imgKottu} name="Dosai" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans"></MenuCard>
//                     <MenuCard img={imgKottu} name="Dosai" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans"></MenuCard>
//                     <MenuCard img={imgKottu} name="Dosai" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans"></MenuCard>
//                     <MenuCard img={imgKottu} name="Dosai" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans"></MenuCard>
//                     <MenuCard img={imgKottu} name="Dosai" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans"></MenuCard>
//                     <MenuCard img={imgKottu} name="Dosai" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans"></MenuCard>
//                     <MenuCard img={imgKottu} name="Dosai" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans"></MenuCard>
//                     <MenuCard img={imgKottu} name="Dosai" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans"></MenuCard>
//                     <MenuCard img={imgKottu} name="Dosai" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans"></MenuCard>
//                     <MenuCard img={imgKottu} name="Dosai" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans"></MenuCard>
//                     <MenuCard img={imgKottu} name="Dosai" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans"></MenuCard>
//                     <MenuCard img={imgKottu} name="Dosai" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans"></MenuCard>
//                     <MenuCard img={imgKottu} name="Dosai" description="Le Lorem Ipsum est simplement du faux texte employé dans Le Lorem Ipsum est simplement du faux texte employé dans"></MenuCard>
//                 </div>
//             </section>
//         </>
//     );
// }

// const MenuCard = (props) => {

//     return (
//         <div className='menuCard'>
//             <img src={props.img} alt="" className='menu-card-img' />
//             <div className='menu-card-text'>
//                 <h3>{props.name}</h3>
//                 <p>{props.description}</p>
//             </div>
//         </div>
//     );
// }


// const TitleTemplate = (props) => {
//     return (
//         <div className='titleTemplate'>
//             <h2>{props.title}</h2>
//             <img src={svgDeco} alt="" className='decoForTitle' />
//         </div>
//     )
// }
// export default Menu;
