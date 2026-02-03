import React from 'react';
import { Link } from 'react-router-dom';

export const FunnelHeader: React.FC = () => {
    return (
        <header className="w-full py-6 flex justify-center bg-white border-b border-gray-100">
            <Link to="/" className="flex flex-col items-center group">
                <span className="font-serif text-2xl font-bold tracking-tight text-secondary group-hover:text-primary transition-colors">
                    Summit Ridge
                </span>
                <span className="text-[10px] tracking-widest uppercase font-bold text-primary">
                    Builders
                </span>
            </Link>
        </header>
    );
};
