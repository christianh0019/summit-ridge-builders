import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { SEO } from '../../components/SEO';
import { FunnelLayout } from '../../layouts/FunnelLayout';
import { Button } from '../../components/Button';
import { ArrowRight, Info, CheckCircle } from 'lucide-react';

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
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                            Transparency is our core value. Below is a realistic breakdown of what it takes to build a legacy home in the mountains today.
                        </p>
                    </div>
                </div>

                {/* Content */}
                <div className="container mx-auto px-4 py-12 -mt-8">
                    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl p-8 md:p-12 border border-gray-100">

                        <div className="prose prose-lg max-w-none text-gray-600 mb-12">
                            <h2 className="font-serif text-secondary">Understanding the Sticker Price</h2>
                            <p>
                                Many builders quote a low "base price" that excludes site work, permits, and design fees.
                                We believe in giving you the full picture. Our projects typically fall into three tiers based on finishes and complexity.
                            </p>
                        </div>

                        {/* Cost Table */}
                        <div className="overflow-x-auto mb-12">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b-2 border-gray-100">
                                        <th className="py-4 px-4 font-serif text-secondary text-xl">Tier</th>
                                        <th className="py-4 px-4 font-serif text-secondary text-xl">Price Range (Per Sq. Ft.)</th>
                                        <th className="py-4 px-4 font-serif text-secondary text-xl">What's Included</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr className="bg-gray-50/50">
                                        <td className="py-6 px-4 font-bold text-gray-800">Review</td>
                                        <td className="py-6 px-4 text-primary font-bold">$350 - $450</td>
                                        <td className="py-6 px-4 text-sm">Semi-custom finishes, standard appliance package, simplified rooflines.</td>
                                    </tr>
                                    <tr>
                                        <td className="py-6 px-4 font-bold text-gray-800">Refine</td>
                                        <td className="py-6 px-4 text-primary font-bold">$450 - $600</td>
                                        <td className="py-6 px-4 text-sm">Hardwood throughout, custom cabinetry, smart home basics, timber accents.</td>
                                    </tr>
                                    <tr className="bg-gray-50/50">
                                        <td className="py-6 px-4 font-bold text-gray-800">Reinvet</td>
                                        <td className="py-6 px-4 text-primary font-bold">$600+</td>
                                        <td className="py-6 px-4 text-sm">Imported stone, structural glass walls, full automation, complex engineering.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Hard vs Soft Costs */}
                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div className="bg-blue-50 p-8 rounded-xl">
                                <h3 className="font-serif text-xl font-bold text-secondary mb-4 flex items-center gap-2">
                                    <Info size={20} className="text-primary" /> Hard Costs (Construction)
                                </h3>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>• Lumber & Framing Materials</li>
                                    <li>• Foundation & Concrete</li>
                                    <li>• Windows & Doors</li>
                                    <li>• Roofing & Siding</li>
                                    <li>• Interior Finishes (Flooring, Cabinets)</li>
                                    <li>• labor for all trades</li>
                                </ul>
                            </div>
                            <div className="bg-gray-50 p-8 rounded-xl">
                                <h3 className="font-serif text-xl font-bold text-secondary mb-4 flex items-center gap-2">
                                    <Info size={20} className="text-gray-400" /> Soft Costs (Often Forgotten)
                                </h3>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>• Architecture & Engineering (~5-10%)</li>
                                    <li>• Permits & Tap Fees ($20k - $50k+)</li>
                                    <li>• Soil Testing & Surveying</li>
                                    <li>• Utility Connections</li>
                                    <li>• Builder's Risk Insurance</li>
                                </ul>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="bg-secondary text-white p-8 md:p-12 rounded-2xl text-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary opacity-20 rounded-full blur-3xl -mr-16 -mt-16"></div>
                            <div className="relative z-10">
                                <h2 className="font-serif text-3xl font-bold mb-4">Ready to build your budget?</h2>
                                <p className="text-gray-300 mb-8 max-w-lg mx-auto">
                                    The next step is a Clarity Consultation where we review your specific lot and vision to create a custom feasibility analysis.
                                </p>
                                <Link to="/application">
                                    <Button variant="primary" className="bg-accent text-secondary hover:bg-white hover:text-secondary border-none">
                                        Apply for a Consultation <ArrowRight size={18} className="ml-2" />
                                    </Button>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </FunnelLayout>
    );
};
