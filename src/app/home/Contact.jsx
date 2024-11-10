const Contact = () => {
  return (
    <section className="container mx-auto pt-28 px-6 lg:px-12 text-white">
      {/* Section Title */}
      <h1 className="text-4xl font-bold text-center mb-6">Contact Me</h1>

      {/* Description */}
      <p className="text-lg text-center mb-12 max-w-2xl mx-auto">
        If you have any questions, project proposals, or just want to say hello,
        feel free to reach out! I'll get back to you as soon as possible.
      </p>

      {/* Contact Form */}
      <form className="max-w-3xl mx-auto space-y-6">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-lg font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            className="p-4 rounded-lg bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-accent"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-lg font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Your Email"
            className="p-4 rounded-lg bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-accent"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="subject" className="text-lg font-semibold mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            placeholder="Subject"
            className="p-4 rounded-lg bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="text-lg font-semibold mb-2">
            Message
          </label>
          <textarea
            id="message"
            rows="6"
            placeholder="Your Message"
            className="p-4 rounded-lg bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-accent"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-3 px-6 mt-4 bg-accent text-primary font-semibold rounded-lg hover:bg-accent-hover transition duration-300"
        >
          Send Message
        </button>
      </form>

      {/* Additional Contact Information */}
      <div className="text-center mt-12">
        <p className="text-lg">
          Or you can reach me directly at:
          <a
            href="mailto:rdho.hdyat@gmail.com"
            className="text-accent hover:underline ml-1"
          >
            rdho.hdyat@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
