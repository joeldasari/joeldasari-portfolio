const Contact = () => {
  const socialMediaLinks = [
    {
      icon: "https://skillicons.dev/icons?i=gmail",
      link: "mailto:joelsriprakashdasari@gmail.com",
    },
    {
      icon: "https://skillicons.dev/icons?i=linkedin",
      link: "https://www.linkedin.com/in/joeldasari01/",
    },
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png",
      link: "https://wa.me/+14074487826",
    },
    {
      icon: "https://skillicons.dev/icons?i=instagram",
      link: "https://instagram.com/joeldasari",
    },
    {
      icon: "https://skillicons.dev/icons?i=github",
      link: "https://github.com/joeldasari",
    },
  ];
  return (
    <section id="contact" className="py-12 flex items-center justify-center">
      <div className="max-w-3xl flex flex-col items-center gap-6 p-4">
        <h2 className="text-lg md:text-xl font-bold">Contact Me</h2>
        <p className="text-sm md:text-base font-medium text-center text-red-500">
          I'm currently seeking fullstack developer opportunities. <br />
          Please feel free to connect.
        </p>
        <div className="grid grid-cols-5  gap-2 md:gap-8 text-sm">
          {socialMediaLinks.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              className="flex items-center bg-stone-900 rounded px-4 py-2 hover:bg-stone-800 transition-colors duration-300"
            >
              <img src={social.icon} alt="icon" className="size-7 md:size-8" />
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
