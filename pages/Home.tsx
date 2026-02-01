import React, { useState } from 'react';
import { COMPANY_INFO, SERVICES, PROCESS_STEPS, PROJECTS, FAQ_ITEMS } from '../constants';
import { Button } from '../components/Button';
import { ArrowRight, Star, Clock, Shield, Plus, Minus, MapPin } from 'lucide-react';

export const Home: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className="w-full overflow-x-hidden">
      
      {/* -----------------------------------------------------------------------
          SECTION 1: THE AUTHORITY HERO
          Constraint: Must include Primary Keyword & Location in H1
      ----------------------------------------------------------------------- */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://storage.googleapis.com/msgsndr/cG3cesDKIajoyQPNPYZK/media/6931d06981eaa182fc7d14ef.jpg" 
            alt="Luxury Custom Home in Estes Park" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-secondary/40 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent opacity-90"></div>
        </div>

        <div className="container relative z-10 px-4 text-center md:text-left pt-20">
          <div className="max-w-4xl mx-auto md:mx-0">
            <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-white text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
              {COMPANY_INFO.tagline}
            </span>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Custom Home Builder in <br className="hidden md:block" />
              <span className="text-accent italic">Estes Park</span> & Northern Colorado
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl font-light leading-relaxed">
              We design and build legacy mountain homes for families who demand craftsmanship, transparency, and architectural excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button onClick={() => window.location.href = '#contact'}>
                Start Your Project
              </Button>
              <Button variant="white" onClick={() => window.location.href = '#portfolio'}>
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------------------------
          SECTION 2: SERVICE SEGMENTATION
          Purpose: Rapidly direct users to their need
      ----------------------------------------------------------------------- */}
      <section id="services" className="py-20 bg-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-secondary mb-4">Crafting Your Mountain Legacy</h2>
            <div className="h-1 w-20 bg-accent mx-auto mb-6"></div>
            <p className="text-gray-600">
              Whether you are building from the ground up or reimagining an existing space, our specialized teams ensure a seamless delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 group border-b-4 border-transparent hover:border-primary">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl font-bold text-secondary mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>
                <a href={`#${service.slug}`} className="inline-flex items-center text-primary font-bold text-sm tracking-wide group-hover:translate-x-1 transition-transform">
                  LEARN MORE <ArrowRight size={14} className="ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------------------------
          SECTION 3: PROCESS (Anxiety Reduction)
          Purpose: Prove organization and safety
      ----------------------------------------------------------------------- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
            {/* Left Content */}
            <div className="md:w-1/3">
              <span className="text-accent font-bold tracking-widest text-xs uppercase mb-2 block">Our Methodology</span>
              <h2 className="font-serif text-4xl font-bold text-secondary mb-6">The Summit Ridge Standard</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Building a custom home can feel overwhelming. We have refined our process over 25+ years to ensure clarity, budget control, and peace of mind from the first sketch to the final key turn.
              </p>
              <Button variant="outline">Download Cost Guide</Button>
            </div>

            {/* Right Steps */}
            <div className="md:w-2/3">
              <div className="space-y-8">
                {PROCESS_STEPS.map((step, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-light text-secondary font-serif font-bold text-xl group-hover:bg-primary group-hover:text-white transition-colors">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-secondary mb-2">{step.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------------------------
          SECTION 4: PORTFOLIO (Visual Proof)
          Purpose: Create Desire
      ----------------------------------------------------------------------- */}
      <section id="portfolio" className="py-24 bg-secondary text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
              <p className="text-gray-400 max-w-xl">
                Explore a selection of our recent custom homes in Loveland, Boulder, and Estes Park.
              </p>
            </div>
            <div className="hidden md:block">
              <Button variant="white">View All Projects</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <div key={project.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg aspect-[4/3] mb-6">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute bottom-4 left-4 z-20 bg-white/90 backdrop-blur text-secondary px-3 py-1 text-xs font-bold uppercase rounded">
                    {project.location}
                  </div>
                </div>
                <h3 className="font-serif text-2xl font-bold mb-2 group-hover:text-accent transition-colors">{project.name}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.features.map((feat, i) => (
                    <span key={i} className="text-xs border border-gray-700 text-gray-300 px-2 py-1 rounded-full">
                      {feat}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 md:hidden text-center">
             <Button variant="white">View All Projects</Button>
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------------------------
          SECTION 5: TRUST & HERITAGE
          Purpose: Prove longevity
      ----------------------------------------------------------------------- */}
      <section id="about" className="py-20 bg-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-96 lg:h-auto">
                 <img 
                    src="https://picsum.photos/id/1/1000/1000" 
                    alt="John Reynolds, Founder" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
              </div>
              <div className="p-10 lg:p-20 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-6">
                  <Star className="text-accent fill-current" size={20} />
                  <span className="font-bold text-secondary uppercase tracking-widest text-sm">Since {COMPANY_INFO.foundingYear}</span>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-secondary mb-6">
                  More Than Just a Builder
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "I started as a framing carpenter in 1995 with a simple belief: transparency builds better homes. Today, Summit Ridge is built on the same foundation. We don't just pour concrete; we build trust through clear communication, net-15 trade payments, and a warranty that actually means something."
                </p>
                <div>
                  <p className="font-serif text-xl font-bold text-secondary">John Reynolds</p>
                  <p className="text-primary text-sm font-bold uppercase">Founder & Principal</p>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mt-10 pt-10 border-t border-gray-100">
                  <div>
                    <span className="block text-3xl font-serif font-bold text-secondary">28+</span>
                    <span className="text-xs text-gray-500 uppercase">Years Exp.</span>
                  </div>
                  <div>
                    <span className="block text-3xl font-serif font-bold text-secondary">450+</span>
                    <span className="text-xs text-gray-500 uppercase">Homes Built</span>
                  </div>
                  <div>
                    <span className="block text-3xl font-serif font-bold text-secondary">A+</span>
                    <span className="text-xs text-gray-500 uppercase">BBB Rating</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------------------------
          SECTION 6: LOCAL SEO DATA LAYER (FAQ)
          Purpose: Answer Box Ranking & Long-tail keywords
      ----------------------------------------------------------------------- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-secondary mb-4">Common Questions</h2>
            <p className="text-gray-600">Straight answers about building in Northern Colorado.</p>
          </div>

          <div className="space-y-4">
            {FAQ_ITEMS.map((item, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
                <button 
                  className="w-full flex items-center justify-between p-6 bg-gray-50 hover:bg-white transition-colors text-left"
                  onClick={() => toggleFaq(idx)}
                >
                  <span className="font-bold text-secondary">{item.question}</span>
                  {openFaq === idx ? <Minus size={20} className="text-primary" /> : <Plus size={20} className="text-primary" />}
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaq === idx ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
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
          SECTION 7: FINAL CONVERSION POINT
          Purpose: Strong contrast, Direct Instruction
      ----------------------------------------------------------------------- */}
      <section id="contact" className="py-24 bg-primary text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Ready to Build Your Vision?</h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            Schedule a complimentary Discovery Session to discuss your land, budget, and design ideas with our team.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button variant="white" className="min-w-[200px] h-14 text-lg">
              Book Consultation
            </Button>
            <div className="flex items-center gap-3">
              <span className="text-blue-200">or call us at</span>
              <a href={`tel:${COMPANY_INFO.phone}`} className="text-2xl font-serif font-bold hover:text-accent transition-colors">
                {COMPANY_INFO.phone}
              </a>
            </div>
          </div>

          <p className="mt-8 text-sm text-blue-200 opacity-80">
            Serving Estes Park, Loveland, Boulder & Fort Collins
          </p>
        </div>
      </section>

    </main>
  );
};