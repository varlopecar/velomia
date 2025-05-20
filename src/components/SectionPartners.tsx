import React from 'react';

const partners = [
    { name: 'Xiamoi', logo: '/images/xiaomi.png' },
    { name: 'Renault', logo: '/images/renault.png' },
    { name: 'Tesla', logo: '/images/tesla.png' },
    { name: 'Kawth', logo: '/images/kn.png' },
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