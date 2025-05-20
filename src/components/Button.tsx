import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className = '' }) => {
    return (
        <button
            onClick={onClick}
            className={`
                px-8 py-3
                border border-[#333333]
                rounded-full
                font-raleway
                text-[#333333]
                hover:bg-[#333333]
                hover:text-white
                transition-colors
                duration-300
                ${className}
            `}
        >
            {children}
        </button>
    );
};

export default Button; 