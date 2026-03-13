import React, { useState, useEffect } from 'react';
import { 
  Globe2, 
  ShieldCheck, 
  Zap, 
  ArrowRight, 
  LineChart, 
  Cpu, 
  Microscope, 
  Bot, 
  Mail, 
  Linkedin, 
  MapPin, 
  Quote, 
  CheckCircle2, 
  Trophy,
  Calendar,
  BarChart3,
  Network,
  Users,
  Layers,
  Target
} from 'lucide-react';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeStory, setActiveStory] = useState(0);

  const portfolioStories = [
    {
      startup: "Invigilo AI",
      sector: "Safety Intelligence",
      impact: "Significant Incident Reduction",
      metric: "High-Accuracy Real-Time Detection",
      quote: "SafeKey™ fosters a safety culture at our worksite, promoting individual accountability and enhancing overall measures effectively.",
      author: "HSE R&D Manager, Saipem",
      bg: "bg-blue-600"
    },
    {
      startup: "Devol Robots",
      sector: "Physical AI",
      impact: "Rapid SKU Onboarding",
      metric: "Micron-Level Tactile Precision",
      quote: "We solved the 'Tactile Gap.' Devol allows us to automate high-mix assembly that standard vision-only robotics simply can't handle.",
      author: "Sze Yuan, CEO",
      bg: "bg-slate-900"
    },
    {
      startup: "InPipe Energy",
      sector: "Renewable Infrastructure",
      impact: "High System Availability",
      metric: "Scalable Basalt Energy Revenue",
      quote: "We turn a force utilities already pay to manage into carbon-free baseload power. It's a fundamental shift in infrastructure economics.",
      author: "Gregg Semler, Founder",
      bg: "bg-emerald-600"
    }
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    const interval = setInterval(() => {
      setActiveStory((prev) => (prev + 1) % portfolioStories.length);
    }, 8000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, [portfolioStories.length]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-white/95 py-3 shadow-md backdrop-blur-md' : 'bg-transparent py-6'}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <div className="relative group">
              <img 
                src="B71 Logo.png" 
                alt="BLOCK71" 
                className="h-12 w-auto object-contain transition-all duration-500 group-hover:scale-110 drop-shadow-md"
                style={{ minWidth: '45px' }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden h-12 w-12 items-center justify-center rounded-xl bg-blue-600 font-black text-white text-2xl shadow-lg">B</div>
            </div>
            
            <div className="h-8 w-px bg-slate-200 hidden sm:block"></div>
            <span className="text-xl font-black tracking-tight text-slate-900 flex flex-col leading-none text-left font-sans">
              <span className="text-blue-600 uppercase tracking-tighter">BLOCK71</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500">Silicon Valley</span>
            </span>
          </div>
          <div className="hidden items-center gap-8 md:flex">
            <a href="#solutions" className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">Solutions</a>
            <a href="#membership" className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">Membership</a>
            <a href="#portfolio" className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">Impact</a>
            <a href="#contact" className="rounded-full bg-blue-600 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-200 transition-all hover:bg-blue-700 active:scale-95 font-sans">
              Enquire Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#eff6ff_0%,transparent_40%)]" />
        <div className="absolute top-1/4 right-0 h-96 w-96 rounded-full bg-blue-50 blur-[100px] opacity-60 animate-pulse" />
        
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-5 py-2 text-[10px] font-black uppercase tracking-widest text-blue-700 shadow-sm font-sans">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600"></span>
            </span>
            The Industrial AI Commercialization Gateway
          </div>
          <h1 className="mb-6 text-5xl font-black tracking-tight text-slate-900 sm:text-7xl lg:text-8xl leading-[1.05]">
            Bridging Asian Innovation <br />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent font-black">to U.S. Enterprise</span>
          </h1>
          <p className="mx-auto mb-12 max-w-2xl text-lg text-slate-500 sm:text-xl leading-relaxed font-medium font-sans">
            We turn ecosystem signals into commercial outcomes. Connecting global corporate leaders with high-barrier startups through an outcome-aligned execution engine.
          </p>
          <div className="flex flex-col items-center justify-center gap-5 sm:flex-row">
            <a href="#contact" className="flex w-full items-center justify-center gap-3 rounded-2xl bg-slate-900 px-10 py-5 text-lg font-bold text-white transition-all hover:bg-slate-800 hover:shadow-2xl active:scale-95 sm:w-auto text-center font-sans">
              Schedule a Strategy Call <Calendar className="h-5 w-5" />
            </a>
            <a href="#portfolio" className="flex w-full items-center justify-center gap-3 rounded-2xl border-2 border-slate-100 bg-white px-10 py-5 text-lg font-bold transition-all hover:bg-slate-50 active:scale-95 sm:w-auto text-slate-600 text-center font-sans">
              Explore Our Portfolio
            </a>
          </div>
        </div>
      </section>

      {/* Strategic Verticals */}
      <section className="py-32 bg-slate-50" id="solutions">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-20 max-w-3xl text-left">
            <h2 className="mb-6 text-4xl font-black text-slate-900 tracking-tight font-sans">Core Strategic Verticals</h2>
            <p className="text-xl text-slate-500 font-medium leading-relaxed font-sans">
              We specialize in high-barrier technology sectors where technical excellence translates directly to infrastructure modernization and operational efficiency.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3 text-left">
            {[
              { 
                title: "Physical AI", 
                icon: <Bot className="h-10 w-10 text-blue-600" />,
                desc: "Foundation models and edge autonomy designed to master tactile intelligence in complex industrial environments."
              },
              { 
                title: "MatSci & Semiconductors", 
                icon: <Cpu className="h-10 w-10 text-emerald-600" />,
                desc: "Next-gen interconnects and fabless R&D leveraging Singapore's role as a neutral, high-precision testing bed."
              },
              { 
                title: "Biotech & Healthcare", 
                icon: <Microscope className="h-10 w-10 text-rose-600" />,
                desc: "AI-driven discovery and advanced surgical robotics re-engineering the future of patient care and bio-manufacturing."
              }
            ].map((pillar, i) => (
              <div key={i} className="group relative rounded-[2.5rem] bg-white p-12 shadow-sm transition-all hover:-translate-y-2 hover:shadow-2xl border border-slate-100 font-sans">
                <div className="mb-8 inline-flex rounded-3xl bg-slate-50 p-5 text-slate-900 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  {pillar.icon}
                </div>
                <h3 className="mb-4 text-2xl font-black tracking-tight font-sans">{pillar.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium font-sans">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-32 bg-white" id="portfolio">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-20 text-center">
            <h2 className="mb-4 text-4xl font-black text-slate-900 tracking-tight">Portfolio Impact</h2>
            <p className="text-slate-500 text-lg font-medium">Outcome-driven validation from the BLOCK71 SV ecosystem.</p>
          </div>

          <div className="relative font-sans">
            {portfolioStories.map((story, i) => (
              <div 
                key={i} 
                className={`transition-all duration-1000 ${i === activeStory ? 'opacity-100 translate-y-0 relative' : 'opacity-0 translate-y-20 absolute inset-0 pointer-events-none'}`}
              >
                <div className={`rounded-[3.5rem] ${story.bg} p-10 lg:p-24 text-white shadow-3xl flex flex-col lg:flex-row items-center gap-20 overflow-hidden relative font-sans`}>
                  <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none text-white">
                    <Globe2 className="h-80 w-80" />
                  </div>
                  
                  <div className="lg:w-3/5 relative z-10">
                    <div className="mb-8 flex items-center gap-4">
                      <div className="bg-white/20 p-2.5 rounded-xl backdrop-blur-md text-white">
                        <Trophy className="h-6 w-6 text-white" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/70 font-sans">{story.startup} • {story.sector}</span>
                    </div>
                    <h3 className="mb-10 text-4xl font-black leading-[1.1] sm:text-6xl tracking-tighter font-sans">
                      {story.impact} <br />
                      <span className="text-white/40">{story.metric}</span>
                    </h3>
                    <div className="relative mb-12 max-w-xl">
                      <Quote className="absolute -left-12 -top-8 h-20 w-20 text-white/10 font-sans" />
                      <p className="text-2xl italic leading-relaxed text-white/90 relative z-10 font-medium font-sans">
                        "{story.quote}"
                      </p>
                    </div>
                    <div className="flex items-center gap-5 border-t border-white/20 pt-10 font-sans text-left">
                      <div className="h-16 w-16 rounded-2xl bg-white/20 backdrop-blur-lg flex items-center justify-center font-black text-3xl font-sans text-white">
                        {story.author?.[0] || "B"}
                      </div>
                      <div>
                        <div className="font-black text-xl font-sans text-white">{story.author}</div>
                        <div className="text-sm text-white/50 font-bold uppercase tracking-widest font-sans">Portfolio Partner</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:w-2/5 w-full relative z-10 text-left">
                    <div className="grid grid-cols-1 gap-6 font-sans">
                       <div className="rounded-[2rem] bg-white/10 p-10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all cursor-default group">
                          <CheckCircle2 className="mb-6 h-12 w-12 text-blue-300 group-hover:scale-110 transition-transform font-sans" />
                          <h4 className="text-xl font-black mb-3 text-white font-sans leading-tight">Enterprise Pilot Secured</h4>
                          <p className="text-white/70 font-medium leading-relaxed font-sans">Secured validation with Tier-1 U.S. industrial partners through our direct scouting network.</p>
                       </div>
                       <div className="rounded-[2rem] bg-white/10 p-10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all cursor-default group">
                          <LineChart className="mb-6 h-12 w-12 text-blue-300 group-hover:scale-110 transition-transform font-sans" />
                          <h4 className="text-xl font-black mb-3 text-white font-sans leading-tight">Accelerated GTM Timeline</h4>
                          <p className="text-white/70 font-medium leading-relaxed font-sans">Compressed U.S. market entry cycle by aligning research outcomes with enterprise problem statements.</p>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="mt-16 flex justify-center gap-4">
              {portfolioStories.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => setActiveStory(i)}
                  className={`h-2.5 transition-all duration-500 rounded-full ${i === activeStory ? 'w-24 bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.4)]' : 'w-2.5 bg-slate-200 font-sans'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Membership Section */}
      <section className="py-32 bg-slate-50 font-sans" id="membership">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-20 lg:flex-row lg:items-start font-sans">
            <div className="lg:w-1/2 lg:sticky lg:top-32 font-sans text-left">
              <h2 className="mb-8 text-5xl font-black text-slate-900 leading-[1.1] tracking-tight font-sans">
                Corporate Innovation <br />
                <span className="text-blue-600">Membership Model</span>
              </h2>
              <p className="mb-12 text-xl text-slate-600 font-medium leading-relaxed font-sans">
                Strategic access to emerging technology ecosystems. We filter the noise of the valley to deliver actionable intelligence to your business units.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: <BarChart3 className="h-5 w-5" />, text: "Curated dealflow aligned to your technical roadmap" },
                  { icon: <Network className="h-5 w-5" />, text: "Closed-door sectoral roundtables (SF & Singapore)" },
                  { icon: <ShieldCheck className="h-5 w-5" />, text: "Structured pilot facilitation and commercial de-risking" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-5 text-slate-800 font-bold group font-sans">
                    <div className="rounded-2xl bg-white p-3 text-blue-600 shadow-sm border border-slate-100 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      {item.icon}
                    </div>
                    <span className="text-lg font-sans">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2 space-y-6">
              {[
                { tier: "Ecosystem Access", feature: "Visibility", target: "Innovation & Strategy Teams", benefit: "High-signal visibility into emerging Asian and U.S. deep tech through curated reports and networking." },
                { tier: "Innovation Partner", feature: "Action", target: "CVC & R&D Units", benefit: "Active technology scouting, hosted roundtables, and direct introductions to pilot-ready startups.", featured: true },
                { tier: "Strategic Partner", feature: "Deployment", target: "BU Leaders & COOs", benefit: "Full-cycle pilot facilitation, bespoke technology evaluations, and global cross-border program participation." }
              ].map((plan, i) => (
                <div key={i} className={`rounded-[2.5rem] border-2 p-10 transition-all group ${plan.featured ? 'border-blue-600 bg-white shadow-2xl shadow-blue-100/50 scale-[1.02]' : 'border-slate-200 bg-white/50 hover:bg-white'} font-sans text-left`}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-5">
                    <div>
                      <span className={`text-[10px] font-black uppercase tracking-[0.4em] mb-2 block ${plan.featured ? 'text-blue-600' : 'text-slate-400'}`}>{plan.feature} Tier</span>
                      <h3 className="text-3xl font-black text-slate-900 leading-tight font-sans">{plan.tier}</h3>
                    </div>
                    <a href="#contact" className={`rounded-2xl px-8 py-4 text-sm font-black transition-all text-center uppercase tracking-widest ${plan.featured ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200 font-sans' : 'bg-slate-100 text-slate-700 hover:bg-slate-200 font-sans'}`}>
                      Request Briefing
                    </a>
                  </div>
                  <div className="flex items-center gap-3 mb-6 bg-slate-50 w-fit px-4 py-2 rounded-xl text-slate-500 font-black text-xs uppercase">
                    <Users className="h-4 w-4" />
                    <span>For: {plan.target}</span>
                  </div>
                  <p className="text-slate-500 font-medium leading-relaxed text-lg font-sans">{plan.benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Commercialization Engine */}
      <section className="py-32 bg-slate-900 text-white relative font-sans" id="startups">
        <div className="absolute top-0 right-0 w-1/4 h-full bg-blue-600/10 blur-[150px] pointer-events-none" />
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-24 text-center">
            <h2 className="mb-6 text-5xl font-black text-white tracking-tight font-sans">The Commercialization Engine</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-xl font-medium italic opacity-80 leading-relaxed font-sans">
              "We don't just accelerate startups; we systemize their entry into the U.S. enterprise environment."
            </p>
          </div>
          
          <div className="grid gap-20 lg:grid-cols-2 lg:items-center text-white font-sans">
            <div className="rounded-[3.5rem] border border-white/10 bg-white/5 p-12 lg:p-16 backdrop-blur-xl relative group overflow-hidden text-left">
              <div className="absolute -top-20 -left-20 h-64 w-64 bg-blue-500/20 blur-[100px] group-hover:bg-blue-500/30 transition-colors" />
              
              <div className="mb-12 flex items-center gap-6">
                <div className="rounded-[1.5rem] bg-blue-600/30 p-5 border border-blue-500/20 text-blue-400">
                  <Zap className="h-10 w-10 font-sans" />
                </div>
                <h3 className="text-4xl font-black tracking-tighter font-sans">Outcome-Aligned Model</h3>
              </div>
              
              <p className="mb-12 text-slate-300 text-xl leading-relaxed font-medium">
                We align our incentives with your commercial success. Our model reduces friction for high-potential founders by tying engagement to measurable U.S. market milestones.
              </p>
              
              <div className="space-y-12">
                {[
                  { title: "Alignment Phase", desc: "Foundational U.S. market positioning and strategic narrative sprint." },
                  { title: "Performance Phase", desc: "Success-based outcomes triggered by signed pilots and procurement contracts." },
                  { title: "Strategic Expansion", desc: "Long-term incentives tied to repeated enterprise relationships and scale." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start font-sans">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-blue-500/50 text-blue-400 font-black text-xs font-sans">0{i+1}</div>
                    <div>
                      <h4 className="text-xl font-black text-white mb-2 font-sans leading-tight">{item.title}</h4>
                      <p className="text-slate-400 font-medium leading-relaxed font-sans">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-16">
                <a href="#contact" className="inline-flex items-center gap-3 text-blue-400 font-black text-lg group uppercase tracking-widest hover:text-blue-300 transition-colors font-sans">
                  Enquire for Partnership Terms <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform font-sans" />
                </a>
              </div>
            </div>
            
            <div className="flex flex-col gap-12 text-left">
              {[
                { icon: <Target className="h-8 w-8 text-white font-sans" />, title: "Enterprise Access", desc: "Direct paths to Business Unit leaders with the P&L authority to buy, moving beyond innovation scouts." },
                { icon: <Layers className="h-8 w-8 text-white font-sans" />, title: "Commercial Translation", desc: "Translating deep-tech research excellence into U.S. commercial ROI narratives for enterprise decision-makers." },
                { icon: <Network className="h-8 w-8 text-white font-sans" />, title: "Systematized GTM", desc: "Leveraging standardized pilot workflows and corporate problem libraries to create repeatable revenue pipelines." }
              ].map((item, i) => (
                <div key={i} className="flex gap-8 group font-sans">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[1.5rem] bg-blue-600 shadow-xl shadow-blue-900 group-hover:scale-110 transition-transform font-sans">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="mb-3 text-2xl font-black text-white tracking-tight leading-tight font-sans">{item.title}</h4>
                    <p className="text-slate-400 text-lg leading-relaxed font-medium font-sans">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-slate-50 font-sans" id="contact">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-20 lg:grid-cols-2 lg:items-center">
            <div className="text-left font-sans">
              <h2 className="mb-8 text-6xl font-black text-slate-900 leading-[1.05] tracking-tighter font-sans">Let's Discuss <br /> Your Roadmap.</h2>
              <p className="mb-14 text-xl text-slate-500 max-w-md font-medium leading-relaxed font-sans">
                Whether you are exploring corporate membership, seeking a commercialization partner, or looking for U.S. market intelligence, we are ready to assist.
              </p>
              
              <div className="space-y-10 text-left font-sans">
                <div className="flex items-center gap-8 group font-sans">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-xl shadow-slate-200 transition-all group-hover:bg-blue-600 group-hover:text-white border border-slate-100 text-slate-900">
                    <Mail className="h-6 w-6 font-sans" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-1 font-sans">General Inquiries</div>
                    <div className="text-2xl font-black tracking-tight text-slate-900 font-sans">sv@block71.co</div>
                  </div>
                </div>
                <div className="flex items-center gap-8 group font-sans">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-xl shadow-slate-200 transition-all group-hover:bg-blue-600 group-hover:text-white border border-slate-100 text-slate-900">
                    <MapPin className="h-6 w-6 font-sans" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-1 font-sans">Global Presence</div>
                    <div className="text-2xl font-black tracking-tight text-slate-900 font-sans leading-tight">San Francisco & Singapore</div>
                  </div>
                </div>
                <a href="https://www.linkedin.com/company/block71-silicon-valley/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-blue-600 font-black text-lg hover:text-blue-700 transition-colors mt-4 font-sans uppercase tracking-widest text-sm">
                  <Linkedin className="h-7 w-7 font-sans" />
                  <span>BLOCK71 Silicon Valley</span>
                </a>
              </div>
            </div>
            
            <div className="rounded-[3.5rem] bg-white p-12 shadow-3xl border border-slate-100 relative text-left">
              <form className="space-y-8 font-sans" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-8 sm:grid-cols-2">
                  <div className="relative font-sans">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-3 ml-1 font-sans text-left">Full Name</label>
                    <input type="text" className="w-full rounded-2xl border-none bg-slate-50 p-5 focus:ring-2 focus:ring-blue-600 transition-all font-bold text-slate-700 placeholder:text-slate-300 font-sans" placeholder="e.g. John Doe" />
                  </div>
                  <div className="relative font-sans">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-3 ml-1 font-sans text-left">Email</label>
                    <input type="email" className="w-full rounded-2xl border-none bg-slate-50 p-5 focus:ring-2 focus:ring-blue-600 transition-all font-bold text-slate-700 placeholder:text-slate-300 font-sans" placeholder="e.g. john@company.com" />
                  </div>
                </div>
                <div className="font-sans">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-3 ml-1 font-sans text-left">Engagement Type</label>
                  <select className="w-full rounded-2xl border-none bg-slate-50 p-5 focus:ring-2 focus:ring-blue-600 transition-all appearance-none text-slate-700 font-bold cursor-pointer font-sans bg-slate-50">
                    <option>Corporate Innovation Membership</option>
                    <option>Commercialization Engine (Founders)</option>
                    <option>Investor Circle Access</option>
                    <option>General Ecosystem Inquiry</option>
                  </select>
                </div>
                <div className="font-sans">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-3 ml-1 font-sans text-left">Message</label>
                  <textarea rows={4} className="w-full rounded-2xl border-none bg-slate-50 p-5 focus:ring-2 focus:ring-blue-600 transition-all font-bold text-slate-700 placeholder:text-slate-300 font-sans" placeholder="Briefly describe your interest..."></textarea>
                </div>
                <button className="w-full rounded-2xl bg-blue-600 py-6 font-black text-white shadow-2xl shadow-blue-300 transition-all hover:bg-blue-700 hover:-translate-y-1 active:scale-95 text-lg flex items-center justify-center gap-4 uppercase tracking-widest font-sans">
                  Submit Enquiry <ArrowRight className="h-6 w-6 font-sans" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-24 text-slate-500 font-sans border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-16 md:flex-row font-sans">
            <div className="flex items-center gap-6 font-sans">
              <div className="relative group">
                <img 
                  src="B71 Logo.png" 
                  alt="BLOCK71 Logo" 
                  className="h-14 w-auto grayscale brightness-200 transition-all duration-500 hover:grayscale-0 font-sans" 
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden h-14 w-14 items-center justify-center rounded-xl bg-blue-600 font-black text-white text-2xl shadow-lg font-sans">B</div>
              </div>
              <span className="text-3xl font-black text-white tracking-tighter italic uppercase font-sans">BLOCK71 <span className="text-blue-600">SV</span></span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-12 text-sm font-black uppercase tracking-[0.2em] font-sans">
              <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors font-sans">Privacy</a>
              <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors font-sans">Terms</a>
              <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors font-sans uppercase">NUS Enterprise</a>
              <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors text-center font-sans">Singapore Global Network</a>
            </div>
          </div>
          
          <div className="mt-20 border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-center font-sans">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-700 font-sans">© 2026 BLOCK71 Silicon Valley. Bridging Asia and the U.S.</p>
            <div className="flex gap-6 text-white/20 font-sans">
              <BarChart3 className="h-5 w-5 font-sans" />
              <Network className="h-5 w-5 font-sans" />
              <ShieldCheck className="h-5 w-5 font-sans" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;