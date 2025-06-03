const Skills = () => {
  const frontendSkills = [
    { name: "HTML", icon: "https://skillicons.dev/icons?i=html" },
    { name: "CSS", icon: "https://skillicons.dev/icons?i=css" },
    { name: "JavaScript", icon: "https://skillicons.dev/icons?i=javascript" },
    { name: "TypeScript", icon: "https://skillicons.dev/icons?i=typescript" },
    {
      name: "Tailwind CSS",
      icon: "https://skillicons.dev/icons?i=tailwindcss",
    },
    { name: "React JS", icon: "https://skillicons.dev/icons?i=react" },
    { name: "Next JS", icon: "https://skillicons.dev/icons?i=nextjs" },
  ];
  const backendSkills = [
    { name: "Node JS", icon: "https://skillicons.dev/icons?i=nodejs" },
    { name: "Express JS", icon: "https://skillicons.dev/icons?i=express" },
    { name: "MongoDB", icon: "https://skillicons.dev/icons?i=mongodb" },
    { name: "Supabase", icon: "https://skillicons.dev/icons?i=supabase" },
    { name: "Firebase", icon: "https://skillicons.dev/icons?i=firebase" },
  ];
  const tools = [
    { name: "Git", icon: "https://skillicons.dev/icons?i=git" },
    { name: "GitHub", icon: "https://skillicons.dev/icons?i=github" },
    { name: "VS Code", icon: "https://skillicons.dev/icons?i=vscode" },
    { name: "Figma", icon: "https://skillicons.dev/icons?i=figma" },
    { name: "Postman", icon: "https://skillicons.dev/icons?i=postman" },
  ];
  return (
    <section id="skills" className="py-12 flex items-center justify-center">
      <div className="max-w-3xl flex flex-col items-center gap-6 p-4">
        <h2 className="text-lg md:text-xl font-bold">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-base md:text-lg font-bold mb-4">Frontend</p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              {frontendSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center bg-stone-900 rounded px-4 py-2 gap-2"
                >
                  <img src={skill.icon} alt={skill.name} className="w-6 h-6" />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-base md:text-lg font-bold mb-4">Backend</p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              {backendSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center bg-stone-900 rounded px-4 py-2 gap-2"
                >
                  <img src={skill.icon} alt={skill.name} className="w-6 h-6" />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-base md:text-lg font-bold mb-4">Tools</p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              {tools.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center bg-stone-900 rounded px-4 py-2 gap-2"
                >
                  <img src={skill.icon} alt={skill.name} className="w-6 h-6" />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
