import React from 'react';
import Button from './Button';

const SectionMain: React.FC = () => (
    <section className="bg-[#BAD3BD] py-20 flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl font-seasons italic font-normal mb-8 text-black">Une entreprise de services de transport écologique</h2>
        <img src="/images/section-1.png" alt="Main Product" className="w-full max-w-md rounded-2xl shadow-lg mb-8" />
        <p className="max-w-2xl font-raleway font-medium text-custom-brown mb-6">
            Et si nos déplacements devenaient un levier concret pour préserver notre planète ? Face à l'urgence climatique et aux enjeux de pollution urbaine, il est essentiel d'adopter de nouveaux réflexes. Notre site a été conçu pour accompagner cette transition : nous proposons des solutions de mobilité écologique pensées pour tous — particuliers comme professionnels.
        </p>
        <p className="max-w-2xl font-raleway font-medium text-custom-brown mb-8">
            Vélos électriques, navettes partagées, conseils personnalisés… nous croyons en une mobilité douce, pratique, économique et respectueuse de l'environnement. Mais au-delà des services, notre engagement va plus loin : sensibiliser, informer et donner à chacun les moyens d'agir, à son échelle, pour un avenir plus durable.
        </p>
        <Button>CONTACTEZ-NOUS</Button>
    </section>
);

export default SectionMain; 