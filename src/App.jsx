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
          <div className="flex items-center gap-6">
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
              <div className="hidden h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 font-black text-white text-3xl shadow-lg">B</div>
            </div>
            
            <div className="h-12 w-px bg-slate-200 hidden sm:block"></div>
            <span className="text-2xl font-black tracking-tight text-slate-900 flex flex-col leading-none text-left">
              <span className="text-blue-600 uppercase tracking-tighter">BLOCK71</span>
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-slate-500 font-sans">Silicon Valley</span>
            </span>
          </div>
          <div className="hidden items-center gap-10 md:flex">
            <a href="#advantage" className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">Strategic Partnership</a>
            <a href="#solutions" className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">Verticals</a>
            <a href="#portfolio" className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">Impact</a>
            <a href="#contact" className="rounded-full bg-blue-600 px-8 py-3 text-sm font-bold text-white shadow-xl shadow-blue-200 transition-all hover:bg-blue-700 active:scale-95 font-sans">
              Partner With Us
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#eff6ff_0%,transparent_40%)]" />
        
        <div className="relative mx-auto max-w-7xl px-6 text-center">
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
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row px-6">
            <a href="#portfolio" className="flex w-full items-center justify-center gap-4 rounded-2xl bg-slate-900 px-12 py-6 text-lg font-bold text-white transition-all hover:bg-slate-800 hover:shadow-2xl active:scale-95 sm:w-auto text-center">
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
        <div className="mx-auto max-w-7xl px-6 text-left">
          <div className="mb-20 max-w-4xl">
            <span className="text-blue-400 font-black text-xs uppercase tracking-[0.4em] mb-4 block">Strategic Partnership Model</span>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-8">Stop Scouting. Start Deploying.</h2>
            <p className="text-xl text-slate-400 font-medium leading-relaxed">
              BLOCK71 SV focuses on <span className="text-white font-bold">Proof of Outcomes</span>. We act as your fractional procurement and technical audit team, de-risking the adoption of Hard-Tech AI in high-mix manufacturing and infrastructure environments.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { 
                title: "Technical Audits", 
                icon: <FileSearch className="h-8 w-8 text-blue-400" />,
                desc: "Pre-vetted security, IT compliance, and mechanical reliability assessments before the first intro."
              },
              { 
                title: "Frictionless MSAs", 
                icon: <ShieldCheck className="h-8 w-8 text-blue-400" />,
                desc: "Standardized legal templates and pre-vetted contracts to move from intro to pilot in under 30 days."
              },
              { 
                title: "On-Site Integration", 
                icon: <Settings className="h-8 w-8 text-blue-400" />,
                desc: "Hands-on support from our SV team to ensure the 'Steel' matches the 'Simulation' during deployment."
              }
            ].map((pillar, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] backdrop-blur-sm group hover:bg-white/10 transition-all text-left">
                <div className="mb-6 p-4 bg-blue-600/20 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                  {pillar.icon}
                </div>
                <h3 className="text-2xl font-black mb-4">{pillar.title}</h3>
                <p className="text-slate-400 font-medium leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Verticals */}
      <section className="py-32 bg-slate-50 font-sans" id="solutions">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-20 max-w-3xl text-left font-sans">
            <h2 className="mb-6 text-4xl font-black text-slate-900 tracking-tight font-sans">Core Strategic Verticals</h2>
            <p className="text-xl text-slate-500 font-medium leading-relaxed font-sans">
              We specialize in high-barrier technology sectors where technical excellence translates directly to infrastructure modernization and operational efficiency.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3 text-left font-sans">
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
      <section className="py-32 bg-white font-sans" id="portfolio">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-20 text-center">
            <h2 className="mb-4 text-4xl font-black text-slate-900 tracking-tight font-sans text-center">Portfolio Impact</h2>
            <p className="text-slate-500 text-lg font-medium font-sans text-center">Outcome-driven validation from the BLOCK71 SV ecosystem.</p>
          </div>

          <div className="relative font-sans">
            {portfolioStories.map((story, i) => (
              <div 
                key={i} 
                className={`transition-all duration-1000 ${i === activeStory ? 'opacity-100 translate-y-0 relative' : 'opacity-0 translate-y-20 absolute inset-0 pointer-events-none'}`}
              >
                <div className={`rounded-[3.5rem] ${story.bg} p-10 lg:p-24 text-white shadow-3xl flex flex-col lg:flex-row items-center gap-20 overflow-hidden relative font-sans text-left`}>
                  <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none text-white font-sans">
                    <Globe2 className="h-80 w-80 font-sans text-white" />
                  </div>
                  
                  <div className="lg:w-3/5 relative z-10 font-sans text-left text-white">
                    <div className="mb-8 flex items-center gap-4 text-white font-sans">
                      <div className="bg-white/20 p-2.5 rounded-xl backdrop-blur-md">
                        <Trophy className="h-6 w-6 text-white" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/70 font-sans">{story.startup} • {story.sector}</span>
                    </div>
                    <h3 className="mb-10 text-4xl font-black leading-[1.1] sm:text-6xl tracking-tighter text-white font-sans">
                      {story.impact} <br />
                      <span className="text-white/40 font-sans text-white">{story.metric}</span>
                    </h3>
                    <div className="relative mb-12 max-w-xl font-sans text-white">
                      <Quote className="absolute -left-12 -top-8 h-20 w-20 text-white/10 font-sans" />
                      <p className="text-2xl italic leading-relaxed text-white/90 relative z-10 font-medium font-sans">
                        "{story.quote}"
                      </p>
                    </div>
                    <div className="flex items-center gap-5 border-t border-white/20 pt-10 font-sans text-white">
                      <div className="h-16 w-16 rounded-2xl bg-white/20 backdrop-blur-lg flex items-center justify-center font-black text-3xl font-sans">
                        {story.author?.[0] || "B"}
                      </div>
                      <div>
                        <div className="font-black text-xl font-sans">{story.author}</div>
                        <div className="text-sm text-white/50 font-bold uppercase tracking-widest font-sans">Portfolio Partner</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:w-2/5 w-full relative z-10 font-sans">
                    <div className="grid grid-cols-1 gap-6 font-sans">
                       <div className="rounded-[2rem] bg-white/10 p-10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all cursor-default group font-sans">
                          <CheckCircle2 className="mb-6 h-12 w-12 text-blue-300 group-hover:scale-110 transition-transform font-sans" />
                          <h4 className="text-xl font-black mb-3 text-white font-sans leading-tight">Enterprise Pilot Secured</h4>
                          <p className="text-white/70 font-medium leading-relaxed font-sans">Secured validation with Tier-1 U.S. industrial partners through our direct scouting network.</p>
                       </div>
                       <div className="rounded-[2rem] bg-white/10 p-10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all cursor-default group font-sans">
                          <LineChart className="mb-6 h-12 w-12 text-blue-300 group-hover:scale-110 transition-transform font-sans font-sans" />
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
                  className={`h-2.5 transition-all duration-500 rounded-full ${i === activeStory ? 'w-24 bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.4)]' : 'w-2.5 bg-slate-200'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Streamlined Contact Section */}
      <section className="py-32 bg-slate-50 font-sans" id="contact">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-[4rem] bg-white p-12 lg:p-24 shadow-3xl border border-slate-100 flex flex-col lg:flex-row items-center gap-20 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-24 opacity-[0.03] pointer-events-none">
              <Mail className="h-96 w-96 text-slate-900" />
            </div>
            
            <div className="lg:w-1/2 text-left relative z-10">
              <span className="text-blue-600 font-black text-xs uppercase tracking-[0.4em] mb-4 block">Direct Access</span>
              <h2 className="mb-8 text-5xl sm:text-6xl font-black text-slate-900 leading-[1.05] tracking-tighter">Ready for a <br /> Technical Deep-Dive?</h2>
              <p className="mb-12 text-xl text-slate-500 font-medium leading-relaxed max-w-md">
                Request our latest <span className="text-slate-900 font-bold">"SV Directional Report"</span> on Industrial AI adoption trends or book a technical audit for your facility.
              </p>
              
              <div className="space-y-12">
                <div className="flex items-center gap-8 group">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50 shadow-xl shadow-slate-100 transition-all group-hover:bg-blue-600 group-hover:text-white border border-slate-200 text-slate-900 font-sans">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-1">Global Presence</div>
                    <div className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 leading-tight">USA, Singapore, Indonesia, Vietnam, Japan, China</div>
                  </div>
                </div>
                
                <a href="https://www.linkedin.com/in/angelinetansf/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-8 group">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50 shadow-xl shadow-slate-100 transition-all group-hover:bg-blue-600 group-hover:text-white border border-slate-200 text-slate-900 font-sans">
                    <Linkedin className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-1">Direct Networking</div>
                    <div className="text-2xl font-black tracking-tight text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">Connect on LinkedIn</div>
                  </div>
                </a>
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full text-center lg:text-left relative z-10">
              <div className="bg-slate-900 rounded-[3rem] p-10 lg:p-16 text-white shadow-2xl">
                <div className="mb-8 flex items-center justify-center lg:justify-start gap-4">
                  <div className="bg-blue-600/20 p-3 rounded-xl border border-blue-500/30">
                    <Zap className="h-6 w-6 text-blue-400" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400">Decision Maker Access</span>
                </div>
                <h3 className="text-3xl font-black mb-8 leading-tight">Skip the inbox delay. <br /> Message us directly.</h3>
                
                <div className="space-y-6">
                  <a 
                    href={`mailto:${emailAddress}?subject=Industrial AI Technical Deep-Dive Inquiry`}
                    className="w-full flex items-center justify-center gap-4 bg-blue-600 hover:bg-blue-700 text-white font-black py-6 rounded-2xl text-lg uppercase tracking-widest transition-all hover:-translate-y-1 shadow-2xl shadow-blue-900 active:scale-95"
                  >
                    Email the SV Team <Mail className="h-6 w-6" />
                  </a>
                  
                  <button 
                    onClick={copyEmail}
                    className="w-full flex items-center justify-center gap-4 bg-white/10 hover:bg-white/20 text-white/80 font-bold py-5 rounded-2xl text-sm uppercase tracking-widest transition-all active:scale-95 border border-white/10"
                  >
                    {copied ? 'Copied to Clipboard!' : 'Copy Email Address'} 
                    {copied ? <CheckCircle2 className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>
                
                <p className="mt-10 text-slate-400 text-sm font-medium leading-relaxed italic opacity-75">
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
          <div className="flex flex-col items-center justify-between gap-16 md:flex-row">
            <div className="flex items-center gap-8">
              <div className="relative group font-sans">
                <img 
                  src="/logo.png" 
                  alt="BLOCK71 Logo" 
                  className="h-20 sm:h-24 w-auto object-contain transition-all duration-500 font-sans" 
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden h-20 w-20 items-center justify-center rounded-2xl bg-blue-600 font-black text-white text-3xl shadow-lg">B</div>
              </div>
              <span className="text-3xl font-black text-white tracking-tighter italic uppercase">BLOCK71 <span className="text-blue-600 font-black">SV</span></span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-12 text-sm font-black uppercase tracking-[0.2em]">
              <a 
                href="https://nus.edu.sg/ormc/personal-data-protection/nus-privacy-notice" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-blue-500 transition-colors"
              >
                Privacy
              </a>
              <a 
                href="https://www.nus.edu.sg/legal-information-notices" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-blue-500 transition-colors"
              >
                Notice
              </a>
              <a 
                href="https://enterprise.nus.edu.sg/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-blue-500 transition-colors uppercase"
              >
                NUS Enterprise
              </a>
            </div>
          </div>
          
          <div className="mt-20 border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-center font-sans">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-700">© 2026 BLOCK71 Silicon Valley. Industrial AI Deployment Gateway.</p>
            <div className="flex gap-6 text-white/20">
              <BarChart3 className="h-5 w-5" />
              <Network className="h-5 w-5" />
              <ShieldCheck className="h-5 w-5" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
