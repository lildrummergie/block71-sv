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
  Target,
  FileSearch,
  Settings,
  HardHat,
  ExternalLink,
  Copy
} from 'lucide-react';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeStory, setActiveStory] = useState(0);
  const [copied, setCopied] = useState(false);

  const emailAddress = "siliconvalley@block71.co";

  const portfolioStories = [
    {
      startup: "Devol Robots",
      sector: "Robotics & Automation",
      impact: "1-Hour SKU Onboarding",
      metric: "Contact-Rich Manipulation",
      quote: "We solved the 'Tactile Gap.' Devol allows us to automate high-mix assembly that standard vision-only robotics simply can't handle.",
      author: "Sze Yuan, CEO",
      bg: "bg-slate-900"
    },
    {
      startup: "Invigilo AI",
      sector: "Industrial Safety AI",
      impact: "60% Accident Reduction",
      metric: "Real-Time PPE Compliance",
      quote: "A thousand near-misses happen before an accident does. Our mission is to empower safety teams to identify these signals early and intervene proactively.",
      author: "Vishnu Saran, CEO",
      bg: "bg-blue-600"
    },
    {
      startup: "InPipe Energy",
      sector: "Smart Infrastructure",
      impact: "Zero-CapEx Energy Recovery",
      metric: "24/7 Renewable Power",
      quote: "We turn a force utilities already pay to manage into carbon-free baseload power. It's a fundamental shift in infrastructure economics.",
      author: "Gregg Semler, Founder",
      bg: "bg-emerald-600"
    },
    {
      startup: "Hivebotics",
      sector: "Autonomous Maintenance",
      impact: "$20M Validated Order Book",
      metric: "RaaS-Based Cleaning",
      quote: "Our mission is to automate the most dull and dangerous maintenance tasks in high-traffic environments, delivering consistent quality at scale.",
      author: "CEO, Hivebotics",
      bg: "bg-blue-800"
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

  const copyEmail = () => {
    const textArea = document.createElement("textarea");
    textArea.value = emailAddress;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-white/95 py-4 shadow-md backdrop-blur-md' : 'bg-transparent py-8'}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-6 text-left font-sans">
            <div className="relative group">
              <img 
                src="/logo.png" 
                alt="BLOCK71" 
                className="h-16 sm:h-20 w-auto object-contain transition-all duration-500 group-hover:scale-105"
                style={{ minWidth: '60px' }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 font-black text-white text-3xl shadow-lg">
                B
              </div>
            </div>
            <div className="h-12 w-px bg-slate-200 hidden sm:block"></div>
            <span className="text-2xl sm:text-3xl font-black tracking-tighter italic uppercase text-slate-900 whitespace-nowrap">
              BLOCK71 <span className="text-blue-600">SV</span>
            </span>
          </div>
          <div className="hidden items-center gap-10 md:flex">
            <a href="#advantage" className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">Strategic Partnership</a>
            <a href="#solutions" className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">Verticals</a>
            <a href="#outcomes" className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">Outcomes</a>
            <a href="#contact" className="rounded-full bg-blue-600 px-8 py-3 text-sm font-bold text-white shadow-xl shadow-blue-200 transition-all hover:bg-blue-700 active:scale-95 font-sans">
              Partner With Us
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#eff6ff_0%,transparent_40%)]" />
        
        <div className="relative mx-auto max-w-7xl px-6 text-center font-sans">
          <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-6 py-2.5 text-[11px] font-black uppercase tracking-widest text-blue-700 shadow-sm font-sans">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-600 font-sans"></span>
            </span>
            Industrial AI Commercialization Engine
          </div>
          <h1 className="mb-8 text-4xl sm:text-6xl lg:text-8xl font-black tracking-tight text-slate-900 leading-[1.05] font-sans text-center">
            The Gateway for <br />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent font-black">Industrial AI Deployment.</span>
          </h1>
          <p className="mx-auto mb-14 max-w-3xl text-lg text-slate-500 sm:text-xl leading-relaxed font-medium font-sans px-4">
            Orchestrating global innovation. We connect high-signal founders with corporate authority to solve the world's most complex industrial challenges.
          </p>
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row px-6 font-sans">
            <a href="#outcomes" className="flex w-full items-center justify-center gap-4 rounded-2xl bg-slate-900 px-12 py-6 text-lg font-bold text-white transition-all hover:bg-slate-800 hover:shadow-2xl active:scale-95 sm:w-auto text-center font-sans">
              View Deployment-Ready Startups <ArrowRight className="h-5 w-5" />
            </a>
            <a href="#contact" className="flex w-full items-center justify-center gap-4 rounded-2xl border-2 border-slate-100 bg-white px-12 py-6 text-lg font-bold transition-all hover:bg-slate-50 active:scale-95 sm:w-auto text-slate-600 text-center font-sans">
              Partner with us
            </a>
          </div>
        </div>
      </section>

      {/* Strategic Partnership Advantage Section */}
      <section className="py-32 bg-slate-900 text-white font-sans overflow-hidden" id="advantage">
        <div className="mx-auto max-w-7xl px-6 text-left font-sans">
          <div className="mb-20 max-w-4xl font-sans">
            <span className="text-blue-400 font-black text-xs uppercase tracking-[0.4em] mb-4 block font-sans font-sans">Strategic Partnership Model</span>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-8 font-sans font-sans">Stop Scouting. Start Deploying.</h2>
            <p className="text-xl text-slate-400 font-medium leading-relaxed font-sans font-sans">
              BLOCK71 SV focuses on <span className="text-white font-bold font-sans font-sans">Proof of Outcomes</span>. We act as your fractional procurement and technical audit team, de-risking the adoption of Hard-Tech AI in high-mix manufacturing and infrastructure environments.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3 font-sans">
            {[
              { 
                title: "Technical Audits", 
                icon: <FileSearch className="h-8 w-8 text-blue-400 font-sans font-sans" />,
                desc: "Pre-vetted security, IT compliance, and mechanical reliability assessments before the first intro."
              },
              { 
                title: "Frictionless MSAs", 
                icon: <ShieldCheck className="h-8 w-8 text-blue-400 font-sans font-sans font-sans" />,
                desc: "Standardized legal templates and pre-vetted contracts to move from intro to pilot in under 30 days."
              },
              { 
                title: "On-Site Integration", 
                icon: <Settings className="h-8 w-8 text-blue-400 font-sans font-sans font-sans font-sans" />,
                desc: "Hands-on support from our SV team to ensure the 'Steel' matches the 'Simulation' during deployment."
              }
            ].map((pillar, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] backdrop-blur-sm group hover:bg-white/10 transition-all text-left font-sans font-sans">
                <div className="mb-6 p-4 bg-blue-600/20 rounded-2xl w-fit group-hover:scale-110 transition-transform font-sans">
                  {pillar.icon}
                </div>
                <h3 className="text-2xl font-black mb-4 font-sans font-sans">{pillar.title}</h3>
                <p className="text-slate-400 font-medium leading-relaxed font-sans font-sans">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Verticals - Proof of Outcomes */}
      <section className="py-32 bg-slate-50 font-sans" id="solutions">
        <div className="mx-auto max-w-7xl px-6 text-left font-sans">
          <div className="mb-20 max-w-3xl font-sans">
            <h2 className="mb-6 text-4xl font-black text-slate-900 tracking-tight font-sans font-sans">Featured Verticals: Proof of Outcomes</h2>
            <p className="text-xl text-slate-500 font-medium leading-relaxed font-sans font-sans">
              We specialize in high-barrier technologies where technical excellence translates directly to operational cost savings and safety.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 font-sans font-sans font-sans">
            {[
              { 
                title: "Robotics & Automation", 
                outcome: "Contact-rich manipulation for high-mix assembly.",
                solution: "Devol: 1-hour SKU onboarding.",
                icon: <Bot className="h-8 w-8 text-blue-600 font-sans font-sans font-sans font-sans" />
              },
              { 
                title: "Industrial Safety AI", 
                outcome: "Real-time visibility and PPE compliance via CCTV.",
                solution: "Invigilo: 60% accident reduction.",
                icon: <HardHat className="h-8 w-8 text-emerald-600 font-sans font-sans font-sans font-sans" />
              },
              { 
                title: "Smart Infrastructure", 
                outcome: "Wasted pressure converted to 24/7 renewable power.",
                solution: "InPipe: Zero-CapEx Energy recovery.",
                icon: <Zap className="h-8 w-8 text-rose-600 font-sans font-sans font-sans font-sans" />
              },
              { 
                title: "Autonomous Maintenance", 
                outcome: "RaaS-based cleaning for high-traffic environments.",
                solution: "Hivebotics: $20M validated order book.",
                icon: <Settings className="h-8 w-8 text-orange-600 font-sans font-sans font-sans font-sans" />
              }
            ].map((pillar, i) => (
              <div key={i} className="group relative rounded-[2.5rem] bg-white p-10 shadow-sm transition-all hover:-translate-y-2 border border-slate-100 text-left font-sans">
                <div className="mb-6 inline-flex rounded-2xl bg-slate-50 p-4 text-slate-900 transition-colors group-hover:bg-blue-600 group-hover:text-white font-sans font-sans">
                  {pillar.icon}
                </div>
                <h3 className="mb-4 text-xl font-black tracking-tight font-sans font-sans">{pillar.title}</h3>
                <div className="mb-4 font-sans">
                  <span className="text-[10px] font-black uppercase text-slate-400 block mb-1 font-sans">Outcome Focus</span>
                  <p className="text-slate-600 font-bold text-sm leading-snug font-sans">{pillar.outcome}</p>
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase text-blue-600 block mb-1 font-sans font-sans">Featured Solution</span>
                  <p className="text-slate-900 font-black text-sm font-sans font-sans">{pillar.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section / Stories */}
      <section className="py-32 bg-white font-sans overflow-hidden" id="outcomes">
        <div className="mx-auto max-w-7xl px-6 text-center font-sans font-sans font-sans">
          <div className="mb-20 font-sans font-sans font-sans">
            <h2 className="mb-4 text-4xl font-black text-slate-900 tracking-tight font-sans font-sans font-sans">Deployment Snapshots</h2>
            <p className="text-slate-500 text-lg font-medium font-sans font-sans font-sans">Outcome-driven validation from the BLOCK71 SV ecosystem.</p>
          </div>

          <div className="relative font-sans font-sans">
            <div className="min-h-[450px] font-sans">
              {portfolioStories.map((story, i) => (
                <div 
                  key={i} 
                  className={`transition-all duration-700 ${i === activeStory ? 'block opacity-100 font-sans' : 'hidden opacity-0 font-sans'}`}
                >
                  <div className={`rounded-[2.5rem] sm:rounded-[3.5rem] ${story.bg} p-8 sm:p-16 lg:p-20 text-white shadow-3xl flex flex-col lg:flex-row items-center gap-12 lg:gap-20 relative text-left font-sans font-sans`}>
                    <div className="lg:w-3/5 relative z-10 text-left text-white font-sans">
                      <div className="mb-6 sm:mb-8 flex items-center gap-4 font-sans">
                        <div className="bg-white/20 p-2.5 rounded-xl backdrop-blur-md font-sans">
                          <Trophy className="h-5 w-5 sm:h-6 sm:w-6 text-white font-sans font-sans" />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/70 font-sans font-sans">{story.startup} • {story.sector}</span>
                      </div>
                      <h2 className="mb-8 text-3xl sm:text-5xl font-black leading-[1.1] tracking-tighter font-sans font-sans">
                        {story.impact} <br />
                        <span className="text-white/40 font-sans font-sans">{story.metric}</span>
                      </h2>
                      <div className="relative mb-8 sm:mb-12 max-w-xl font-sans font-sans font-sans">
                        <Quote className="absolute -left-6 sm:-left-12 -top-4 sm:-top-8 h-10 w-10 sm:h-20 sm:w-20 text-white/10 font-sans font-sans font-sans" />
                        <p className="text-xl sm:text-2xl italic leading-relaxed text-white/90 relative z-10 font-medium font-sans font-sans font-sans">
                          "{story.quote}"
                        </p>
                      </div>
                      <div className="flex items-center gap-5 border-t border-white/20 pt-8 font-sans font-sans">
                        <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-2xl bg-white/20 backdrop-blur-lg flex items-center justify-center font-black text-2xl sm:text-3xl font-sans font-sans font-sans font-sans">
                          {story.author?.[0] || "B"}
                        </div>
                        <div>
                          <div className="font-black text-lg sm:text-xl font-sans font-sans font-sans font-sans">{story.author}</div>
                          <div className="text-[10px] sm:text-sm text-white/50 font-bold uppercase tracking-widest font-sans font-sans font-sans">Portfolio Partner</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:w-2/5 w-full relative z-10 font-sans font-sans">
                      <div className="grid grid-cols-1 gap-6 font-sans">
                         <div className="rounded-[2rem] bg-white/10 p-8 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all cursor-default text-left font-sans">
                            <CheckCircle2 className="mb-4 h-10 w-10 text-blue-300 font-sans font-sans" />
                            <h4 className="text-lg font-black mb-3 text-white leading-tight font-sans font-sans">Enterprise Validation Pilot</h4>
                            <p className="text-sm text-white/70 font-medium leading-relaxed font-sans font-sans font-sans">Secured validation with Tier-1 industrial partners through our direct scouting network.</p>
                         </div>
                         <div className="rounded-[2rem] bg-white/10 p-8 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all cursor-default text-left font-sans">
                            <LineChart className="mb-4 h-10 w-10 text-blue-300 font-sans font-sans" />
                            <h4 className="text-lg font-black mb-3 text-white leading-tight font-sans font-sans">Compressed Cycle</h4>
                            <p className="text-sm text-white/70 font-medium leading-relaxed font-sans font-sans font-sans">Accelerated GTM by aligning technical research with enterprise procurement requirements.</p>
                         </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 flex justify-center gap-4 font-sans">
              {portfolioStories.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => setActiveStory(i)}
                  className={`h-2.5 transition-all duration-500 rounded-full ${i === activeStory ? 'w-16 sm:w-24 bg-blue-600 shadow-lg shadow-blue-200 font-sans font-sans' : 'w-2.5 bg-slate-200 font-sans font-sans'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Streamlined Contact Section */}
      <section className="py-32 bg-slate-50 font-sans" id="contact">
        <div className="mx-auto max-w-7xl px-6 font-sans font-sans font-sans">
          <div className="rounded-[4rem] bg-white p-12 lg:p-24 shadow-3xl border border-slate-100 flex flex-col lg:flex-row items-center gap-20 overflow-hidden relative font-sans font-sans font-sans font-sans font-sans font-sans">
            <div className="absolute top-0 right-0 p-24 opacity-[0.03] pointer-events-none font-sans font-sans font-sans">
              <Mail className="h-96 w-96 text-slate-900 font-sans font-sans font-sans font-sans font-sans font-sans" />
            </div>
            
            <div className="lg:w-1/2 text-left relative z-10 font-sans font-sans font-sans font-sans">
              <span className="text-blue-600 font-black text-xs uppercase tracking-[0.4em] mb-4 block font-sans font-sans font-sans font-sans font-sans">Direct Access</span>
              <h2 className="mb-8 text-5xl sm:text-6xl font-black text-slate-900 leading-[1.05] tracking-tighter font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans">Ready for a <br /> Technical Deep-Dive?</h2>
              <p className="mb-12 text-xl text-slate-500 font-medium leading-relaxed max-w-md font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans">
                Request our latest <span className="text-slate-900 font-bold font-sans font-sans font-sans font-sans font-sans font-sans">"SV Directional Report"</span> on Industrial AI adoption trends or book a technical audit for your facility.
              </p>
              
              <div className="space-y-12 font-sans font-sans font-sans font-sans font-sans">
                {/* Updated Global Presence with External Link */}
                <a 
                  href="https://block71.co/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-8 group font-sans font-sans font-sans font-sans"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50 shadow-xl shadow-slate-100 transition-all group-hover:bg-blue-600 group-hover:text-white border border-slate-200 text-slate-900 font-sans font-sans font-sans">
                    <MapPin className="h-6 w-6 font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-1 font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans">Global Presence</div>
                    <div className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 leading-tight group-hover:text-blue-600 transition-colors font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans">USA, Singapore, Indonesia, Vietnam, Japan, China</div>
                  </div>
                </a>
                
                <a href="https://www.linkedin.com/in/angelinetansf/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-8 group font-sans font-sans">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50 shadow-xl shadow-slate-100 transition-all group-hover:bg-blue-600 group-hover:text-white border border-slate-200 text-slate-900 font-sans font-sans font-sans">
                    <Linkedin className="h-6 w-6 font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-1 font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans">Direct Networking</div>
                    <div className="text-2xl font-black tracking-tight text-slate-900 leading-tight group-hover:text-blue-600 transition-colors font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans">Connect on LinkedIn</div>
                  </div>
                </a>
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full text-center lg:text-left relative z-10 font-sans font-sans font-sans">
              <div className="bg-slate-900 rounded-[3rem] p-10 lg:p-16 text-white shadow-2xl font-sans font-sans">
                <div className="mb-8 flex items-center justify-center lg:justify-start gap-4 font-sans font-sans">
                  <div className="bg-blue-600/20 p-3 rounded-xl border border-blue-500/30 font-sans font-sans font-sans">
                    <Zap className="h-6 w-6 text-blue-400 font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 font-sans font-sans font-sans font-sans font-sans">Decision Maker Access</span>
                </div>
                <h3 className="text-3xl font-black mb-8 leading-tight font-sans font-sans font-sans font-sans">Skip the inbox delay. <br /> Message us directly.</h3>
                
                <div className="space-y-6 font-sans font-sans font-sans font-sans font-sans font-sans">
                  <a 
                    href={`mailto:${emailAddress}?subject=Industrial AI Technical Deep-Dive Inquiry`}
                    className="w-full flex items-center justify-center gap-4 bg-blue-600 hover:bg-blue-700 text-white font-black py-6 rounded-2xl text-lg uppercase tracking-widest transition-all hover:-translate-y-1 shadow-2xl shadow-blue-900 active:scale-95 font-sans font-sans font-sans font-sans font-sans"
                  >
                    Email the SV Team <Mail className="h-6 w-6 font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans" />
                  </a>
                  
                  <button 
                    onClick={copyEmail}
                    className="w-full flex items-center justify-center gap-4 bg-white/10 hover:bg-white/20 text-white/80 font-bold py-5 rounded-2xl text-sm uppercase tracking-widest transition-all active:scale-95 border border-white/10 font-sans font-sans font-sans font-sans"
                  >
                    {copied ? 'Copied to Clipboard!' : 'Copy Email Address'} 
                    {copied ? <CheckCircle2 className="h-4 w-4 text-emerald-400 font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans" /> : <Copy className="h-4 w-4 font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans" />}
                  </button>
                </div>
                
                <p className="mt-10 text-slate-400 text-sm font-medium leading-relaxed italic opacity-75 font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans">
                  Typical response time: Under 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-24 text-slate-500 font-sans border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 text-center md:text-left">
          <div className="flex flex-col items-center justify-between gap-16 md:flex-row font-sans font-sans font-sans font-sans">
            <div className="flex items-center gap-8 font-sans font-sans">
              <div className="relative group font-sans font-sans font-sans font-sans font-sans font-sans">
                <img 
                  src="/logo.png" 
                  alt="BLOCK71" 
                  className="h-20 sm:h-24 w-auto grayscale brightness-200 transition-all duration-500 hover:grayscale-0 font-sans font-sans font-sans font-sans font-sans"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden h-20 w-20 items-center justify-center rounded-2xl bg-blue-600 font-black text-white text-3xl shadow-lg font-sans font-sans">
                  B
                </div>
              </div>
              <span className="text-3xl font-black text-white tracking-tighter italic uppercase font-sans font-sans font-sans font-sans">BLOCK71 <span className="text-blue-600 font-black font-sans font-sans font-sans font-sans font-sans">SV</span></span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-12 text-sm font-black uppercase tracking-[0.2em] font-sans font-sans font-sans font-sans font-sans font-sans font-sans">
              <a 
                href="https://nus.edu.sg/ormc/personal-data-protection/nus-privacy-notice" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-blue-500 transition-colors font-sans font-sans"
              >
                Privacy
              </a>
              <a 
                href="https://www.nus.edu.sg/legal-information-notices" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-blue-500 transition-colors font-sans font-sans"
              >
                Notice
              </a>
              <a 
                href="https://enterprise.nus.edu.sg/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-blue-500 transition-colors uppercase font-sans font-sans font-sans font-sans"
              >
                NUS Enterprise
              </a>
            </div>
          </div>
          
          <div className="mt-20 border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-center font-sans font-sans font-sans font-sans">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-700 font-sans font-sans font-sans font-sans font-sans font-sans">© 2026 BLOCK71 Silicon Valley. Industrial AI Deployment Gateway.</p>
            <div className="flex gap-6 text-white/20 font-sans font-sans font-sans font-sans font-sans">
              <BarChart3 className="h-5 w-5 font-sans font-sans font-sans font-sans font-sans font-sans" />
              <Network className="h-5 w-5 font-sans font-sans font-sans font-sans font-sans font-sans" />
              <ShieldCheck className="h-5 w-5 font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
