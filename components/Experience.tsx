import React from 'react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 border-t border-green-900/20 relative z-10">
        <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 flex items-center gap-3 font-mono">
                <span className="text-green-500">01.</span> 
                <span className="text-white">EXPERIENCE_LOG</span>
                <span className="h-px bg-green-900 flex-grow ml-4"></span>
            </h2>
            
            <div className="relative border-l border-green-900/50 ml-4 md:ml-0 pl-10 space-y-12">
                {/* Role 1 */}
                <div className="relative">
                    <span className="absolute -left-[45px] top-6 h-3 w-3 bg-black border border-green-500 rounded-full shadow-[0_0_10px_#0f0]"></span>
                    <div className="terminal-card p-6 md:p-8 rounded-sm relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition transform group-hover:scale-110 duration-500">
                            <i className="fas fa-terminal text-6xl text-green-500"></i>
                        </div>
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 relative z-10">
                            <div>
                                <h3 className="text-2xl font-bold text-white tracking-tight">Cybersecurity Intern</h3>
                                <p className="text-green-500 font-mono mt-1">&gt; @ Elevate Labs</p>
                            </div>
                            <span className="text-xs font-mono text-gray-500 border border-gray-800 px-2 py-1 rounded bg-black/50 mt-2 md:mt-0">[ 2025 :: PRESENT ]</span>
                        </div>
                        <div className="text-gray-400 font-mono text-sm space-y-3 relative z-10">
                            <p className="flex gap-3 hover:text-green-200 transition-colors"><span className="text-green-500">&gt;&gt;</span> Executed Wireshark traffic capture and protocol analysis in Linux VBox</p>
                            <p className="flex gap-3 hover:text-green-200 transition-colors"><span className="text-green-500">&gt;&gt;</span> Documented findings in reproducible markdown format for GitHub sharing</p>
                            <p className="flex gap-3 hover:text-green-200 transition-colors"><span className="text-green-500">&gt;&gt;</span> Developed password strength audit Bash script with cross-platform compatibility</p>
                            <p className="flex gap-3 hover:text-green-200 transition-colors"><span className="text-green-500">&gt;&gt;</span> Practiced ethical boundaries in phishing analysis and email header inspection</p>
                            <p className="flex gap-3 hover:text-green-200 transition-colors"><span className="text-green-500">&gt;&gt;</span> Compared vulnerability scanners (OpenVAS, Nessus, Burp Suite) for lab efficiency</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Experience;