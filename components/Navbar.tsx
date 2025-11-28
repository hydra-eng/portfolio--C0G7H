import React from 'react';

const Navbar: React.FC = () => {
  const navLinks = [
    { name: 'about', href: '#about' },
    { name: 'experience', href: '#experience' },
    { name: 'certs', href: '#certifications' },
    { name: 'projects', href: '#projects' },
    { name: 'contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full bg-black/80 backdrop-blur border-b border-green-900/30 z-40">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-tighter hover:text-green-400 transition cursor-none group">
          <span className="text-green-600 group-hover:text-green-400">root@saaketh</span>
          <span className="text-slate-300">:~# </span>
          <span className="animate-pulse text-green-500">_</span>
        </h1>
        
        <div className="hidden md:flex space-x-6 text-sm font-medium text-gray-500 font-mono">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="nav-link transition hover:text-green-500"
            >
              [ ~/{link.name} ]
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;