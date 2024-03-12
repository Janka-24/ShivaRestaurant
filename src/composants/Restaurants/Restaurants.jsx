import React, { useEffect, useState } from 'react';
import imgExterior from '../../assets/exterieur.jpg';
import imgInterior from '../../assets/interieur.jpg';
import imgKottu from '../../assets/kottu.jpeg';
import imgLogo from '../../assets/logo.png';
import svgDeco from '../../assets/deco.svg';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Restaurants = () => {
    return (
        <>
            <section id='allRestaurants'>
                <TitleTemplate title="nos restaurants" />
                <div>
                    <RestaurantVitrine place="Jonction" img={imgExterior} link="/" />
                    <RestaurantVitrine place="Prairie" img={imgExterior} link="/" />
                </div>
            </section>

            <section id='galerie'>
                <TitleTemplate title="galerie" />
                <Gallery />
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

const TitleTemplate = (props) => {
    return (
        <div className='titleTemplate'>
            <h2>{props.title}</h2>
            <img src={svgDeco} alt="" className='decoForTitle' />
        </div>
    )
}

function Gallery() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch(
                    "https://picsum.photos/v2/list?page=6&limit=35"
                );
                const data = await response.json();
                setImages(data);
            } catch (error) {
                console.error("Error fetching images:", error);
            }
        };

        fetchImages();
    }, []);

    return (
        <>
            <h1> Flexible Grid </h1>

            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
                <Masonry>
                    {images.map((image) => (
                        <img
                            key={image.id}  // Corrected from {"image.id"}
                            alt={image.author}
                            src={image.download_url}
                            style={{ display: "block", padding: "8px" }}
                        />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        </>
    );
}

export default Restaurants;
