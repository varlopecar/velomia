import React from "react";
import { Carousel, Card } from "./ui/CardsCarousel";

const offers = [
    {
        category: "Offre",
        title: "Borne",
        src: "/images/carousel-1.png",
        content: (
            <div>
                <p>En savoir plus sur nos bornes de recharge élégantes et performantes.</p>
            </div>
        ),
    },
    {
        category: "Offre",
        title: "Station",
        src: "/images/carousel-2.png",
        content: (
            <div>
                <p>Découvrez nos stations de recharge pour tous vos besoins.</p>
            </div>
        ),
    },
    {
        category: "Offre",
        title: "Abri",
        src: "/images/carousel-3.png",
        content: (
            <div>
                <p>Protégez et rechargez votre véhicule sous nos abris solaires.</p>
            </div>
        ),
    },
    {
        category: "Offre",
        title: "Borne Pro",
        src: "/images/carousel-4.png",
        content: (
            <div>
                <p>Solutions professionnelles pour la recharge de flotte.</p>
            </div>
        ),
    },
];

const SectionOffers: React.FC = () => {
    const cards = offers.map((card, index) => (
        <Card key={card.src} card={card} index={index} />
    ));

    return (
        <section className="relative bg-[#BAD3BD] py-20" id="offers">
            <img
                src="/images/circle.png"
                alt="Décoratif cercle"
                className="hidden md:block absolute left-0 top-1/3 w-24 h-24 -translate-y-1/2 z-0"
                style={{ left: '-60px' }}
            />
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-10 text-green-900 relative z-10">
                Nos Offres
            </h2>
            <Carousel items={cards} />
            <img
                src="/images/line.png"
                alt="Décoratif ligne"
                className="hidden md:block absolute left-1/2 bottom-0 w-2/3 max-w-2xl -translate-x-1/2 z-0"
            />
        </section>
    );
};

export default SectionOffers; 