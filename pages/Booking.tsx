import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FunnelLayout } from '../layouts/FunnelLayout';
import { CheckCircle } from 'lucide-react';

export const Booking: React.FC = () => {
    const [searchParams] = useSearchParams();
    const email = searchParams.get('email');

    useEffect(() => {
        // Here we would typically initialize the calendar widget
        // and potentially pre-fill the email if supported by the widget API
        console.log('Pre-filling calendar for:', email);
    }, [email]);

    return (
        <FunnelLayout>
            <div className="container mx-auto px-4 py-8 md:py-12 flex-grow flex flex-col">
                <div className="max-w-4xl mx-auto w-full text-center">

                    {/* Hero */}
                    <div className="mb-10 animate-fade-in-up">
                        <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full font-bold text-sm mb-6 border border-green-100">
                            <CheckCircle size={16} />
                            Application Received
                        </div>
                        <h1 className="font-serif text-3xl md:text-5xl font-bold text-secondary mb-4">
                            Let's Review Your Vision
                        </h1>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            You've taken the first step toward your dream home. Please select a time below for a 15-minute Clarity Consultation to review your project goals and feasibility.
                        </p>
                    </div>

                    {/* Calendar Widget Container */}
                    <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100 h-[650px] md:h-[750px] w-full relative">
                        <iframe
                            src="https://api.leadconnectorhq.com/widget/booking/7ZxEJR33FnHfU80B9LCj"
                            style={{ width: '100%', height: '100%', border: 'none' }}
                            scrolling="no"
                            id="msgsndr-calendar"
                            title="Clarity Consultation"
                        ></iframe>
                    </div>

                </div>
            </div>
        </FunnelLayout>
    );
};
