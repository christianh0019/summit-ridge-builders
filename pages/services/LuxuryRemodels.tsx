import React from 'react';
import { Button } from '../../components/Button';
import { Check, ArrowRight, Shield, Clock, Home } from 'lucide-react';
import { COMPANY_INFO } from '../../constants';

export const LuxuryRemodels: React.FC = () => {
    return (
        <main className="w-full overflow-x-hidden">

            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1484154218962-a1c002085d2f?auto=format&fit=crop&q=80"
                        alt="Luxury Remodel in Boulder"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-secondary/50 mix-blend-multiply"></div>
                </div>

                <div className="container relative z-10 px-4 text-center">
                    <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Luxury Remodels in <br />
                        <span className="text-accent italic">Boulder</span> & Northern Colorado
                    </h1>
                    <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto font-light">
                        Transforming dated spaces into modern sanctuaries without moving out of the neighborhood you love.
                    </p>
                    <Button onClick={() => window.location.href = '#contact'}>Request Consultation</Button>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-secondary mb-6">
                            Love Your Location, Hate Your Layout?
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Living through a remodel can be chaotic. Dust, delays, and surprise costs often turn dream projects into nightmares. You need a partner who respects your home as much as the blueprint.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {[
                            {
                                icon: Shield,
                                title: "Dust & Protection",
                                text: "We use hospital-grade air scrubbers and ZipWall barriers to separate construction zones from your living space."
                            },
                            {
                                icon: Clock,
                                title: "Strict Scheduling",
                                text: "We don't 'fit you in.' You get a dedicated Project Manager and a live calendar so you know exactly who is coming."
                            },
                            {
                                icon: Home,
                                title: "Respectful Crews",
                                text: "Our trade partners are vetted not just for skill, but for cleanliness and courtesy. No loud music, no smoking."
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-light p-8 rounded-lg border border-gray-100">
                                <item.icon className="text-primary mb-4" size={32} />
                                <h3 className="font-serif text-xl font-bold text-secondary mb-3">{item.title}</h3>
                                <p className="text-gray-600 text-sm">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="services" className="py-20 bg-light">
                <div className="container mx-auto px-4">
                    <h2 className="font-serif text-3xl font-bold text-secondary mb-12 text-center">Our Expertise</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-lg shadow-sm">
                            <h3 className="font-bold text-xl mb-4">Whole Home Renovations</h3>
                            <p className="text-sm text-gray-600">Gut-to-studs transformations. We update electrical, plumbing, and insulation to modern codes while reimagining the floorplan.</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-sm">
                            <h3 className="font-bold text-xl mb-4">Chef's Kitchens</h3>
                            <p className="text-sm text-gray-600">Custom cabinetry, professional appliances, and ergonomic layouts designed for serious cooking and entertaining.</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-sm">
                            <h3 className="font-bold text-xl mb-4">Spa Bathrooms</h3>
                            <p className="text-sm text-gray-600">Steam showers, heated floors, and freestanding tubs. We turn cramped baths into private retreats.</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-sm">
                            <h3 className="font-bold text-xl mb-4">Pop-Tops & Additions</h3>
                            <p className="text-sm text-gray-600">Adding a second story or expanding the footprint with seamless architectural integration.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-primary text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="font-serif text-4xl font-bold mb-6">Reimagine Your Home</h2>
                    <Button variant="white" className="h-14 px-8 text-lg">
                        Book Your Design Consult
                    </Button>
                </div>
            </section>
        </main>
    );
};
