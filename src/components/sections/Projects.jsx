import { Github, Globe } from "lucide-react";
import project1 from "../../assets/project-1.png";
import project2 from "../../assets/project-2.png";
import project3 from "../../assets/project-3.png";
import project4 from "../../assets/project-4.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "SnapLink - A Full-Stack URL Shortner App",
      image: project1,
      website: "https://snaplinkurl.vercel.app/",
      code: "https://github.com/joeldasari/snap-link",
      technologies: [
        "React JS",
        "Tailwind CSS",
        "Shadcn",
        "Recharts",
        "Supabase",
      ],
      description:
        "You can shorten any long URL and share it effortlessly. Each link will have it's own QR code, and you also get a dashboard for each link to track stats. The best part? You can even create custom short links.",
    },
    {
      id: 2,
      name: "LogoCraft - An AI-Powered Logo Generator",
      image: project2,
      code: "https://github.com/joeldasari/logocraft",
      website: "https://logocraftai.vercel.app/",
      technologies: [
        "Next JS",
        "Tailwind CSS",
        "Shadcn",
        "Clerk",
        "MongoDB",
        "Hugging Face API",
      ],
      description:
        "Create stunning logos in just a few simple steps. Just enter your title, share your idea, pick a color palette and theme — and voilà, your logo is ready in seconds.",
    },
    {
      id: 3,
      name: "Socially - A Minimal Social Media Platform",
      image: project3,
      code: "https://github.com/joeldasari/socially",
      website: "https://socially-one-sigma.vercel.app/",
      technologies: [
        "React JS",
        "Tailwind CSS",
        "TypeScript",
        "React Router",
        "React Query",
        "Supabase",
      ],
      description:
        "A Minimal Social Media App with protected routes, allowing authenticated users to post, like, comment, and delete their own content. Users need to authenticated via Google.",
    },
    {
      id: 4,
      name: "Rose AI - An AI-Powered Virtual Assistant",
      image: project4,
      code: "https://github.com/joeldasari/rose-ai",
      website: "https://rose-ai-chi.vercel.app/",
      technologies: ["React JS", "Context API", "Gemini API", "Web Speech API"],
      description:
        "Rose AI is a voice-enabled virtual assistant built with React JS. It uses the Gemini API for intelligent responses and the Web Speech API to understand and imitate human speech in real time.",
    },
  ];

  return (
    <section id="projects" className="py-12 flex items-center justify-center">
      <div className="max-w-3xl flex flex-col items-center gap-6 p-4">
        <h2 className="text-lg md:text-xl font-bold">Featured Projects</h2>
        <div className="grid grid-cols-1 gap-12 w-full">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col gap-4 border-2 border-gray-700 rounded-2xl relative pb-12"
            >
              <a href={project.website} target="_blank">
                <img
                  src={project.image}
                  alt={project.name}
                  className="rounded-t-2xl object-cover"
                />
              </a>
              <div className="flex flex-col gap-4 p-4">
                <h3 className="text-base md:text-lg font-bold">
                  {project.name}
                </h3>
                <p className="text-xs md:text-sm font-medium text-gray-400">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-stone-800 text-white px-3 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between absolute bottom-0 left-0 right-0 p-4">
                  <a
                    href={project.website}
                    target="_blank"
                    className="bg-white text-black text-xs flex items-center gap-2 font-medium px-4 py-2 rounded"
                  >
                    <Globe className="size-4" /> Website
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    className="bg-white text-black text-xs flex items-center gap-2 font-medium px-4 py-2 rounded"
                  >
                    <Github className="size-4" /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
