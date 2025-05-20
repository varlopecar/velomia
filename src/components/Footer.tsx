import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#1E1E1E] text-white py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold mb-4">À propos</h3>
                        <p className="text-white">
                            Nous sommes engagés à offrir les meilleures solutions de mobilité durable.
                        </p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-xl font-bold mb-4">Contact</h3>
                        <p className="text-white">
                            Email : contact@velomia.com<br />
                            Téléphone : 01 23 45 67 89
                        </p>
                    </div>
                    <div className="text-center md:text-right">
                        <h3 className="text-xl font-bold mb-4">Suivez-nous</h3>
                        <div className="flex justify-center md:justify-end space-x-4">
                            <a href="#" className="text-white hover:text-white">Twitter</a>
                            <a href="#" className="text-white hover:text-white">Facebook</a>
                            <a href="#" className="text-white hover:text-white">Instagram</a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 text-center text-white">
                    <p>&copy; 2024 Velomia. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 