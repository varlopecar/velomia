import React from 'react';
import { HeroParallaxDemo } from '../components/ui/HeroParallaxDemo';
import Navigation from '../components/Navigation';
import Footer from '../components/ui/Footer';
interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navigation />
            <div>
                <HeroParallaxDemo />
                <main className="flex-grow">
                    {children}
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default MainLayout; 