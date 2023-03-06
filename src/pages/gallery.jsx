import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import hotelImg1 from '../../public/img/team-1.jpg';
import hotelImg2 from '../../public/img/team-2.jpg';
import hotelImg3 from '../../public/img/team-3.jpg';
import beachImg1 from '../../public/img/team-1.jpg';
import beachImg2 from '../../public/img/team-2.jpg';
import beachImg3 from '../../public/img/team-3.jpg';
import poolImg1 from '../../public/img/team-1.jpg';
import poolImg2 from '../../public/img/team-2.jpg';
import poolImg3 from '../../public/img/team-3.jpg';

export const Gallery = () => {
    const images = [
        {
            id: 1,
            src: hotelImg1,
            alt: 'Habitación con vista al mar',
            desc: 'Habitación con vista al mar',
        },
        {
            id: 2,
            src: beachImg1,
            alt: 'Playa de arena blanca',
            desc: 'Playa de arena blanca',
        },
        {
            id: 3,
            src: poolImg1,
            alt: 'Piscina con tumbonas',
            desc: 'Piscina con tumbonas',
        },
        {
            id: 4,
            src: hotelImg2,
            alt: 'Habitación de lujo con jacuzzi',
            desc: 'Habitación de lujo con jacuzzi',
        },
        {
            id: 5,
            src: beachImg2,
            alt: 'Vista panorámica del mar',
            desc: 'Vista panorámica del mar',
        },
        {
            id: 6,
            src: poolImg2,
            alt: 'Piscina con vista al mar',
            desc: 'Piscina con vista al mar',
        },
        {
            id: 7,
            src: hotelImg3,
            alt: 'Habitación doble con balcón',
            desc: 'Habitación doble con balcón',
        },
        {
            id: 8,
            src: beachImg3,
            alt: 'Actividades acuáticas en la playa',
            desc: 'Actividades acuáticas en la playa',
        },
        {
            id: 9,
            src: poolImg3,
            alt: 'Piscina con bar en la piscina',
            desc: 'Piscina con bar en la piscina',
        },
    ];
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <section id="gallery" className="px-8 py-20 mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Galería de fotos</h2>
            <Slider {...settings}>
                {images.map((image) => (
                    <div key={image.id}>
                        <img src={image.src} alt={image.alt} className="mx-auto w-full" />
                        <p className="text-center text-gray-500 mt-2">{image.desc}</p>
                    </div>
                ))}
            </Slider>
        </section>
    );
};