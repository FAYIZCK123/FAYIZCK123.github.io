export default function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-center min-h-screen px-6 gap-12 max-w-6xl mx-auto animate-fade-in-up">
      
      {/* Text Content */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1 mt-10 md:mt-0">
        <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base uppercase tracking-widest font-semibold mb-4">
          Hello, I'm
        </p>
        
        {/* Enlarged, Highlighted Name */}
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-500 dark:from-neutral-100 dark:to-neutral-600">
          Fayiz C K
        </h1>
        
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 text-neutral-700 dark:text-neutral-300">
          Mechatronics Engineer
        </h2>
        
        <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mb-10 text-balance">
          Building real-world engineering solutions using the principles of mechatronics, automation, and embedded systems.
        </p>

        <div className="flex flex-wrap items-center justify-center md:justify-start gap-6">
          <a
            href="#contact"
            className="px-8 py-4 bg-neutral-900 text-neutral-100 dark:bg-neutral-100 dark:text-neutral-900 rounded-full font-medium hover:bg-neutral-800 dark:hover:bg-neutral-300 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Get In Touch
          </a>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://www.linkedin.com/in/fayizck" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors p-2"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            
            <a 
              href="https://github.com/FAYIZCK123" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors p-2"
              aria-label="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.18-.34 6.52-1.54 6.52-7.95 0-1.82-.64-3.23-1.68-4.37.16-.4.73-2.07-.16-4.31 0 0-1.37-.44-4.48 1.66A15.34 15.34 0 0 0 12 3.15c-1.3.03-2.61.3-3.84.88-3.11-2.1-4.48-1.66-4.48-1.66-.89 2.24-.32 3.91-.16 4.31C2.44 9.07 1.8 10.49 1.8 12.31c0 6.4 3.34 7.6 6.52 7.95A4.7 4.7 0 0 0 7 21v5"></path>
              </svg>
            </a>

            <a 
              href="https://www.instagram.com/_fayizck_/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors p-2"
              aria-label="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Profile Photo Container */}
      <div className="relative flex-1 flex justify-center md:justify-end w-full max-w-[180px] md:max-w-[240px] mt-16 md:mt-0">
        
        {/* Floating Sensor (Top Left) */}
        <div className="absolute -top-4 -left-6 z-10 w-12 h-12 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl shadow-lg flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:scale-110 transition-transform cursor-pointer group/icon" title="Signal Processing Array">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/icon:text-blue-500 transition-colors">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
          </svg>
        </div>

        {/* Floating IC Chip (Right) */}
        <div className="absolute top-1/2 -right-12 md:-right-16 -translate-y-1/2 z-10 w-14 h-14 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-full shadow-lg flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:scale-110 transition-transform cursor-pointer group/icon" title="Microcontroller">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/icon:text-green-500 transition-colors">
            <rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/>
          </svg>
        </div>

        {/* Floating Actuator / Gear (Bottom Left) */}
        <div className="absolute -bottom-2 -left-3 z-10 w-10 h-10 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg shadow-lg flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:scale-110 transition-transform cursor-pointer group/icon" title="Servo Actuator">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/icon:text-orange-500 transition-colors">
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>
          </svg>
        </div>

        {/* Floating Op-Amp (Bottom Right) */}
        <div className="absolute -bottom-6 -right-2 z-10 w-12 h-12 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl shadow-lg flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:scale-110 transition-transform cursor-pointer group/icon" title="Operational Amplifier">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/icon:text-purple-500 transition-colors">
            <polygon points="5,4 21,12 5,20" />
            <line x1="1" y1="8" x2="5" y2="8" />
            <line x1="1" y1="16" x2="5" y2="16" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="7" y1="8" x2="10" y2="8" />
            <line x1="8.5" y1="6.5" x2="8.5" y2="9.5" />
            <line x1="7" y1="16" x2="10" y2="16" />
          </svg>
        </div>

        <div className="relative aspect-square w-full rounded-full overflow-hidden border-4 border-neutral-300 dark:border-neutral-800 shadow-xl dark:shadow-2xl hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors duration-500 group">
          <img src="/profile.jpg" alt="Fayiz C K" className="w-full h-full object-cover scale-[1.12] group-hover:scale-[1.18] transition-transform duration-700 bg-neutral-100 dark:bg-neutral-900" />
        </div>
      </div>

    </section>
  );
}
