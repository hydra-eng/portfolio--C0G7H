import React from 'react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-black font-mono border-t border-slate-900">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tighter uppercase text-center">
          INITIALIZE_CONNECTION
        </h2>
        <p className="text-slate-500 mb-16 text-center">Ready to collaborate on secure systems?</p>

        <div className="grid md:grid-cols-3 gap-8">
            {/* Form Section */}
            <div className="md:col-span-2 bg-[#0c0c0c] border border-slate-800 p-8 md:p-12 rounded-sm text-left shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"></div>

                <form className="space-y-10">
                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="space-y-2 group">
                            <label className="text-[10px] text-primary font-bold uppercase tracking-wider group-focus-within:text-white transition-colors">Name</label>
                            <input 
                                type="text" 
                                placeholder="Recruiter / Visitor" 
                                className="w-full bg-transparent border-b border-slate-800 text-white py-3 focus:outline-none focus:border-primary transition-colors placeholder:text-slate-700 font-sans"
                            />
                        </div>
                        <div className="space-y-2 group">
                            <label className="text-[10px] text-primary font-bold uppercase tracking-wider group-focus-within:text-white transition-colors">Email</label>
                            <input 
                                type="email" 
                                placeholder="contact@example.com" 
                                className="w-full bg-transparent border-b border-slate-800 text-white py-3 focus:outline-none focus:border-primary transition-colors placeholder:text-slate-700 font-sans"
                            />
                        </div>
                    </div>

                    <div className="space-y-2 group">
                        <label className="text-[10px] text-primary font-bold uppercase tracking-wider group-focus-within:text-white transition-colors">Message</label>
                        <textarea 
                            rows={4}
                            placeholder="Discussing potential opportunities..."
                            className="w-full bg-transparent border-b border-slate-800 text-white py-3 focus:outline-none focus:border-primary transition-colors resize-none placeholder:text-slate-700 font-sans"
                        ></textarea>
                    </div>

                    <button className="w-full bg-primary/5 border border-primary text-primary hover:bg-primary hover:text-black font-bold py-4 rounded-sm transition-all duration-300 uppercase tracking-[0.2em] flex items-center justify-center gap-3 group">
                        <span className="text-sm">Transmit_Data</span>
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                </form>
            </div>

            {/* Contact Details Panel */}
            <div className="md:col-span-1 bg-black border border-slate-800 p-8 rounded-sm relative">
                <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-tight flex items-center gap-2">
                    <span className="text-primary">&gt;</span> Comm_Channels
                </h3>
                
                <div className="space-y-8">
                    <div>
                        <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-2">Phone</p>
                        <a href={`tel:${CONTACT_INFO.phone}`} className="text-white hover:text-primary transition-colors font-mono block">
                            {CONTACT_INFO.phone}
                        </a>
                    </div>

                    <div>
                        <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-2">Email</p>
                        <a href={`mailto:${CONTACT_INFO.email}`} className="text-white hover:text-primary transition-colors font-mono block break-all">
                            {CONTACT_INFO.email}
                        </a>
                    </div>

                    <div>
                        <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-2">Social Uplinks</p>
                        <div className="space-y-3">
                            <a href={CONTACT_INFO.linkedinUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-400 hover:text-white group transition-colors">
                                <i className="fab fa-linkedin text-xl group-hover:text-primary transition-colors"></i>
                                <span>LinkedIn</span>
                            </a>
                            <a href={`https://github.com/${CONTACT_INFO.github}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-400 hover:text-white group transition-colors">
                                <i className="fab fa-github text-xl group-hover:text-primary transition-colors"></i>
                                <span>GitHub</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-4 right-4 opacity-20">
                    <i className="fas fa-satellite-dish text-6xl text-primary"></i>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;