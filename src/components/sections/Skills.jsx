import skillsData from "../../data/skills-data";

const Skills = () => {
  return (
    <section id="skills" className="py-12 flex items-center justify-center">
      <div className="max-w-3xl flex flex-col items-center gap-6 p-4">
        <h2 className="text-lg md:text-xl font-bold">My Skills</h2>
        <div className="grid grid-cols-1 gap-12">
          <div>
            <p className="text-base md:text-lg font-bold mb-4">Languages</p>
            <div className="grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm">
              {skillsData.programmingLanguages.map((skill) => (
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
            <p className="text-base md:text-lg font-bold mb-4">Frontend</p>
            <div className="grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm">
              {skillsData.frontendSkills.map((skill) => (
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
            <div className="grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm">
              {skillsData.backendSkills.map((skill) => (
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
            <p className="text-base md:text-lg font-bold mb-4">Databases</p>
            <div className="grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm">
              {skillsData.databaseSkills.map((skill) => (
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
            <div className="grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm">
              {skillsData.tools.map((skill) => (
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
