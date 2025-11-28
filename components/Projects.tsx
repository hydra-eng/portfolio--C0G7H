
import React, { useEffect, useState } from 'react';
import { PROJECTS } from '../constants';

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  updated_at: string;
}

const Projects: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchGitHubProjects = async () => {
        const username = 'Saaketh-max';
        const excludedRepos = [
            'Google-Chrome-Extension-Audit-Report',
            'Linux-Firewall-Configuration-UFW',
            'repo 1', 'Repo-1', 'repo-1', 'repo1', 'Repo1'
        ];

        try {
            const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&direction=desc`);
            
            if (!response.ok) {
                // If rate limited or error, throw to catch block to use fallback
                throw new Error("GitHub API Error or Rate Limit");
            }
            
            const data = await response.json();
            const filtered = data.filter((repo: Repo) => {
                const name = repo.name.toLowerCase();
                return !excludedRepos.some(ex => name === ex.toLowerCase() || name.includes(ex.toLowerCase()));
            });
            
            setRepos(filtered);
            setLoading(false);
        } catch (err) {
            console.warn("Falling back to static project data due to:", err);
            
            // Fallback to static PROJECTS from constants if API fails
            const fallbackRepos: Repo[] = PROJECTS.map((p, index) => ({
                id: p.id,
                name: p.title,
                description: p.description,
                html_url: p.githubUrl || '#',
                language: p.tags[0] || 'Tech',
                updated_at: new Date().toISOString()
            }));
            
            setRepos(fallbackRepos);
            setLoading(false);
            // We don't set error=true so the UI displays the projects instead of an error message
        }
    };

    fetchGitHubProjects();
  }, []);

  const getLanguageColor = (lang: string) => {
    const colors: {[key: string]: string} = {
        'Python': 'text-blue-400',
        'JavaScript': 'text-yellow-300',
        'HTML': 'text-orange-400',
        'CSS': 'text-blue-300',
        'Shell': 'text-green-400',
        'C++': 'text-purple-400',
        'Java': 'text-red-400',
        'Bash': 'text-green-400',
        'Wireshark': 'text-blue-500',
        'OpenVAS': 'text-green-500'
    };
    return colors[lang] || 'text-gray-400';
  };

  return (
    <section id="projects" className="py-20 border-t border-green-900/20 relative z-10">
        <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 font-mono">
                <span className="text-green-500">03.</span> 
                <span className="text-white">ACTIVE_OPERATIONS</span>
                <span className="h-px bg-green-900 flex-grow ml-4"></span>
            </h2>
            
            <p className="text-gray-500 mb-12 max-w-2xl font-mono text-sm">// Fetching live data from GitHub repository: 'Saaketh-max'</p>

            {loading && (
                <div className="col-span-1 md:col-span-2 text-center py-20">
                    <div className="text-green-500 text-6xl mb-4 animate-spin inline-block">
                        <i className="fas fa-circle-notch"></i>
                    </div>
                    <p className="text-gray-400 font-mono text-xl">Establishing Uplink</p>
                    <p className="text-gray-600 font-mono text-sm mt-2">Retrieving project directives from remote server...</p>
                </div>
            )}

            {error && (
                <div className="text-center py-10">
                    <div className="text-red-500 font-mono">
                        <i className="fas fa-exclamation-triangle text-4xl mb-4"></i>
                        <p className="text-xl">CONNECTION_REFUSED</p>
                        <p className="text-sm mt-2 text-gray-500">Could not retrieve project data from GitHub API.</p>
                    </div>
                </div>
            )}

            {!loading && !error && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {repos.map(repo => (
                        <div key={repo.id} className="terminal-card rounded-lg border border-green-500/30 flex flex-col hover:border-green-400 transition-colors overflow-hidden h-full transform hover:-translate-y-1 duration-300 group">
                            <div className="bg-gray-900 p-2 flex items-center justify-between gap-2 text-xs text-gray-400 border-b border-gray-800 font-mono z-20 relative">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                    <span className="text-green-600">./{repo.name}</span>
                                </div>
                                <span>{new Date(repo.updated_at).toLocaleDateString()}</span>
                            </div>
                            
                            <div className="project-image-container h-48 w-full bg-black relative group-hover:opacity-100 transition-opacity">
                                <img 
                                    src={`https://picsum.photos/seed/${repo.name}/600/300?grayscale`} 
                                    alt={`${repo.name} preview`} 
                                    className="w-full h-full object-cover project-image opacity-60 hover:opacity-100" 
                                />
                            </div>

                            <div className="p-6 bg-black/90 relative flex-grow flex flex-col justify-between border-t border-green-900/30">
                                <div className="relative z-10">
                                    <div className="flex items-start justify-between mb-4">
                                        <h3 className="text-xl font-bold text-white break-all tracking-tight group-hover:text-green-400 transition-colors">{repo.name}</h3>
                                        {(repo.name === 'Quantum-Phishing-Sandbox' || repo.description?.toLowerCase().includes('in progress')) && (
                                            <span className="text-yellow-400 text-[10px] font-bold tracking-widest border border-yellow-400 px-2 py-0.5 rounded bg-yellow-400/10 animate-pulse whitespace-nowrap ml-2">IN PROGRESS</span>
                                        )}
                                    </div>
                                    <p className="text-gray-400 mb-6 leading-relaxed font-mono text-sm line-clamp-3">
                                        {repo.description || '// No description provided. View source code for details.'}
                                    </p>
                                </div>

                                <div className="relative z-10 flex items-center justify-between mt-auto pt-4 border-t border-gray-800">
                                    <span className={`text-xs font-mono px-2 py-1 bg-gray-800 rounded border border-gray-700 ${getLanguageColor(repo.language || 'Plain Text')}`}>
                                        {repo.language || 'Plain Text'}
                                    </span>
                                    <a href={repo.html_url} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition hover:scale-105 transform duration-300 flex items-center gap-2 group">
                                        <span className="text-xs font-mono group-hover:text-green-400">ACCESS_CODE</span>
                                        <i className="fab fa-github text-xl"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    </section>
  );
};

export default Projects;
