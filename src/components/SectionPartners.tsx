import React from 'react';
import xiamoi from '../../public/images/xiaomi.png';
import renault from '../../public/images/renault.png';
import tesla from '../../public/images/tesla.png';
import kawth from '../../public/images/kn.png';

const partners = [
    { name: 'Xiamoi', logo: xiamoi },
    { name: 'Renault', logo: renault },
    { name: 'Tesla', logo: tesla },
    { name: 'Kawth', logo: kawth },
];

const SectionPartners: React.FC = () => (
    <section className="bg-[#BAD3BD] py-10 flex flex-col items-center">
        <div className="flex gap-12 items-center justify-center">
            {partners.map((partner) => (
                <div key={partner.name} className="text-2xl font-bold text-green-900 opacity-70">
                    {partner.logo ? <img src={partner.logo} alt={partner.name} className="h-10" /> : partner.name}
                </div>
            ))}
        </div>
    </section>
);

export default SectionPartners; 