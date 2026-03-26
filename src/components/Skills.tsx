const skillCategories = [
  {
    category: "Hardware",
    skills: ["Programmable Logic Controllers (PLC)", "Raspberry Pi", "STM32", "Arduino", "ESP Microcontrollers"]
  },
  {
    category: "Electrical & Mechanical Software",
    skills: ["LTSpice", "LabVIEW", "FluidSIM", "AMESim", "20-sim"]
  },
  {
    category: "Programming",
    skills: ["MATLAB", "C", "Python"]
  },
  {
    category: "PLC Software",
    skills: ["LogixPro", "WinSPS", "Factory IO"]
  },
  {
    category: "Robotics Software",
    skills: ["RoboDK"]
  },
  {
    category: "Pneumatics & Hydraulics",
    skills: ["Pneumatic Systems", "Electro-Pneumatics", "Hydraulics"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full border-t border-neutral-200 dark:border-neutral-900">
      <div className="flex flex-col items-center mb-16 text-center">
        <h2 className="text-sm md:text-base font-semibold uppercase tracking-widest text-neutral-500 mb-2 animate-fade-in">
          Skills
        </h2>
        <h3 className="text-3xl md:text-4xl font-black text-neutral-900 dark:text-neutral-100 mb-4 animate-fade-in tracking-tight">
          Technical Toolkit.
        </h3>
        <p className="text-neutral-600 dark:text-neutral-400 text-center max-w-2xl">
          A comprehensive toolkit spanning hardware design, control systems, and software engineering.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((group, index) => (
          <div 
            key={index} 
            className="p-6 md:p-8 rounded-2xl bg-neutral-100 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors duration-300 flex flex-col gap-5 group"
          >
            <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200 group-hover:text-black dark:group-hover:text-white transition-colors">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, sIndex) => (
                <span 
                  key={sIndex} 
                  className="px-3 py-1.5 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-lg text-sm text-neutral-600 dark:text-neutral-400 group-hover:border-neutral-300 dark:group-hover:border-neutral-700 group-hover:text-neutral-900 dark:group-hover:text-neutral-300 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
