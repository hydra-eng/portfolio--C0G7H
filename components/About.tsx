import React from 'react';
import { EDUCATION, CURRENT_ROLE } from '../constants';
import { ShieldCheck } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-black font-mono border-t border-slate-900">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Visual/Icon - Stylized Green Logo */}
          <div className="order-2 md:order-1 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
               <div className="absolute inset-0 bg-[#0c0c0c] rounded-full border border-slate-800"></div>
               <div className="absolute inset-0 flex items-center justify-center">
                 {/* Abstract Green Shape representing the logo in PDF */}
                 <div className="bg-primary/20 w-48 h-48 rounded-full flex items-center justify-center animate-pulse-slow">
                     <ShieldCheck className="w-24 h-24 text-primary" />
                 </div>
               </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 flex items-center gap-2 tracking-tighter">
              WHO_AM_I<span className="text-primary">?</span>
            </h2>
            
            <div className="text-slate-400 space-y-6 text-sm md:text-base leading-relaxed">
              <p className="text-primary font-bold">root@saaketh:~$ cat objective.txt</p>
              
              <p>
                A highly motivated and disciplined cybersecurity intern with hands-on experience in protocol analysis, phishing detection, and system-level troubleshooting.
              </p>
              
              <p>
                I am seeking to contribute meaningfully to secure systems with a strong ethical foundation, rapid adaptability, and a passion for technical excellence. My approach is tactical, flag-focused, and driven by a passion for reproducibility and public sharing of technical work.
              </p>
            </div>

            {/* Education Box */}
            <div className="mt-10 border border-slate-800 bg-[#0c0c0c] p-6 rounded-sm relative overflow-hidden group hover:border-primary/50 transition-colors">
              <p className="text-[10px] text-primary mb-2 tracking-widest uppercase font-bold">Education</p>
              <h3 className="text-white font-bold text-lg">{EDUCATION.degree}</h3>
              <p className="text-slate-400 text-sm mt-1">{EDUCATION.school}</p>
              <p className="text-slate-600 text-xs mt-2 font-mono">{EDUCATION.year}</p>
            </div>

            {/* Current Role Box */}
            <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="border-l-2 border-primary pl-4">
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Current Role</p>
                    <p className="text-white font-bold text-sm md:text-base">{CURRENT_ROLE.title}</p>
                </div>
                <div className="border-l-2 border-primary pl-4">
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Focus</p>
                    <p className="text-primary font-bold text-sm md:text-base">{CURRENT_ROLE.focus}</p>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;