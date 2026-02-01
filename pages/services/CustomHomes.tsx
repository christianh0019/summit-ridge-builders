import React, { useState } from 'react';
import { Button } from '../../components/Button';
import { Check, ArrowRight, Shield, Clock, DollarSign, FileText, MapPin, Star, Plus, Minus, Download } from 'lucide-react';
import { COMPANY_INFO, PROJECTS } from '../../constants';
import { SEO } from '../../components/SEO';

export const CustomHomes: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const FAQS = [
        {
            question: "What is the cost per square foot for custom homes in Northern Colorado?",
            answer: "While every project is unique, luxury home builders in our area generally see costs ranging from $350 to $600+ per square foot depending on finishes, site conditions, and terrain complexity. Download our Cost Guide below for a detailed breakdown."
        },
        {
            question: "How long does it take to build a custom home?",
            answer: "A typical custom home construction project takes 12–18 months. This includes 3–5 months for design and permitting, and 9–12 months for construction."
        },
        {
            question: "Do you build on my lot?",
            answer: "Yes. We specialize in homes built on your land. Whether you have a lot in the foothills of Loveland or a teardown in Boulder, we manage the site development."
        },
        {
            question: "Do you handle the architectural design?",
            answer: "Yes. As a Design-Build firm, we offer integrated design services. However, if you already have an architect, we are happy to collaborate with them as your builder."
        }
    ];

    return (
        <main className="w-full overflow-x-hidden">
            <SEO
                title="Custom Home Builders in Northern Colorado | Estes Park, Boulder & Loveland"
                description="Summit Ridge Builders delivers luxury custom homes across Northern Colorado. From difficult mountain terrain to sustainable design-builds. Since 1995."
                canonical="/services/custom-home-construction"
            />

            {/* -----------------------------------------------------------------------
          1. THE PROMISE (Hero Section)
      ----------------------------------------------------------------------- */}
            <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://picsum.photos/id/29/800/600" // Alpine Retreat placeholder
                        alt="Custom Home Builders in Estes Park"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-secondary/50 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent opacity-80"></div>
                </div>

                <div className="container relative z-10 px-4 text-center">
                    <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight max-w-5xl mx-auto">
                        Custom Home Builders in <br />
                        <span className="text-accent italic">Estes Park, Boulder & Northern Colorado</span><br />
                        <span className="text-2xl md:text-4xl block mt-4 font-sans font-light tracking-wide text-gray-200">Sustainable Design-Build Excellence</span>
                    </h1>
                    <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
                        Building a luxury mountain home shouldn’t be a gamble. We combine 30 years of alpine construction expertise with a transparent process to turn your vision into a legacy.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Button onClick={() => window.location.href = '#contact'} className="h-14 px-8 text-lg">
                            Book Your Feasibility Study
                        </Button>
                        <Button variant="white" onClick={() => window.location.href = '#lead-magnet'} className="h-14 px-8 text-lg flex items-center gap-2">
                            <Download size={18} /> Download 2025 Cost Guide
                        </Button>
                    </div>
                </div>
            </section>

            {/* -----------------------------------------------------------------------
          2. THE EMPATHY LAYER (Problem-Agitation-Solution)
      ----------------------------------------------------------------------- */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <span className="text-accent font-bold tracking-widest text-xs uppercase mb-4 block">The Truth About Building in the Rockies</span>
                        <h2 className="font-serif text-3xl md:text-5xl font-bold text-secondary mb-8">
                            Why Building a Custom Home Feels Risky
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            Most families approach <strong>custom home construction</strong> with excitement, but also a deep fear of the horror stories: projects running years over schedule, budgets ballooning by 40%, or contractors ghosting mid-build.
                        </p>
                        <div className="bg-red-50 p-8 rounded-lg border-l-4 border-red-400 text-left">
                            <p className="text-secondary italic text-lg mb-4">
                                "In Northern Colorado, the stakes are even higher. Between Boulder’s strict energy codes, the complex soil conditions in Loveland, and the granite terrain of Estes Park, a 'standard' build can quickly turn into a financial nightmare. Unexpected tap fees, difficult excavation, and zoning variances can derail your retirement dream before the foundation is even poured."
                            </p>
                        </div>
                    </div>

                    <div className="bg-secondary text-white p-10 md:p-16 rounded-2xl relative overflow-hidden">
                        <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
                            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-secondary mb-6 shadow-lg">
                                <Shield size={32} />
                            </div>
                            <h3 className="font-serif text-3xl font-bold mb-4">The Antidote to Chaos</h3>
                            <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                <strong>Summit Ridge Builders</strong> is the antidote to construction chaos. Since 1995, we have specialized in navigating these exact challenges. We don’t just build houses; we manage the risk, the terrain, and the timeline so you can focus on the excitement of designing your sanctuary.
                            </p>
                            <Button variant="white">Our Risk-Free Process</Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* -----------------------------------------------------------------------
          3. THE COMPETENCE LAYER (The 3 Pillars)
      ----------------------------------------------------------------------- */}
            <section className="py-24 bg-light">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-secondary mb-4">Engineered for Altitude</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            We are more than just <strong>local home builders near you</strong>. We are a professional construction firm built on three pillars of safety.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                            <div className="text-primary mb-6"><MapPin size={40} /></div>
                            <h3 className="font-serif text-xl font-bold text-secondary mb-3">Technical Mastery</h3>
                            <p className="text-gray-600 text-sm mb-4">
                                Building at elevation requires specific expertise. From mitigating snow loads in Estes Park to designing energy-efficient envelopes that meet Boulder’s strict codes.
                            </p>
                            <ul className="text-sm text-gray-500 space-y-2">
                                <li className="flex items-center gap-2"><Check size={14} className="text-accent" /> Terrain Analysis</li>
                                <li className="flex items-center gap-2"><Check size={14} className="text-accent" /> Passive Solar Orientation</li>
                                <li className="flex items-center gap-2"><Check size={14} className="text-accent" /> High-Performance Insulation</li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                            <div className="text-primary mb-6"><DollarSign size={40} /></div>
                            <h3 className="font-serif text-xl font-bold text-secondary mb-3">Financial Safety</h3>
                            <p className="text-gray-600 text-sm mb-4">
                                We believe in <strong>custom home renovation</strong> and construction without financial surprises.
                            </p>
                            <ul className="text-sm text-gray-500 space-y-2">
                                <li className="flex items-center gap-2"><Check size={14} className="text-accent" /> Fixed-Price Contracts</li>
                                <li className="flex items-center gap-2"><Check size={14} className="text-accent" /> Lien Waivers Included</li>
                                <li className="flex items-center gap-2"><Check size={14} className="text-accent" /> Open-Book Draws</li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
                            <div className="text-primary mb-6"><FileText size={40} /></div>
                            <h3 className="font-serif text-xl font-bold text-secondary mb-3">Regulatory Navigation</h3>
                            <p className="text-gray-600 text-sm mb-4">
                                We handle the bureaucracy so you don't have to. The "Red Tape" Experts.
                            </p>
                            <ul className="text-sm text-gray-500 space-y-2">
                                <li className="flex items-center gap-2"><Check size={14} className="text-accent" /> Larimer & Boulder Permits</li>
                                <li className="flex items-center gap-2"><Check size={14} className="text-accent" /> HOA & ARB Presentations</li>
                                <li className="flex items-center gap-2"><Check size={14} className="text-accent" /> 98% First-Pass Inspection Rate</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* -----------------------------------------------------------------------
          4. THE EVIDENCE LAYER (Social Proof)
      ----------------------------------------------------------------------- */}
            <section className="py-24 bg-secondary text-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">We Don't Just Tell You, We Show You</h2>
                        <p className="text-gray-400">Real projects. Real challenges. Real results.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Project 1 */}
                        <div className="group">
                            <div className="relative h-[400px] rounded-lg overflow-hidden mb-6">
                                <img src="https://picsum.photos/id/29/800/600" alt="Alpine Retreat" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute top-4 left-4 bg-accent text-secondary px-3 py-1 text-xs font-bold uppercase rounded">Featured Project</div>
                            </div>
                            <h3 className="font-serif text-2xl font-bold mb-2">The Alpine Retreat</h3>
                            <p className="text-sm text-gray-400 uppercase tracking-widest mb-4">Estes Park, CO</p>
                            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm mb-6">
                                <p className="text-gray-300 text-sm mb-3"><strong>The Challenge:</strong> A steep granite slope requiring complex blasting and engineering.</p>
                                <p className="text-gray-300 text-sm"><strong>The Result:</strong> A luxury mountain retreat featuring timber frame accents, a massive stone fireplace, and seamless indoor-outdoor living decks.</p>
                            </div>
                            <blockquote className="border-l-2 border-accent pl-4 italic text-gray-400 text-sm">
                                "Summit Ridge navigated the difficult terrain of our lot when other builders said it was impossible. A true masterpiece." — The Harrison Family
                            </blockquote>
                        </div>

                        {/* Project 2 */}
                        <div className="group">
                            <div className="relative h-[400px] rounded-lg overflow-hidden mb-6">
                                <img src="https://picsum.photos/id/28/800/600" alt="Modern Farmhouse" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute top-4 left-4 bg-accent text-secondary px-3 py-1 text-xs font-bold uppercase rounded">Featured Project</div>
                            </div>
                            <h3 className="font-serif text-2xl font-bold mb-2">The Modern Farmhouse</h3>
                            <p className="text-sm text-gray-400 uppercase tracking-widest mb-4">Boulder, CO</p>
                            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm mb-6">
                                <p className="text-gray-300 text-sm mb-3"><strong>The Challenge:</strong> Strict city energy codes and a tight urban infill lot.</p>
                                <p className="text-gray-300 text-sm"><strong>The Result:</strong> A net-zero ready <strong>custom built house</strong> with smart automation and an open-concept kitchen designed for a growing family.</p>
                            </div>
                            <div className="text-right">
                                <a href="#portfolio" className="text-accent hover:text-white transition-colors underline decoration-accent underline-offset-4">View Portfolio Gallery →</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* -----------------------------------------------------------------------
          5. THE SYSTEM LAYER (Process)
      ----------------------------------------------------------------------- */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col md:flex-row gap-16">
                        <div className="md:w-1/3">
                            <h2 className="font-serif text-4xl font-bold text-secondary mb-6">Your Roadmap Home</h2>
                            <p className="text-gray-600 mb-8">
                                We use a linear, 5-step roadmap to take you from raw land to move-in day. No guessing games.
                            </p>
                            <Button onClick={() => window.location.href = '#contact'}>Start Your Project</Button>
                        </div>
                        <div className="md:w-2/3 space-y-10">
                            {[
                                { title: "Discovery Session", desc: "We meet to understand your vision, your land, and your budget. We identify 'deal-breakers' early to ensure feasibility." },
                                { title: "Concept & Feasibility", desc: "We develop preliminary floor plans and a high-level budget analysis. This prevents designing a home that costs twice your budget to build." },
                                { title: "Design & Selections", desc: "Our design-build team finalizes architectural plans, structural engineering, and material selections. You’ll select everything before we break ground." },
                                { title: "Permitting & Construction", desc: "We handle all local building contractors and permits. You receive weekly video updates via our client portal." },
                                { title: "Final Walkthrough & Handover", desc: "We conduct a rigorous quality control walk, hand over your keys, and explain your warranty. Welcome home." }
                            ].map((step, idx) => (
                                <div key={idx} className="flex gap-6">
                                    <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center text-primary font-bold text-xl flex-shrink-0">
                                        {idx + 1}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-xl text-secondary mb-2">{step.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* -----------------------------------------------------------------------
          6. THE DATA LAYER (FAQ)
      ----------------------------------------------------------------------- */}
            <section className="py-20 bg-light">
                <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                    <h2 className="font-serif text-3xl font-bold text-secondary mb-12 text-center">Common Questions</h2>
                    <div className="space-y-4">
                        {FAQS.map((item, idx) => (
                            <div key={idx} className="bg-white rounded-lg shadow-sm overflow-hidden">
                                <button
                                    className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors text-left"
                                    onClick={() => toggleFaq(idx)}
                                >
                                    <span className="font-bold text-secondary">{item.question}</span>
                                    {openFaq === idx ? <Minus size={20} className="text-primary" /> : <Plus size={20} className="text-primary" />}
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === idx ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100">
                                        {item.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* -----------------------------------------------------------------------
          7. LEADT MAGNET (Soft Conversion)
      ----------------------------------------------------------------------- */}
            <section id="lead-magnet" className="py-24 bg-primary text-white text-center relative overflow-hidden">
                {/* Decorative Circles */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="font-serif text-4xl font-bold mb-6">Not ready to build yet? Get the data first.</h2>
                        <p className="text-blue-100 text-lg mb-10 leading-relaxed">
                            Most people underestimate the cost of site work and utilities in the mountains. Don’t build blind. Download our free guide to understand the real costs of building in 2025.
                        </p>

                        <div className="bg-white/10 p-8 rounded-xl backdrop-blur-md mb-10 text-left md:w-fit md:mx-auto">
                            <h3 className="font-bold text-accent mb-4 text-center tracking-widest uppercase text-sm">What's Inside</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3">
                                    <Check size={18} className="text-accent" />
                                    <span>Real-world cost breakdowns by square footage</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Check size={18} className="text-accent" />
                                    <span>Hidden costs of mountain terrain (well, septic, blasting)</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Check size={18} className="text-accent" />
                                    <span>Permitting timelines for Boulder & Larimer Counties</span>
                                </li>
                            </ul>
                        </div>

                        <Button variant="white" className="h-16 px-10 text-xl font-bold rounded-full hover:scale-105 transition-transform shadow-xl">
                            Download the Free 2025 Cost Guide
                        </Button>
                        <p className="mt-4 text-xs text-blue-200 opacity-60">
                            *Sent instantly to your inbox. No spam, ever.
                        </p>
                    </div>
                </div>
            </section>

        </main>
    );
};
