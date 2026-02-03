import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Check, AlertCircle } from 'lucide-react';
import { Button } from './Button';

interface SurveyData {
    projectType: string;
    location: string;
    timeline: string;
    budget: string;
    motivation: string;
    name: string;
    email: string;
    phone: string;
}

export const ApplicationSurvey: React.FC = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [disqualified, setDisqualified] = useState(false);

    const [formData, setFormData] = useState<SurveyData>({
        projectType: '',
        location: '',
        timeline: '',
        budget: '',
        motivation: '',
        name: '',
        email: '',
        phone: ''
    });

    const totalSteps = 7;
    const progress = (step / totalSteps) * 100;

    const handleNext = () => {
        // Disqualification Logic
        if (step === 4 && formData.budget === 'Under $500k') {
            setDisqualified(true);
            return;
        }
        if (step === 5 && formData.motivation === 'Just price shopping') {
            setDisqualified(true);
            return;
        }

        if (step < totalSteps) {
            setStep(step + 1);
        } else {
            handleSubmit();
        }
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);

        // Simulate API Call / Webhook
        // const webhookUrl = import.meta.env.VITE_WEBHOOK_URL;
        // await fetch(webhookUrl, { method: 'POST', body: JSON.stringify(formData) });

        setTimeout(() => {
            setIsSubmitting(false);
            navigate(`/booking?email=${encodeURIComponent(formData.email)}`);
        }, 1500);
    };

    const updateField = (field: keyof SurveyData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    if (disqualified) {
        return (
            <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-md mx-auto border-t-4 border-red-500">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 text-red-500">
                    <AlertCircle size={32} />
                </div>
                <h3 className="font-serif text-2xl font-bold text-secondary mb-4">We might not be the best fit.</h3>
                <p className="text-gray-600 mb-6">
                    Based on your answers, our services may not align with your current project needs. We specialize in custom builds starting at $750k.
                </p>
                <Button variant="outline" onClick={() => window.location.href = '/'}>Return to Home</Button>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-2xl mx-auto w-full">
            {/* Progress Bar */}
            <div className="h-2 bg-gray-100 w-full">
                <div
                    className="h-full bg-accent transition-all duration-500 ease-out"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>

            <div className="p-8 md:p-12">
                <div className="mb-8">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Step {step} of {totalSteps}</span>
                </div>

                {/* Step 1: Project Type */}
                {step === 1 && (
                    <div className="space-y-6">
                        <h2 className="font-serif text-3xl font-bold text-secondary">What kind of project are you planning?</h2>
                        <div className="grid grid-cols-1 gap-4">
                            {['New Custom Home', 'Luxury Remodel', 'Addition / Expansion', 'Other'].map(opt => (
                                <button
                                    key={opt}
                                    onClick={() => { updateField('projectType', opt); handleNext(); }}
                                    className={`p-4 rounded-lg border-2 text-left transition-all hover:border-primary hover:bg-blue-50 flex justify-between items-center ${formData.projectType === opt ? 'border-primary bg-blue-50' : 'border-gray-100'}`}
                                >
                                    <span className="font-bold text-gray-700">{opt}</span>
                                    {formData.projectType === opt && <Check size={20} className="text-primary" />}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Step 2: Location */}
                {step === 2 && (
                    <div className="space-y-6">
                        <h2 className="font-serif text-3xl font-bold text-secondary">Where is the property located?</h2>
                        <p className="text-gray-500">We currently serve Estes Park, Boulder, Loveland, and surrounding areas.</p>
                        <input
                            type="text"
                            placeholder="City or Zip Code"
                            className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-lg"
                            value={formData.location}
                            onChange={(e) => updateField('location', e.target.value)}
                        />
                        <Button onClick={handleNext} disabled={!formData.location} fullWidth>Next Step <ArrowRight size={16} className="ml-2" /></Button>
                    </div>
                )}

                {/* Step 3: Timeline */}
                {step === 3 && (
                    <div className="space-y-6">
                        <h2 className="font-serif text-3xl font-bold text-secondary">When are you hoping to break ground?</h2>
                        <div className="grid grid-cols-1 gap-4">
                            {['ASAP (0-3 months)', '3-6 months', '6-12 months', 'Just researching'].map(opt => (
                                <button
                                    key={opt}
                                    onClick={() => { updateField('timeline', opt); handleNext(); }}
                                    className={`p-4 rounded-lg border-2 text-left transition-all hover:border-primary hover:bg-blue-50 flex justify-between items-center ${formData.timeline === opt ? 'border-primary bg-blue-50' : 'border-gray-100'}`}
                                >
                                    <span className="font-bold text-gray-700">{opt}</span>
                                    {formData.timeline === opt && <Check size={20} className="text-primary" />}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Step 4: Budget (Filter) */}
                {step === 4 && (
                    <div className="space-y-6">
                        <h2 className="font-serif text-3xl font-bold text-secondary">What is your estimated budget?</h2>
                        <p className="text-gray-500">Including land acquisition if applicable.</p>
                        <div className="grid grid-cols-1 gap-4">
                            {['Under $500k', '$750k - $1M', '$1M - $2M', '$2M+'].map(opt => (
                                <button
                                    key={opt}
                                    onClick={() => { updateField('budget', opt); handleNext(); }}
                                    className={`p-4 rounded-lg border-2 text-left transition-all hover:border-primary hover:bg-blue-50 flex justify-between items-center ${formData.budget === opt ? 'border-primary bg-blue-50' : 'border-gray-100'}`}
                                >
                                    <span className="font-bold text-gray-700">{opt}</span>
                                    {formData.budget === opt && <Check size={20} className="text-primary" />}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Step 5: Motivation (Filter) */}
                {step === 5 && (
                    <div className="space-y-6">
                        <h2 className="font-serif text-3xl font-bold text-secondary">What is your main priority right now?</h2>
                        <div className="grid grid-cols-1 gap-4">
                            {[
                                'Finding a builder I can trust',
                                'Understanding if my budget works',
                                'Just price shopping',
                                'Ready to start design'
                            ].map(opt => (
                                <button
                                    key={opt}
                                    onClick={() => { updateField('motivation', opt); handleNext(); }}
                                    className={`p-4 rounded-lg border-2 text-left transition-all hover:border-primary hover:bg-blue-50 flex justify-between items-center ${formData.motivation === opt ? 'border-primary bg-blue-50' : 'border-gray-100'}`}
                                >
                                    <span className="font-bold text-gray-700">{opt}</span>
                                    {formData.motivation === opt && <Check size={20} className="text-primary" />}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Step 6: Contact Info */}
                {step === 6 && (
                    <div className="space-y-6">
                        <h2 className="font-serif text-3xl font-bold text-secondary">Almost done. Who are we speaking with?</h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold uppercase text-gray-400 mb-1">Full Name</label>
                                <input
                                    type="text"
                                    className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary outline-none"
                                    value={formData.name}
                                    onChange={(e) => updateField('name', e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase text-gray-400 mb-1">Email Address</label>
                                <input
                                    type="email"
                                    className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary outline-none"
                                    value={formData.email}
                                    onChange={(e) => updateField('email', e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase text-gray-400 mb-1">Phone Number</label>
                                <input
                                    type="tel"
                                    className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary outline-none"
                                    value={formData.phone}
                                    onChange={(e) => updateField('phone', e.target.value)}
                                />
                            </div>
                        </div>
                        <Button
                            onClick={handleNext}
                            disabled={!formData.name || !formData.email || !formData.phone}
                            fullWidth
                        >
                            Final Step <ArrowRight size={16} className="ml-2" />
                        </Button>
                    </div>
                )}

                {/* Step 7: Review & Submit */}
                {step === 7 && (
                    <div className="space-y-6 text-center">
                        <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto text-green-600 mb-4">
                            <Check size={40} />
                        </div>
                        <h2 className="font-serif text-3xl font-bold text-secondary">Ready to Submit?</h2>
                        <p className="text-gray-500 max-w-md mx-auto">
                            We've gathered your project details. Click below to submit your application and schedule your clarity consultation.
                        </p>
                        <div className="bg-gray-50 p-6 rounded-lg text-left text-sm text-gray-600 max-w-sm mx-auto mb-6">
                            <p><strong>Project:</strong> {formData.projectType}</p>
                            <p><strong>Location:</strong> {formData.location}</p>
                            <p><strong>Budget:</strong> {formData.budget}</p>
                        </div>
                        <Button
                            onClick={handleSubmit}
                            isLoading={isSubmitting}
                            fullWidth
                            className="h-16 text-xl"
                        >
                            Submit Application
                        </Button>
                    </div>
                )}

            </div>
        </div>
    );
};
