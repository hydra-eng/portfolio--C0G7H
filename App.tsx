import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import BackgroundEffects from './components/BackgroundEffects';
import CustomCursor from './components/CustomCursor';

const App: React.FC = () => {
  return (
    <div className="bg-black text-slate-300 selection:bg-green-900 selection:text-white font-mono">
      <CustomCursor />
      <BackgroundEffects />
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <Experience />
        
        {/* Certifications Section from HTML */}
        <section id="certifications" className="py-20 border-t border-green-900/20 bg-black/50 relative z-10">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-4 flex items-center gap-3 font-mono">
                    <span className="text-green-500">02.</span> 
                    <span className="text-white">DECRYPTED_ASSETS</span>
                    <span className="h-px bg-green-900 flex-grow ml-4"></span>
                </h2>
                <p className="text-gray-500 mb-12 max-w-2xl font-mono text-sm">// Verified credentials extracted from secure database.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="terminal-card p-6 border-t-2 border-t-red-500 hover:border-t-red-400 group relative overflow-hidden">
                        <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition duration-500"></div>
                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-6">
                                <i className="fas fa-bug text-3xl text-red-500 group-hover:animate-pulse"></i>
                                <span className="text-[10px] font-bold tracking-widest bg-red-900/20 text-red-400 px-2 py-1 border border-red-900/50">OFFENSIVE</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Penetration Testing</h3>
                            <p className="text-xs text-gray-500 mb-6 font-mono">ISSUER: ISTUDIO | LVL 1</p>
                            <div className="text-xs font-mono text-gray-400 border-t border-gray-800 pt-4 flex justify-between items-center">
                                <div>
                                    <p>ID: 2642402</p>
                                    <p>NOV 2025</p>
                                </div>
                                <i className="fas fa-check-circle text-green-500"></i>
                            </div>
                        </div>
                    </div>

                    <div className="terminal-card p-6 border-t-2 border-t-blue-500 hover:border-t-blue-400 group relative overflow-hidden">
                        <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition duration-500"></div>
                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-6">
                                <i className="fas fa-shield-alt text-3xl text-blue-500 group-hover:animate-pulse"></i>
                                <span className="text-[10px] font-bold tracking-widest bg-blue-900/20 text-blue-400 px-2 py-1 border border-blue-900/50">DEFENSIVE</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Network Security</h3>
                            <p className="text-xs text-gray-500 mb-6 font-mono">ISSUER: ISTUDIO | LVL 1</p>
                            <div className="text-xs font-mono text-gray-400 border-t border-gray-800 pt-4 flex justify-between items-center">
                                <div>
                                    <p>ID: 2642402</p>
                                    <p>NOV 2025</p>
                                </div>
                                <i className="fas fa-check-circle text-green-500"></i>
                            </div>
                        </div>
                    </div>

                    <div className="terminal-card p-6 border-t-2 border-t-yellow-500 hover:border-t-yellow-400 group relative overflow-hidden">
                        <div className="absolute inset-0 bg-yellow-500/5 opacity-0 group-hover:opacity-100 transition duration-500"></div>
                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-6">
                                <i className="fas fa-lock text-3xl text-yellow-500 group-hover:animate-pulse"></i>
                                <span className="text-[10px] font-bold tracking-widest bg-yellow-900/20 text-yellow-400 px-2 py-1 border border-yellow-900/50">RISK_MGMT</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Risk Assessment</h3>
                            <p className="text-xs text-gray-500 mb-6 font-mono">ISSUER: ISTUDIO | LVL 1</p>
                            <div className="text-xs font-mono text-gray-400 border-t border-gray-800 pt-4 flex justify-between items-center">
                                <div>
                                    <p>ID: 2642402</p>
                                    <p>NOV 2025</p>
                                </div>
                                <i className="fas fa-check-circle text-green-500"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Projects />
        {/* Contact section is used for Footer in the HTML, but I will keep Contact component if it has the form, or replace with Footer only? 
            HTML has #contact as Footer. I'll include Contact for the form and Footer for the copyright. */}
        <Contact /> 
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default App;