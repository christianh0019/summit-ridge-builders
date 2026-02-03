import React from 'react';
import { FunnelLayout } from '../layouts/FunnelLayout';
import { ApplicationSurvey } from '../components/ApplicationSurvey';
import { Star } from 'lucide-react';

export const Application: React.FC = () => {
    return (
        <FunnelLayout>
            <div className="container mx-auto px-4 py-12 md:py-20">
                <div className="max-w-4xl mx-auto">

                    {/* Hero / Social Proof */}
                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center gap-1 mb-4">
                            {[1, 2, 3, 4, 5].map(i => (
                                <Star key={i} size={20} className="text-accent fill-accent" />
                            ))}
                        </div>
                        <p className="font-bold text-secondary text-sm uppercase tracking-widest mb-4">
                            Rated 4.9/5 by Colorado Homeowners
                        </p>
                        <h1 className="font-serif text-4xl md:text-5xl font-bold text-secondary mb-6">
                            Apply for a Clarity Consultation
                        </h1>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                            We take on a limited number of custom builds each year to ensure uncompromising quality.
                            Please answer a few questions to see if we are the right partner for your vision.
                        </p>
                    </div>

                    {/* Survey Component */}
                    <ApplicationSurvey />

                    <p className="text-center text-xs text-gray-400 mt-8">
                        <span className="opacity-75">Your information is secure. </span>
                        <span className="opacity-75">Takes less than 2 minutes.</span>
                    </p>

                </div>
            </div>
        </FunnelLayout>
    );
};
