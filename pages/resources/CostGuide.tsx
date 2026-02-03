import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';
import { FunnelLayout } from '../../layouts/FunnelLayout';
import { Button } from '../../components/Button';
import { ArrowRight, Info, CheckCircle, TrendingUp, AlertTriangle } from 'lucide-react';

export const CostGuide: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const hasAccess = sessionStorage.getItem('unlocked_cost_guide');
        if (!hasAccess) {
            navigate('/resources/cost-guide-optin');
        }
    }, [navigate]);

    return (
        <FunnelLayout>
            <SEO
                title="2025 Custom Home Cost Guide"
                description="Exclusive cost breakdown for custom homes in Colorado."
                robots="noindex" // Gated content
            />

            <div className="bg-white min-h-screen">

                {/* Header */}
                <div className="bg-secondary text-white py-12 md:py-20 text-center px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                            <CheckCircle size={14} className="text-accent" />
                            Access Granted
                        </div>
                        <h1 className="font-serif text-3xl md:text-5xl font-bold mb-4">2025 Colorado Custom Home Cost Guide</h1>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto italic">
                            "The unvarnished truth about what it takes to build in the High Country today—stripped of sales fluff and focused on financial reality."
                        </p>
                    </div>
                </div>

                {/* Content */}
                <div className="container mx-auto px-4 py-12 -mt-8">
                    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl p-8 md:p-12 border border-gray-100">

                        {/* Intro */}
                        <div className="prose prose-lg max-w-none text-gray-600 mb-12">
                            <h2 className="font-serif text-secondary text-3xl mb-4">Understanding the "Sticker Price"</h2>
                            <p className="border-l-4 border-accent pl-4 italic bg-gray-50 py-2 pr-2 rounded-r-lg">
                                Most builders quote a "base price" that assumes a flat lot, perfect soil, and the most basic finishes. <strong>That number is a myth.</strong>
                            </p>
                            <p className="mt-4">
                                We believe in the <strong>All-In Budget</strong>. Building a legacy home in the Colorado mountains is an investment in lifestyle, family, and the future. However, the economics of mountain construction have shifted dramatically. Below is how our projects typically fall into three tiers based on complexity, finish level, and architectural demand.
                            </p>
                        </div>

                        {/* Tiers */}
                        <div className="space-y-8 mb-16">

                            {/* Tier 1 */}
                            <div className="border border-gray-200 rounded-xl p-8 hover:border-primary/30 transition-colors bg-gray-50">
                                <div className="flex flex-col md:flex-row justify-between md:items-center mb-4 gap-2">
                                    <h3 className="font-serif text-2xl font-bold text-secondary">TIER 1: REVIEW</h3>
                                    <span className="bg-white text-primary border border-primary/20 px-4 py-1 rounded-full font-bold text-sm shadow-sm">$350 - $450 Per Sq. Ft.</span>
                                </div>
                                <p className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-4">The "Smart Luxury" Approach</p>
                                <p className="text-gray-600 mb-6">
                                    Perfect for clients who want quality but are willing to value-engineer the design. We utilize efficient footprints (stacked amenities, minimized roof complexity) and pre-selected material packages to control costs without sacrificing durability.
                                </p>
                                <div className="bg-white p-6 rounded-lg border border-gray-200">
                                    <h4 className="font-bold text-secondary text-sm mb-2">What's Included:</h4>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        Semi-custom cabinetry, high-performance LVP or engineered oak flooring, standard luxury appliance package (e.g., Bosch/JennAir), asphalt shingle roofing, and efficient framing.
                                    </p>
                                    <p className="text-xs text-gray-400 mt-4 pt-4 border-t border-gray-100">
                                        <strong>Best For:</strong> Guest homes, speculative investments, or families focused on maximizing square footage.
                                    </p>
                                </div>
                            </div>

                            {/* Tier 2 */}
                            <div className="border-2 border-primary rounded-xl p-8 relative overflow-hidden bg-white shadow-lg transform md:scale-105 z-10">
                                <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">MOST POPULAR</div>
                                <div className="flex flex-col md:flex-row justify-between md:items-center mb-4 gap-2">
                                    <h3 className="font-serif text-2xl font-bold text-secondary">TIER 2: REFINE</h3>
                                    <span className="bg-primary text-white border border-primary px-4 py-1 rounded-full font-bold text-sm shadow-md">$450 - $600 Per Sq. Ft.</span>
                                </div>
                                <p className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-4">The True Custom Standard</p>
                                <p className="text-gray-600 mb-6">
                                    The sweet spot for most primary mountain residences. It allows for architectural freedom—vaulted great rooms, expansive glass to capture views, and high-end texture.
                                </p>
                                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                                    <h4 className="font-bold text-secondary text-sm mb-2">What's Included:</h4>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        Wide-plank hardwood throughout, custom millwork and beams, smart home integration (lighting/temp), metal roof accents, natural stone fireplaces, and premium appliance suites (Wolf/Sub-Zero).
                                    </p>
                                    <p className="text-xs text-secondary mt-4 pt-4 border-t border-blue-200">
                                        <strong>Best For:</strong> The "Forever Home" that balances wow-factor with functional mountain living.
                                    </p>
                                </div>
                            </div>

                            {/* Tier 3 */}
                            <div className="border border-gray-200 rounded-xl p-8 hover:border-primary/30 transition-colors bg-gray-50">
                                <div className="flex flex-col md:flex-row justify-between md:items-center mb-4 gap-2">
                                    <h3 className="font-serif text-2xl font-bold text-secondary">TIER 3: REINVENT</h3>
                                    <span className="bg-secondary text-white border border-secondary px-4 py-1 rounded-full font-bold text-sm shadow-sm">$600+ Per Sq. Ft.</span>
                                </div>
                                <p className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-4">Limitless Vision</p>
                                <p className="text-gray-600 mb-6">
                                    At this level, the home is an architectural feat. Costs are driven by structural engineering (cantilevers, steel framing), rare materials, and site difficulty.
                                </p>
                                <div className="bg-white p-6 rounded-lg border border-gray-200">
                                    <h4 className="font-bold text-secondary text-sm mb-2">What's Included:</h4>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        Imported stone masonry, structural glass walls (NanaWall/lift-and-slide), full-home automation (Lutron/Savant), geothermal systems, custom fabrication, and heavy timber framing.
                                    </p>
                                    <p className="text-xs text-gray-400 mt-4 pt-4 border-t border-gray-100">
                                        <strong>Best For:</strong> Legacy estates, complex terrain builds, and clients who refuse to compromise.
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* Mountain Premium */}
                        <div className="mb-16">
                            <h2 className="font-serif text-2xl font-bold text-secondary mb-6 flex items-center gap-3">
                                <TrendingUp className="text-accent" /> The "Mountain Premium": Why Costs Vary
                            </h2>
                            <div className="grid md:grid-cols-3 gap-6">
                                {[
                                    { title: "The 'Trade Commute'", desc: "In many mountain towns, skilled labor must travel 1-2 hours daily. This travel time is factored into labor rates." },
                                    { title: "The Snow Window", desc: "We have a tight building season. Aggressive schedules require more manpower and heating/hoarding costs during winter months." },
                                    { title: "Structural Integrity", desc: "Mountain homes require heavier snow-load roofing, shear walls for high winds, and rigorous wildfire-resistant exterior materials (WUI Codes)." }
                                ].map((item, i) => (
                                    <div key={i} className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                                        <h4 className="font-bold text-secondary mb-2">{item.title}</h4>
                                        <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* The Breakdown */}
                        <div className="mb-16">
                            <h2 className="font-serif text-2xl font-bold text-secondary mb-8">The Breakdown: Where Does the Money Go?</h2>

                            <div className="space-y-6">
                                {/* Hard Costs */}
                                <div className="flex flex-col md:flex-row gap-6 p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
                                    <div className="md:w-1/3 shrink-0">
                                        <h3 className="font-bold text-xl text-secondary mb-1">1. Hard Costs</h3>
                                        <p className="text-sm font-bold text-accent mb-2">(The House Itself)</p>
                                        <p className="text-xs text-gray-500 bg-gray-100 inline-block px-2 py-1 rounded">Typically 70-75% of Budget</p>
                                    </div>
                                    <div className="md:w-2/3">
                                        <p className="text-gray-600 mb-4 text-sm italic">This is the "bricks and sticks."</p>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-700">
                                            <li className="flex items-start gap-2"><CheckCircle size={14} className="mt-1 text-primary shrink-0" /> <span><strong>Lumber & Framing:</strong> The skeleton (stabilized but high).</span></li>
                                            <li className="flex items-start gap-2"><CheckCircle size={14} className="mt-1 text-primary shrink-0" /> <span><strong>Windows & Doors:</strong> High-performance thermal packages.</span></li>
                                            <li className="flex items-start gap-2"><CheckCircle size={14} className="mt-1 text-primary shrink-0" /> <span><strong>Exterior Skin:</strong> Fire-resistant siding, stone, metal.</span></li>
                                            <li className="flex items-start gap-2"><CheckCircle size={14} className="mt-1 text-primary shrink-0" /> <span><strong>Mechanicals:</strong> Radiant heat, HRVs, boilers.</span></li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Soft Costs */}
                                <div className="flex flex-col md:flex-row gap-6 p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
                                    <div className="md:w-1/3 shrink-0">
                                        <h3 className="font-bold text-xl text-secondary mb-1">2. Soft Costs</h3>
                                        <p className="text-sm font-bold text-accent mb-2">(The "Invisible" Expenses)</p>
                                        <p className="text-xs text-gray-500 bg-gray-100 inline-block px-2 py-1 rounded">Typically 10-15% of Budget</p>
                                    </div>
                                    <div className="md:w-2/3">
                                        <p className="text-gray-600 mb-4 text-sm italic">Critical for getting to the starting line.</p>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-700">
                                            <li className="flex items-start gap-2"><CheckCircle size={14} className="mt-1 text-primary shrink-0" /> <span><strong>Architecture & Engineering:</strong> Structural, civil, soils.</span></li>
                                            <li className="flex items-start gap-2"><CheckCircle size={14} className="mt-1 text-primary shrink-0" /> <span><strong>Permits & Fees:</strong> High "Use Tax" ($20k-$50k).</span></li>
                                            <li className="flex items-start gap-2"><CheckCircle size={14} className="mt-1 text-primary shrink-0" /> <span><strong>Builder's Risk Insurance:</strong> Essential coverage.</span></li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Site Development */}
                                <div className="flex flex-col md:flex-row gap-6 p-6 bg-amber-50 border border-amber-100 rounded-xl shadow-sm">
                                    <div className="md:w-1/3 shrink-0">
                                        <h3 className="font-bold text-xl text-secondary mb-1 flex items-center gap-2"><AlertTriangle size={18} className="text-amber-500" /> 3. Site Dev</h3>
                                        <p className="text-sm font-bold text-amber-700 mb-2">(The Wild Card)</p>
                                        <p className="text-xs text-amber-800 bg-amber-100 inline-block px-2 py-1 rounded">Typically 10-20% of Budget</p>
                                    </div>
                                    <div className="md:w-2/3">
                                        <p className="text-gray-600 mb-4 text-sm italic"><strong>This is the number most buyers forget.</strong> Before we pour foundation, we must tame the land.</p>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-700">
                                            <li className="flex items-start gap-2"><CheckCircle size={14} className="mt-1 text-amber-600 shrink-0" /> <span><strong>Excavation & Blasting:</strong> Removing granite/rock.</span></li>
                                            <li className="flex items-start gap-2"><CheckCircle size={14} className="mt-1 text-amber-600 shrink-0" /> <span><strong>Utilities:</strong> Power, gas, fiber from road.</span></li>
                                            <li className="flex items-start gap-2"><CheckCircle size={14} className="mt-1 text-amber-600 shrink-0" /> <span><strong>Well & Septic:</strong> Engineered systems ($30k-$60k).</span></li>
                                            <li className="flex items-start gap-2"><CheckCircle size={14} className="mt-1 text-amber-600 shrink-0" /> <span><strong>Driveways:</strong> Grading steep switchbacks.</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 2025 Outlook */}
                        <div className="bg-gray-900 text-white p-8 rounded-xl mb-12">
                            <h2 className="font-serif text-2xl font-bold mb-4">2025 Market Outlook: Stability & Strategy</h2>
                            <p className="text-gray-300 mb-6 border-b border-gray-700 pb-6">
                                The post-pandemic volatility has cooled, but the "new normal" is here.
                            </p>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="font-bold text-accent mb-2">Supply Chain</h4>
                                    <p className="text-sm text-gray-300">Lead times for custom windows and appliances are still 12-16 weeks. Early ordering is mandatory.</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-accent mb-2">Labor</h4>
                                    <p className="text-sm text-gray-300">The shortage of skilled tradespeople in mountain corridors means the best crews are booked months in advance.</p>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="bg-secondary text-white p-8 md:p-12 rounded-2xl text-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary opacity-20 rounded-full blur-3xl -mr-16 -mt-16"></div>
                            <div className="relative z-10">
                                <h2 className="font-serif text-3xl font-bold mb-4">The "Clarity Consultation"</h2>
                                <p className="text-xl font-bold text-white mb-2">Stop guessing and start planning.</p>
                                <p className="text-gray-300 mb-8 max-w-lg mx-auto">
                                    A generic cost-per-square-foot is only a starting point. Your actual cost depends on <strong>your specific lot</strong>. During our consultation, we will review your land for "Red Flag" site costs and align your wish list with the Three Tiers.
                                </p>
                                <Link to="/application">
                                    <Button variant="primary" className="bg-accent text-secondary hover:bg-white hover:text-secondary border-none h-14 text-lg px-8">
                                        Apply for a Consultation <ArrowRight size={18} className="ml-2" />
                                    </Button>
                                </Link>
                                <p className="text-xs text-gray-400 mt-4 uppercase tracking-widest">Limited availability for 2025 starts.</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </FunnelLayout>
    );
};
