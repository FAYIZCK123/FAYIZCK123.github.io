const projects = [
  {
    id: 1,
    title: "Pressure Sensing Mat for Walking Analysis",
    description: "Multi-channel pressure sensing system using FSR sensors with scalable switching architecture. Implemented embedded firmware on STM32 for real-time data acquisition and resolved complex signal integrity challenges.",
    tags: ["FSR Sensors", "STM32", "Firmware", "Sensors", "ADC/SPI"],
  },
  {
    id: 2,
    title: "5-DOF Robotic Arm with User Interfaces",
    description: "Developed a 5-DOF robotic arm for pick-and-place tasks featuring Python-based UI control, vision-based finger tracking, and gesture-based control using an MPU6050 IMU for real-time servo actuation.",
    tags: ["Python", "Robotics", "Computer Vision", "IMU"],
  },
  {
    id: 3,
    title: "Bond Graph Modeling of Hoist System",
    description: "Designed and analyzed an electromechanical hoist system using 20-sim. Leveraged bond graph modeling to gain critical insights into dynamic system behavior across interacting electrical and mechanical domains.",
    tags: ["20-sim", "Bond Graph Modeling", "Electromechanics"],
  },
  {
    id: 4,
    title: "IoT-Based Smart Parking System",
    description: "Built an IoT parking system using ESP32, IR sensors, and RFID authentication. Implemented ThingsBoard interface for real-time slot tracking and automated cloud-based access control.",
    tags: ["ESP32", "IoT", "ThingsBoard", "RFID"],
  },
];

export default function ProjectsGrid() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-neutral-200 dark:border-neutral-900">
      <div className="mb-12 animate-fade-in">
        <h2 className="text-sm md:text-base font-semibold uppercase tracking-widest text-neutral-500 mb-2">
          Projects
        </h2>
        <h3 className="text-3xl md:text-4xl font-black text-neutral-900 dark:text-neutral-100 tracking-tight">
          Things I've Built.
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative flex flex-col p-8 rounded-2xl bg-neutral-100 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 hover:-translate-y-1 hover:bg-neutral-50 dark:hover:bg-neutral-900 hover:shadow-xl dark:hover:shadow-2xl hover:shadow-neutral-200 dark:hover:shadow-black/50"
          >
            <h3 className="text-2xl font-semibold mb-3 text-neutral-800 dark:text-neutral-200 group-hover:text-black dark:group-hover:text-white transition-colors">
              {project.title}
            </h3>

            <p className="text-neutral-600 dark:text-neutral-400 mb-8 flex-1 leading-relaxed text-balance">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8 mt-auto">
              {project.tags.map(tag => (
                <span key={tag} className="text-xs font-medium px-3 py-1 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-full text-neutral-600 dark:text-neutral-400 group-hover:border-neutral-300 dark:group-hover:border-neutral-700 transition-colors">
                  {tag}
                </span>
              ))}
            </div>

            <button className="text-sm font-medium text-neutral-600 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-white flex items-center gap-2 transition-colors mt-auto w-max">
              View Project <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
