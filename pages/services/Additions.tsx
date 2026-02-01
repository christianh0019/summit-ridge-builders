import React from 'react';
import { Button } from '../../components/Button';
import { Maximize, ArrowRight, GitMerge } from 'lucide-react';

export const Additions: React.FC = () => {
    return (
        <main className="w-full overflow-x-hidden">

            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80"
                        alt="Home Additions"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-secondary/50 mix-blend-multiply"></div>
                </div>

                <div className="container relative z-10 px-4 text-center">
                    <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Seamless Additions & <br />
                        <span className="text-accent italic">Expansions</span>
                    </h1>
                    <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto font-light">
                        More space, same soul. We ensure your new square footage feels like it was always there.
                    </p>
                    <Button onClick={() => window.location.href = '#contact'}>Get an Estimate</Button>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div>
                            <h2 className="font-serif text-3xl font-bold text-secondary mb-6">The "Bolted-On" Look</h2>
                            <p className="text-gray-600 mb-6">
                                Nothing destroys curb appeal faster than a cheap addition that looks like an afterthought. Mismatched rooflines, siding that doesn't quite line up, and awkward interior flows are the hallmarks of inexperienced contractors.
                            </p>
                            <div className="p-6 bg-light border-l-4 border-accent">
                                <p className="italic text-secondary font-medium">"Our goal is that ten years from now, no one can tell where the original house ends and the addition begins."</p>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-bold text-xl mb-4">Our Integration Protocol</h3>
                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <GitMerge className="text-primary flex-shrink-0" />
                                    <span className="text-gray-600 text-sm"><strong>Roofline Matching:</strong> We match pitch, overhangs, and materials perfectly.</span>
                                </li>
                                <li className="flex gap-3">
                                    <Maximize className="text-primary flex-shrink-0" />
                                    <span className="text-gray-600 text-sm"><strong>Foundation Keying:</strong> Proper structural ties to prevent settling and cracking between old and new.</span>
                                </li>
                                <li className="flex gap-3">
                                    <ArrowRight className="text-primary flex-shrink-0" />
                                    <span className="text-gray-600 text-sm"><strong>Flow Optimization:</strong> We open walls to create sightlines, not bottlenecks.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-primary text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="font-serif text-4xl font-bold mb-6">Expand Your Possibilities</h2>
                    <Button variant="white" className="h-14 px-8 text-lg">
                        Consult on Your Addition
                    </Button>
                </div>
            </section>

        </main>
    );
};
