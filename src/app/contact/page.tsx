export default function Contact() {
  return (
    <section className="w-full py-20 px-6 md:px-16 bg-[--background]">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Title */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-[--primary]">Get in Touch</h1>
          <p className="text-[--muted-foreground] max-w-xl mx-auto">
            Have a project in mind, or just want to say hello? Fill out the form
            below or contact us directly.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-[--foreground]">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl bg-transparent border border-[--muted-foreground] text-[--foreground] placeholder-[--muted-foreground] focus:outline-none focus:ring-2 focus:ring-[--primary]"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-[--foreground]">
                Email
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-xl bg-transparent border border-[--muted-foreground] text-[--foreground] placeholder-[--muted-foreground] focus:outline-none focus:ring-2 focus:ring-[--primary]"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-[--foreground]">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Your message..."
                className="w-full px-4 py-3 rounded-xl bg-transparent border border-[--muted-foreground] text-[--foreground] placeholder-[--muted-foreground] focus:outline-none focus:ring-2 focus:ring-[--primary]"
              />
            </div>

            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-[--primary] text-white font-semibold hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-6 text-[--muted-foreground]">
            <div>
              <h2 className="text-xl font-semibold text-[--foreground] mb-2">
                Contact Info
              </h2>
              <p>
                Email:{" "}
                <a
                  href="mailto:example@mail.com"
                  className="text-[--foreground]"
                >
                  example@mail.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <span className="text-[--foreground]">+62 812 3456 7890</span>
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-[--foreground] mb-2">
                Follow Us
              </h2>
              <ul className="flex gap-4">
                <li>
                  <a href="#" className="hover:text-[--primary]">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[--primary]">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[--primary]">
                    Discord
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
