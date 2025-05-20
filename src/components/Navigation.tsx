import React, { useState } from 'react';

const Navigation: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-transparent pt-4">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-24">
                    {/* Logo */}
                    <a href="#" className="flex-shrink-0">
                        <img src="/images/logo.svg" alt="Velomia" className="h-30" />
                    </a>

                    {/* Right Side: Language and Menu */}
                    <div className="flex flex-col justify-center items-center">
                        {/* Language Toggle */}
                        <div className="text-white font-medium text-center">
                            <a href="#" className="opacity-50">FR</a>
                            <span className="mx-2">|</span>
                            <a href="#" className="hover:opacity-50">EN</a>
                        </div>

                        {/* Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-white focus:outline-none"
                        >
                            <img src="/images/burger.svg" alt="Menu" className="h-8 w-8" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-green-900/95 backdrop-blur-sm">
                    <div className="container mx-auto px-4 py-6">
                        <div className="flex flex-col space-y-4">
                            <a href="#" className="text-white hover:opacity-75">Home</a>
                            <a href="#offers" className="text-white hover:opacity-75">Services</a>
                            <a href="#about" className="text-white hover:opacity-75">About</a>
                            <a href="#contact" className="text-white hover:opacity-75">Contact</a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navigation; 