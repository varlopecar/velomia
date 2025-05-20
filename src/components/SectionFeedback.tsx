import React from 'react';

const SectionFeedback: React.FC = () => (
    <section className="bg-[#BAD3BD] py-20 flex flex-col items-center">
        <h2 className="text-2xl font-serif font-bold mb-8 text-green-900">Feedback</h2>
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-lg text-center">
            <blockquote className="italic text-green-900 mb-4">“Une vraie prise de conscience!”</blockquote>
            <p className="text-green-700 mb-2">Nous avons adopté les solutions Velomania et avons constaté une réelle amélioration de notre impact environnemental. Merci à toute l’équipe !</p>
            <span className="text-green-800 font-semibold">Sarah M.</span>
        </div>
    </section>
);

export default SectionFeedback; 