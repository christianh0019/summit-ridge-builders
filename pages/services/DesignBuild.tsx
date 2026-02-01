import React from 'react';
import { Button } from '../../components/Button';
import { PenTool, Layers, CheckCircle } from 'lucide-react';
import { COMPANY_INFO } from '../../constants';

export const DesignBuild: React.FC = () => {
    return (
        <main className="w-full overflow-x-hidden">

            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80"
                        alt="Design Build Architecture"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-secondary/60 mix-blend-multiply"></div>
                </div>

                <div className="container relative z-10 px-4 text-center">
                    <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Integrated Design-Build <br />
                        <span className="text-accent italic">One Team. One Contract.</span>
                    </h1>
                    <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto font-light">
                        Architecture and construction working in perfect sync to save you time, money, and stress.
                    </p>
                    <Button onClick={() => window.location.href = '#contact'}>Learn More</Button>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="font-serif text-3xl font-bold text-secondary mb-6">The Broken Traditional Model</h2>
                            <p className="text-gray-600 mb-6">
                                Traditionally, you hire an architect, waiting months for plans, only to bid them out and realize they cost 30% more than your budget. Then the fingerprinting begins—the builder blames the architect, the architect blames the builder, and you foot the bill for revisions.
                            </p>
                            <p className="font-bold text-secondary">We believe there is a better way.</p>
                        </div>
                        <div className="bg-light p-8 rounded-lg border-l-4 border-red-500">
                            <h3 className="font-bold text-lg mb-2">The Old Way:</h3>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="flex gap-2"><span className="text-red-500">✕</span> Disconnected teams</li>
                                <li className="flex gap-2"><span className="text-red-500">✕</span> Budget surprises after design</li>
                                <li className="flex gap-2"><span className="text-red-500">✕</span> adversarial relationship</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-secondary text-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="font-serif text-3xl font-bold mb-4">The Design-Build Advantage</h2>
                        <p className="text-gray-400">Collaborative from day one. Guaranteed accountability.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 text-accent">
                                <PenTool size={32} />
                            </div>
                            <h3 className="font-bold text-xl mb-3">Single Point of Responsibility</h3>
                            <p className="text-sm text-gray-300">We are responsible for everything. Architecture, engineering, permits, and construction. No finger-pointing.</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 text-accent">
                                <Layers size={32} />
                            </div>
                            <h3 className="font-bold text-xl mb-3">Budget-Led Design</h3>
                            <p className="text-sm text-gray-300">We price the project *as* we design it. You will never pay for a set of blueprints that you cannot afford to build.</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 text-accent">
                                <CheckCircle size={32} />
                            </div>
                            <h3 className="font-bold text-xl mb-3">Faster Delivery</h3>
                            <p className="text-sm text-gray-300">By overlapping design, permitting, and material ordering, we can shave months off the typical timeline.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="font-serif text-4xl font-bold text-secondary mb-6">Streamline Your Build</h2>
                    <Button className="h-14 px-8 text-lg">
                        Start the Conversation
                    </Button>
                </div>
            </section>

        </main>
    );
};
