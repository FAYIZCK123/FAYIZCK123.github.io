export default function Navbar() {
  const navItems = ['About', 'Education', 'Skills', 'Projects', 'Certifications', 'Contact'];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/90 dark:bg-[#050505]/90 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 animate-fade-in">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="text-2xl font-black tracking-tighter text-neutral-900 dark:text-neutral-100 uppercase">
          Fayiz.
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-semibold text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors tracking-wide"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Space on the right so the fixed ThemeToggle doesn't overlap text */}
        <div className="w-14"></div> 
      </div>
      
      {/* Mobile Navigation List (Visible only on small screens) */}
      <nav className="md:hidden flex overflow-x-auto px-6 pb-3 gap-6 no-scrollbar">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-xs font-semibold whitespace-nowrap text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors uppercase tracking-wider"
          >
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
}
