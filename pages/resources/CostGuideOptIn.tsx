import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, ArrowRight, Download, Lock } from 'lucide-react';
import { FunnelLayout } from '../../layouts/FunnelLayout';
import { Button } from '../../components/Button';

export const CostGuideOptIn: React.FC = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const webhookUrl = import.meta.env.VITE_LEAD_MAGNET_WEBHOOK_URL;
            if (webhookUrl) {
                await fetch(webhookUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        ...formData,
                        source: "Cost Guide Opt-in"
                    })
                });
            }

            // Grant Access
            sessionStorage.setItem('unlocked_cost_guide', 'true');

            // Redirect
            navigate('/resources/cost-guide');

        } catch (error) {
            console.error('Submission error:', error);
            // Fallback: still grant access
            sessionStorage.setItem('unlocked_cost_guide', 'true');
            navigate('/resources/cost-guide');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <FunnelLayout>
            <div className="container mx-auto px-4 py-12 md:py-20">
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-6xl mx-auto flex flex-col md:flex-row">

                    {/* Left Side (Value) */}
                    <div className="md:w-1/2 p-8 md:p-12 bg-secondary text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-primary opacity-10 rounded-full blur-3xl"></div>

                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                                <Download size={14} />
                                Free Resource
                            </div>

                            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 leading-tight">
                                Stop Guessing. <br />
                                <span className="text-accent">Know the Real Cost.</span>
                            </h1>

                            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                                Building a custom home in the Colorado mountains involves more than just price per square foot. Get our 2025 Cost Guide to uncover hidden fees, site work estimates, and realistic budget tiers.
                            </p>

                            <div className="space-y-4 mb-8">
                                {[
                                    "Breakdown of Hard Costs vs. Soft Costs",
                                    "Site Development Estimates for Mountain Lots",
                                    "Three Tiered Budget Examples"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="mt-1 bg-accent/20 p-1 rounded-full">
                                            <Check size={16} className="text-accent" />
                                        </div>
                                        <span className="text-gray-200">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex items-center gap-4 text-sm text-gray-400">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="w-8 h-8 rounded-full bg-gray-600 border-2 border-secondary"></div>
                                    ))}
                                </div>
                                <p>Downloaded by 500+ homeowners</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side (Form) */}
                    <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-gray-50">
                        <div className="max-w-md mx-auto w-full">
                            <div className="mb-8 text-center md:text-left">
                                <h2 className="font-serif text-2xl font-bold text-secondary mb-2">Unlock the Cost Guide</h2>
                                <p className="text-gray-500 text-sm">Enter your details below to get instant access.</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-xs font-bold uppercase text-gray-400 mb-1">First Name</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary outline-none"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase text-gray-400 mb-1">Email Address</label>
                                    <input
                                        type="email"
                                        required
                                        className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary outline-none"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase text-gray-400 mb-1">Phone (Optional)</label>
                                    <input
                                        type="tel"
                                        className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary outline-none"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    fullWidth
                                    isLoading={isSubmitting}
                                    className="h-14 text-lg"
                                >
                                    Get Instant Access <ArrowRight size={18} className="ml-2" />
                                </Button>

                                <div className="flex items-center justify-center gap-2 text-xs text-gray-400 mt-4">
                                    <Lock size={12} />
                                    <span>Your information is secure. No spam.</span>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </FunnelLayout>
    );
};
