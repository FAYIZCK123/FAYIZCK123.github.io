export default function Certifications() {
  const certifications = [
    "Siemens PLC and automation",
    "Hydraulic System Design using Simcenter AMESIM",
    "Programming for Everybody (Python)"
  ];

  return (
    <section id="certifications" className="py-24 px-6 md:px-12 max-w-5xl mx-auto w-full border-t border-neutral-200 dark:border-neutral-900">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
        
        <div className="md:w-1/3 shrink-0">
          <h2 className="text-sm md:text-base font-semibold uppercase tracking-widest text-neutral-500 mb-2">
            Certifications
          </h2>
          <h3 className="text-3xl md:text-4xl font-black text-neutral-900 dark:text-neutral-100 tracking-tight">
            Credentials.
          </h3>
        </div>
        
        <div className="md:w-2/3 flex flex-col gap-3 w-full">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="group flex items-center gap-4 py-4 px-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-transparent hover:bg-neutral-50 dark:hover:bg-neutral-900/50 transition-colors"
            >
              <div className="flex-shrink-0 text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="6"></circle>
                  <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
                </svg>
              </div>
              
              <h4 className="text-sm md:text-base font-medium text-neutral-700 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
                {cert}
              </h4>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
