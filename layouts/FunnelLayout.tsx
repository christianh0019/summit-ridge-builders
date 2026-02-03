import React from 'react';
import { FunnelHeader } from '../components/FunnelHeader';
import { FunnelFooter } from '../components/FunnelFooter';

interface FunnelLayoutProps {
    children: React.ReactNode;
}

export const FunnelLayout: React.FC<FunnelLayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col bg-light font-sans text-secondary">
            <FunnelHeader />
            <main className="flex-grow flex flex-col">
                {children}
            </main>
            <FunnelFooter />
        </div>
    );
};
