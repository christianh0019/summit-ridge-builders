import React from 'react';
import { COMPANY_INFO } from '../constants';

export const FunnelFooter: React.FC = () => {
    return (
        <footer className="w-full py-8 bg-white border-t border-gray-50 mt-auto">
            <div className="container mx-auto px-4 text-center">
                <p className="text-xs text-gray-400">
                    &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
                </p>
                <div className="flex justify-center gap-4 mt-2">
                    <a href="#" className="text-xs text-gray-400 hover:text-secondary">Privacy Policy</a>
                    <a href="#" className="text-xs text-gray-400 hover:text-secondary">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};
