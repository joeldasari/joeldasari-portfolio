import contactData from "../../data/contact-data";

const Contact = () => {
  return (
    <section id="contact" className="py-12 flex items-center justify-center">
      <div className="max-w-3xl flex flex-col items-center gap-6 p-4">
        <h2 className="text-lg md:text-xl font-bold">Contact Me</h2>
        <p className="text-sm md:text-base font-medium text-center text-gray-400">
          I'm currently seeking{" "}
          <span className="font-bold text-white">
            Summer 2026 SWE Internship
          </span>{" "}
          opportunities. <br />
          Please feel free to connect.
        </p>
        <div className="grid grid-cols-5  gap-2 md:gap-8 text-sm">
          {contactData.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              target="_blank"
              className="flex items-center bg-stone-900 rounded px-4 py-2 hover:bg-stone-800 transition-colors duration-300"
            >
              <img src={contact.icon} alt="icon" className="size-7 md:size-8" />
            </a>
          ))}
        </div>
        <p className="text-xs md:text-sm font-medium text-gray-400">
          Copyright © Joel Dasari 2025
        </p>
      </div>
    </section>
  );
};

export default Contact;
