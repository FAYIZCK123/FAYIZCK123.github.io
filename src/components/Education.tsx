export default function Education() {
  const educationData = [
    {
      degree: "M-Tech in Mechatronics Engineering",
      institution: "National Institute of Technology Karnataka, Surathkal",
    },
    {
      degree: "B-Tech in Electronics and Communication Engineering",
      institution: "College of Engineering Thalassery",
    }
  ];

  return (
    <section id="education" className="py-24 px-6 md:px-12 max-w-5xl mx-auto w-full border-t border-neutral-200 dark:border-neutral-900">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
        <div className="md:w-1/3 shrink-0">
          <h2 className="text-sm md:text-base font-semibold uppercase tracking-widest text-neutral-500 mb-2">
            Education
          </h2>
          <h3 className="text-3xl md:text-4xl font-black text-neutral-900 dark:text-neutral-100 tracking-tight">
            Academic Background.
          </h3>
        </div>
        
        <div className="md:w-2/3 flex flex-col gap-10 w-full">
          {educationData.map((edu, index) => (
            <div 
              key={index} 
              className="flex flex-col border-l-2 border-neutral-300 dark:border-neutral-800 pl-6 relative before:absolute before:w-3 before:h-3 before:bg-neutral-400 dark:before:bg-neutral-600 before:rounded-full before:-left-[7px] before:top-2 hover:before:bg-neutral-900 dark:hover:before:bg-neutral-200 before:transition-colors group hover:border-neutral-400 dark:hover:border-neutral-500 transition-colors duration-300"
            >
              <h3 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-200 group-hover:text-black dark:group-hover:text-white transition-colors mb-2">
                {edu.degree}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-lg">
                {edu.institution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
