import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact-footer" className="border-t border-green-900/30 py-16 bg-black relative z-10">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-white mb-8 font-mono">ESTABLISH_UPLINK</h2>
        <div className="flex justify-center gap-10 mb-10">
            <a href="https://linkedin.com/in/d-v-s-saaketh" target="_blank" rel="noreferrer" className="group relative">
                <div className="absolute -inset-2 bg-blue-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <i className="fab fa-linkedin text-4xl text-gray-500 group-hover:text-blue-500 transition relative z-10"></i>
            </a>
            <a href="https://github.com/Saaketh-max" target="_blank" rel="noreferrer" className="group relative">
                <div className="absolute -inset-2 bg-white/10 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <i className="fab fa-github text-4xl text-gray-500 group-hover:text-white transition relative z-10"></i>
            </a>
            <a href="mailto:Esaisaaketh21@gmail.com" className="group relative">
                <div className="absolute -inset-2 bg-red-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <i className="fas fa-envelope text-4xl text-gray-500 group-hover:text-red-500 transition relative z-10"></i>
            </a>
        </div>
        <p className="text-gray-600 text-xs font-mono">
            <span className="text-green-800">root@saaketh:~$</span> echo "© 2025 D.V.S. Saaketh. Encrypted & Secure."
        </p>
      </div>
    </footer>
  );
};

export default Footer;