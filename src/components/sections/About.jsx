import educationData from "../../data/education-data";
import experienceData from "../../data/experience-data";

const About = () => {
  return (
    <section id="about" className="py-12 flex items-center justify-center">
      <div className="max-w-3xl flex flex-col items-center gap-6 p-4">
        <h2 className="text-lg md:text-xl font-bold">About Me</h2>
        <div className="flex flex-col gap-12">
          <p className="text-sm md:text-base font-medium text-gray-400">
            I'm a{" "}
            <span className="font-bold text-white">Fullstack Developer</span>{" "}
            with expertise in building scalable web applications and creating
            innovative solutions. I am excited about building saas apps that has
            real-world use cases.
          </p>

          {/* Education and Experience */}
          <div className="grid grid-cols-1 gap-12">
            {/* Experience */}
            <div className="space-y-4">
              <p className="text-base md:text-lg font-bold">Experience</p>
              {experienceData.map((exp) => (
                <div className="text-sm flex flex-col border-2 border-gray-700 rounded-2xl p-4 gap-4">
                  <div className="flex items-center gap-2">
                    <img
                      src={exp.imageURL}
                      alt="ucf"
                      className="size-12 object-cover rounded-full"
                    />
                    <div className="flex flex-col justify-center gap-1">
                      <span className="font-bold">{exp.name}</span>
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                  <span className="italic font-medium">Related Work:</span>
                  <ul className="list-disc ml-4 space-y-2">
                    {exp.relatedWork.map((expWork) => (
                      <li>{expWork}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            {/* Education */}
            <div>
              <p className="text-base md:text-lg font-bold mb-4">Education</p>
              {educationData.map((edu) => (
                <div className="text-sm flex flex-col gap-4 border-2 border-gray-700 rounded-2xl p-4">
                  <div className="flex items-center gap-2">
                    <img
                      src={edu.imageURL}
                      alt="ucf"
                      className="size-12 object-cover rounded-full"
                    />

                    <div className="flex flex-col justify-center gap-1">
                      <span className="font-bold">
                        {edu.degree} - {edu.institution}
                      </span>
                      <span>
                        {edu.duration} | GPA: {edu.gpa}
                      </span>
                    </div>
                  </div>
                  <span className="italic font-medium">
                    Related Course Work:{" "}
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {edu.courses.map((eduCourse, index) => (
                      <span
                        className="px-4 py-2 rounded bg-stone-900 text-white text-xs font-bold"
                        key={index}
                      >
                        {eduCourse}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
