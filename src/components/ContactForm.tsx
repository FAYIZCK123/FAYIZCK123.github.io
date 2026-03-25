export default function ContactForm() {
  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto w-full border-t border-neutral-200 dark:border-neutral-900">
      <div className="bg-neutral-100/50 dark:bg-neutral-900/30 border border-neutral-200 dark:border-neutral-800 rounded-[2rem] p-8 md:p-14 flex flex-col md:flex-row gap-12 md:gap-20">

        {/* Contact Info Side */}
        <div className="md:w-1/3 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-neutral-900 dark:text-neutral-100 mb-6 tracking-tight">
              Get In Touch.
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base leading-relaxed mb-8">
              Whether you have a question about a project, a potential opportunity, or just want to say hi, my inbox is always open!
            </p>
          </div>
          <div>
            <a
              href="mailto:ckfayi48@gmail.com"
              className="inline-flex items-center gap-2 text-neutral-900 dark:text-neutral-100 font-bold hover:text-neutral-500 dark:hover:text-neutral-400 transition-colors uppercase tracking-widest text-sm"
            >
              Send an Email
            </a>
          </div>
        </div>

        {/* Compact Form Side */}
        <form className="md:w-2/3 flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Name Input */}
            <div className="flex-1">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-white dark:bg-neutral-950/50 border border-neutral-200 dark:border-neutral-800 rounded-xl px-5 py-4 text-sm outline-none focus:border-neutral-400 dark:focus:border-neutral-600 transition-colors text-neutral-900 dark:text-white placeholder:text-neutral-400"
              />
            </div>
            {/* Email Input */}
            <div className="flex-1">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-white dark:bg-neutral-950/50 border border-neutral-200 dark:border-neutral-800 rounded-xl px-5 py-4 text-sm outline-none focus:border-neutral-400 dark:focus:border-neutral-600 transition-colors text-neutral-900 dark:text-white placeholder:text-neutral-400"
              />
            </div>
          </div>

          {/* Message Area */}
          <textarea
            rows={5}
            placeholder="How can I help you?"
            className="w-full bg-white dark:bg-neutral-950/50 border border-neutral-200 dark:border-neutral-800 rounded-xl px-5 py-4 text-sm outline-none focus:border-neutral-400 dark:focus:border-neutral-600 transition-colors resize-none text-neutral-900 dark:text-white placeholder:text-neutral-400"
          ></textarea>

          <button
            type="button"
            className="mt-2 w-full md:w-auto self-end px-10 py-4 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 text-sm font-bold rounded-xl hover:opacity-80 transition-opacity shadow-lg"
          >
            Submit Message
          </button>
        </form>

      </div>
    </section>
  );
}
