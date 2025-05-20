import React from 'react';
import { HeroParallaxDemo } from './HeroParallaxDemo';

const Hero: React.FC = () => {
    return (
        <section className="relative bg-[#c7dbc7] text-green-900">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative flex flex-col items-center justify-center min-h-[60vh]">
                <HeroParallaxDemo />
            </div>
        </section>
    );
};

export default Hero; 