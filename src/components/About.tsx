export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-5xl mx-auto w-full">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
        <div className="md:w-1/3 shrink-0 animate-fade-in">
          <h2 className="text-sm md:text-base font-semibold uppercase tracking-widest text-neutral-500 mb-2">
            About
          </h2>
          <h3 className="text-3xl md:text-4xl font-black text-neutral-900 dark:text-neutral-100 tracking-tight">
            Who I Am.
          </h3>
        </div>
        <div className="md:w-2/3 flex flex-col gap-6 text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed text-balance">
          <p>
            I am an M.Tech student in Mechatronics Engineering at National Institute of Technology Karnataka, with a strong foundation in Electronics and Communication Engineering. My academic journey bridges electronics, control systems, and mechanical integration, enabling me to design and develop intelligent engineering solutions.
          </p>
          <p>
            I have hands-on experience in embedded systems, sensor-based design, and IoT applications, and I enjoy working on projects that translate theoretical concepts into real-world implementations.
          </p>
        </div>
      </div>
    </section>
  );
}
