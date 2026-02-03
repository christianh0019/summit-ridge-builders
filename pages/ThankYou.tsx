import React from 'react';
import { Link } from 'react-router-dom';
import { FunnelLayout } from '../layouts/FunnelLayout';
import { Check, ArrowRight, Home } from 'lucide-react';
import { Button } from '../components/Button';

export const ThankYou: React.FC = () => {
    return (
        <FunnelLayout>
            <div className="container mx-auto px-4 py-12 md:py-24 flex-grow flex flex-col items-center justify-center text-center">

                <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center shadow-lg text-white mb-8 animate-bounce-short">
                    <Check size={48} strokeWidth={3} />
                </div>

                <h1 className="font-serif text-4xl md:text-6xl font-bold text-secondary mb-6">
                    You're All Set!
                </h1>

                <p className="text-xl text-gray-600 max-w-xl mx-auto mb-10 leading-relaxed">
                    We have confirmed your consultation time. A calendar invitation with meeting details has been sent to your email.
                </p>

                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 max-w-md w-full mb-10">
                    <h3 className="font-bold text-secondary text-lg mb-4">What happens next?</h3>
                    <ul className="text-left space-y-4">
                        <li className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-blue-50 text-primary flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">1</div>
                            <span className="text-gray-600 text-sm">We review your project details and property location.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-blue-50 text-primary flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">2</div>
                            <span className="text-gray-600 text-sm">We meet for 15-minutes to discuss feasibility and answer your initial questions.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-blue-50 text-primary flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">3</div>
                            <span className="text-gray-600 text-sm">If we're a good fit, we verify your lot and start the Pre-Construction Agreement.</span>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/services/custom-homes">
                        <Button variant="outline">
                            View Custom Homes <ArrowRight size={16} className="ml-2" />
                        </Button>
                    </Link>
                    <Link to="/">
                        <Button variant="ghost">
                            <Home size={16} className="mr-2" /> Return to Home
                        </Button>
                    </Link>
                </div>

            </div>
        </FunnelLayout>
    );
};
