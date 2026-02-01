import React from 'react';
import { Button } from '../../components/Button';
import { Check, ArrowRight, Shield, Clock, DollarSign } from 'lucide-react';
import { COMPANY_INFO } from '../../constants';

export const CustomHomes: React.FC = () => {
    return (
        <main className="w-full overflow-x-hidden">

            {/* -----------------------------------------------------------------------
          SECTION 1: HERO
          Formula: [Specific Service] + [Primary Markets] + [Value Prop]
      ----------------------------------------------------------------------- */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80"
                        alt="Custom Home Construction in Estes Park"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-secondary/50 mix-blend-multiply"></div>
                </div>

                <div className="container relative z-10 px-4 text-center">
                    <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Custom Home Builders in <br />
                        <span className="text-accent italic">Estes Park</span> & Northern Colorado
                    </h1>
                    <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto font-light">
                        Building legacy mountain homes that honor the land and your lifestyle.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button onClick={() => window.location.href = '#contact'}>Start Feasibility Study</Button>
                        <Button variant="white" onClick={() => window.location.href = '#process'}>Our Process</Button>
                    </div>
                </div>
            </section>

            {/* -----------------------------------------------------------------------
          SECTION 2: EMPATHY (PAS Framework)
          Problem -> Agitation -> Solution
      ----------------------------------------------------------------------- */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-secondary mb-6">
                            Building a Mountain Home Shouldn't Be a Gamble
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            You’ve likely heard the horror stories: projects that drag on for years, budgets that double overnight, and contractors who ghost you after the foundation is poured. In the mountains, these risks are magnified by complex terrain, strict zoning, and unpredictable weather.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {[
                            {
                                icon: DollarSign,
                                title: "The Cost Surprise",
                                text: "Most quotes exclude 'site costs' like excavation and utilities, leading to six-figure change orders."
                            },
                            {
                                icon: Clock,
                                title: "The Timeline Drag",
                                text: "Without strict scheduling, permits and weather delays can push a 12-month build to 24+ months."
                            },
                            {
                                icon: Shield,
                                title: "The Quality Gap",
                                text: "Generic builders often fail to properly engineer for high-wind loads and snow accumulation."
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-light p-8 rounded-lg border border-gray-100">
                                <item.icon className="text-red-500 mb-4" size={32} />
                                <h3 className="font-serif text-xl font-bold text-secondary mb-3">{item.title}</h3>
                                <p className="text-gray-600 text-sm">{item.text}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-secondary text-white p-10 md:p-16 rounded-2xl text-center">
                        <h3 className="font-serif text-3xl font-bold mb-4">The Summit Ridge Solution</h3>
                        <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-lg">
                            We operate on a <strong>Fixed-Price Hybrid</strong> model. We do the heavy lifting upfront—soil testing, engineering, and detailed bids—so you know exactly what your home will cost before we break ground.
                        </p>
                        <Button variant="white">Learn How We Build</Button>
                    </div>
                </div>
            </section>

            {/* -----------------------------------------------------------------------
          SECTION 3: COMPETENCE PILLARS
          Technical, Financial, Regulatory
      ----------------------------------------------------------------------- */}
            <section id="process" className="py-20 bg-light">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-accent font-bold tracking-widest text-xs uppercase mb-2 block">Operational Maturity</span>
                            <h2 className="font-serif text-4xl font-bold text-secondary mb-6">Engineered for Altitude</h2>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm flex-shrink-0">
                                        <Check size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-secondary text-lg">Technical Precision</h3>
                                        <p className="text-gray-600 text-sm">We specialize in ledge excavation, caisson foundations, and high-efficiency envelopes designed for Zone 5 climates.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm flex-shrink-0">
                                        <Check size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-secondary text-lg">Financial Transparency</h3>
                                        <p className="text-gray-600 text-sm">You see every invoice. Our open-book policy means you know exactly where every dollar goes.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm flex-shrink-0">
                                        <Check size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-secondary text-lg">Regulatory Navigation</h3>
                                        <p className="text-gray-600 text-sm">We handle all permitting with Larimer and Boulder Counties, navigating HOA hurdles and building codes.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-[600px] rounded-lg overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1598228723793-52759bba239c?auto=format&fit=crop&q=80"
                                alt="Framing a custom home"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* -----------------------------------------------------------------------
          SECTION 4: FAQ (Data Layer)
      ----------------------------------------------------------------------- */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                    <h2 className="font-serif text-3xl font-bold text-secondary mb-12 text-center">Common Questions</h2>
                    <div className="space-y-6">
                        <div className="border-b border-gray-100 pb-6">
                            <h3 className="font-bold text-secondary mb-2">What is the cost per square foot?</h3>
                            <p className="text-gray-600">
                                In 2025, true custom homes in Northern Colorado typically range from <strong>$450 to $700+ per sq. ft.</strong> This varies heavily based on site conditions (slope, rock) and finish levels. We warn against "sticker price" quotes that exclude these realities.
                            </p>
                        </div>
                        <div className="border-b border-gray-100 pb-6">
                            <h3 className="font-bold text-secondary mb-2">Do you have your own lots?</h3>
                            <p className="text-gray-600">
                                We are a build-on-your-lot builder. However, we offer <strong>Land Feasibility Services</strong> to help you evaluate a potential lot before you purchase it.
                            </p>
                        </div>
                        <div className="border-b border-gray-100 pb-6">
                            <h3 className="font-bold text-secondary mb-2">How long does it take?</h3>
                            <p className="text-gray-600">
                                Design and permitting typically take 4-6 months. Construction takes 8-12 months. We build year-round, utilizing specific cold-weather concrete and heating protocols.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* -----------------------------------------------------------------------
          SECTION 5: FINAL CTA
      ----------------------------------------------------------------------- */}
            <section id="contact" className="py-20 bg-primary text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="font-serif text-4xl font-bold mb-6">Let's Discuss Your Vision</h2>
                    <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                        Schedule a no-obligation Discovery Session. We'll review your land, your budget, and your goals to see if we're the right fit.
                    </p>
                    <Button variant="white" className="h-14 px-8 text-lg">
                        Schedule Discovery Call
                    </Button>
                    <p className="mt-6 text-sm opacity-70">
                        or call {COMPANY_INFO.phone}
                    </p>
                </div>
            </section>

        </main>
    );
};
