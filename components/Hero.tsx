
import React, { useEffect, useRef, useState } from 'react';
import { CONTACT_INFO } from '../constants';

const Hero: React.FC = () => {
  const [terminalOutput, setTerminalOutput] = useState<React.ReactElement[]>([]);
  const [terminalInput, setTerminalInput] = useState('');
  
  // Refs
  const terminalWindowRef = useRef<HTMLDivElement>(null);
  const nameContainerRef = useRef<HTMLHeadingElement>(null);
  const typewriterRef = useRef<HTMLSpanElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // --- Magnetic Name Effect ---
  useEffect(() => {
    const nameText = "D.V.S. SAAKETH";
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";
    const container = nameContainerRef.current;
    if (!container) return;

    // Initial render of characters
    let html = '';
    for (let i = 0; i < nameText.length; i++) {
        if (nameText[i] === ' ') {
            html += '<span class="hacker-char" style="width: 1rem; display:inline-block;">&nbsp;</span>';
        } else {
            html += `<span class="hacker-char" data-char="${nameText[i]}">${chars[Math.floor(Math.random() * chars.length)]}</span>`;
        }
    }
    container.innerHTML = html;

    const charElements = container.querySelectorAll('.hacker-char') as NodeListOf<HTMLElement>;

    // Decode Animation
    let iteration = 0;
    const decodeInterval = setInterval(() => {
        charElements.forEach((el, index) => {
            if (index < iteration) {
                el.innerText = el.getAttribute('data-char') || '';
                el.style.color = 'white';
            } else {
                el.innerText = chars[Math.floor(Math.random() * chars.length)];
                el.style.color = '#0f0';
            }
        });
        if (iteration >= nameText.length) clearInterval(decodeInterval);
        iteration += 1/3;
    }, 30);

    // Magnetic Repulsion Logic
    const handleMouseMove = (e: MouseEvent) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        charElements.forEach(char => {
            const rect = char.getBoundingClientRect();
            const charCenterX = rect.left + rect.width / 2;
            const charCenterY = rect.top + rect.height / 2;

            const distanceX = mouseX - charCenterX;
            const distanceY = mouseY - charCenterY;
            const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
            const maxDistance = 150;

            if (distance < maxDistance) {
                const power = (maxDistance - distance) / maxDistance;
                const moveX = -(distanceX * power * 0.8);
                const moveY = -(distanceY * power * 0.8);
                char.style.transform = `translate(${moveX}px, ${moveY}px)`;
                char.style.color = '#00ff41';
            } else {
                char.style.transform = 'translate(0, 0)';
                char.style.color = 'white';
            }
        });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
        clearInterval(decodeInterval);
        window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // --- Typewriter Effect ---
  useEffect(() => {
    const text = "Cybersecurity Intern | B.Tech CSE";
    const element = typewriterRef.current;
    if (!element) return;
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    };
    setTimeout(typeWriter, 800);
  }, []);

  // --- Terminal Logic ---
  const handleTerminalSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const command = terminalInput.trim().toLowerCase();
      
      const newOutput = [
        ...terminalOutput,
        <div key={Date.now() + '-cmd'} className="mb-1">
          <span className="text-green-500 mr-2">root@kali:~/portfolio#</span>
          <span className="text-white">{terminalInput}</span>
        </div>
      ];

      let response: React.ReactElement | null = null;
      let action: (() => void) | null = null;

      switch (command) {
        case 'help':
          response = (
            <div className="text-gray-300 ml-4 mb-2 border-l border-green-500/30 pl-3">
                <p className="text-green-400 font-bold mb-1">AVAILABLE COMMANDS:</p>
                <div className="grid grid-cols-[100px_1fr] gap-2 text-sm">
                    <span className="text-yellow-400">projects</span> <span>View GitHub projects (scrolls to section)</span>
                    <span className="text-yellow-400">certs</span>    <span>List certifications (scrolls to section)</span>
                    <span className="text-yellow-400">about</span>    <span>Display user profile info</span>
                    <span className="text-yellow-400">contact</span>  <span>Display contact channels</span>
                    <span className="text-yellow-400">clear</span>    <span>Clear terminal output</span>
                </div>
            </div>
          );
          break;
        case 'projects':
        case 'ls projects':
          response = <div className="text-green-400 ml-4 mb-2">&gt;&gt; Initiating jump to coordinates: <span className="text-white">#PROJECTS</span>...</div>;
          action = () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
          break;
        case 'certs':
        case 'certifications':
          response = <div className="text-green-400 ml-4 mb-2">&gt;&gt; Decrypting assets at: <span className="text-white">#CERTIFICATIONS</span>...</div>;
          action = () => document.getElementById('certifications')?.scrollIntoView({ behavior: 'smooth' });
          break;
        case 'about':
        case 'whoami':
          response = (
            <div className="text-gray-300 ml-4 mb-2 font-mono text-xs">
                &gt; UID: 1000 (saaketh)<br/>
                &gt; ROLE: Cybersecurity Intern @ Elevate Labs<br/>
                &gt; STATUS: Active / Ready for Deployment<br/>
                &gt; MISSION: Protocol Analysis & Phishing Detection
            </div>
          );
          action = () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          break;
        case 'contact':
        case 'contact.sh':
        case './contact_me.sh':
        case 'contact_me':
          response = (
             <div className="text-gray-300 ml-4 mb-2 font-mono text-xs">
                &gt; PHONE: {CONTACT_INFO.phone}<br/>
                &gt; EMAIL: {CONTACT_INFO.email}<br/>
                &gt; LINKEDIN: {CONTACT_INFO.linkedin}<br/>
                &gt; GITHUB: {CONTACT_INFO.github}
            </div>
          );
          action = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          break;
        case 'clear':
        case 'cls':
          setTerminalOutput([]);
          setTerminalInput('');
          return;
        default:
          if (command !== '') {
            response = <div className="text-red-400 ml-4 mb-2">bash: {command}: command not found. Type 'help'.</div>;
          }
      }

      if (response) {
        newOutput.push(<div key={Date.now() + '-resp'}>{response}</div>);
      }

      setTerminalOutput(newOutput);
      setTerminalInput('');
      
      if (action) {
        setTimeout(action, 500);
      }
    }
  };

  // Auto-scroll terminal container ONLY
  useEffect(() => {
    if (terminalWindowRef.current) {
      terminalWindowRef.current.scrollTop = terminalWindowRef.current.scrollHeight;
    }
  }, [terminalOutput]);

  // Auto-focus input on load - preventScroll: true fixes the jumpy page
  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus({ preventScroll: true });
      }
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="about" className="pt-32 pb-20 px-4 min-h-screen flex flex-col justify-center relative z-10">
        <div className="max-w-4xl mx-auto w-full">
            <p className="text-green-500 mb-4 font-bold font-mono text-sm tracking-widest">&gt; INITIATING_BOOT_SEQUENCE...</p>
            
            {/* Animated Magnetic Name */}
            <div className="hacker-name-container mb-6">
                <h1 className="text-5xl md:text-8xl font-bold text-white tracking-tighter" ref={nameContainerRef}>
                    D.V.S. SAAKETH
                </h1>
            </div>

            {/* Typewriter Subtitle */}
            <div className="text-xl md:text-2xl text-gray-400 mb-10 h-16 font-mono">
                <span className="text-green-500 font-bold">$</span> <span ref={typewriterRef} className="typing-cursor text-green-300"></span>
            </div>
            
            {/* Interactive Bash Terminal */}
            <div className="w-full max-w-3xl mb-12 crt-power-on" style={{ animationDelay: '0.5s' }}>
                <div className="bg-black/80 rounded-t-md border-t border-x border-gray-800 p-2 flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <div className="ml-2 text-xs text-gray-500 font-mono">bash -- interactive -- 80x24</div>
                </div>
                <div 
                    id="terminal-window"
                    ref={terminalWindowRef}
                    className="bg-black/90 border border-green-900/50 p-4 h-64 overflow-y-auto font-mono text-sm shadow-2xl backdrop-blur-sm cursor-text scroll-smooth"
                    onClick={() => inputRef.current?.focus({ preventScroll: true })}
                >
                    <div className="mb-2 text-gray-400">
                        <span className="text-green-500">root@kali</span>:<span className="text-blue-400">~</span># ./init_portfolio.sh
                    </div>
                    <div className="mb-2 text-gray-400">
                        &gt; System initialized successfully.<br/>
                        &gt; Welcome, Guest.<br/>
                        &gt; Type <span className="text-white font-bold">'help'</span> to view available commands.
                    </div>
                    
                    {terminalOutput}
                    
                    <div className="flex items-center mt-2">
                        <span className="text-green-500 mr-2 shrink-0">root@kali:~/portfolio#</span>
                        <input 
                            ref={inputRef}
                            type="text" 
                            id="terminal-input"
                            value={terminalInput}
                            onChange={(e) => setTerminalInput(e.target.value)}
                            onKeyDown={handleTerminalSubmit}
                            className="bg-transparent border-none outline-none text-white flex-grow font-mono caret-green-500" 
                            autoComplete="off" 
                            spellCheck="false"
                        />
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
                <a href="#projects" className="group px-8 py-3 bg-green-900/10 text-green-400 border border-green-500 rounded hover:bg-green-500 hover:text-black transition duration-300 font-bold font-mono relative overflow-hidden">
                    <span className="relative z-10">./view_projects.sh</span>
                    <div className="absolute inset-0 h-full w-full bg-green-400/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </a>
            </div>
        </div>
    </section>
  );
};

export default Hero;
