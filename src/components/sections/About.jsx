import ucfLogo from "../../assets/ucf-logo.png";
import kitsLogo from "../../assets/kits-logo.jpg";
import infosolLogo from "../../assets/infosol-logo.jpeg";

const About = () => {
  const mastersCourses = [
    "CDA 5106 - ADV COMPUTER ARCHITECTURE",
    "CIS 6395 - INCIDENT RESPONSE TECHNOLOGIES",
    "COT 5405 - DESIGN & ANALYSIS ALGORITHMS",
    "CEN4360 - MOBILE DEVICE SOFTWARE DEVELOPMENT",
    // Add more courses as needed
  ]

const bachelorsCourses = [
  "DATA STRUCTURES & ALGORITHMS",
  "SOFTWARE ENGINEERING",
  "WEB TECHNOLOGIES",
  "DATABASE MANAGEMENT SYSTEMS",
  "ARTIFICIAL INTELLIGENCE",
  "DISTRIBUTED SYSTEMS",
  // ADD MORE COURSES AS NEEDED
]

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
            <div>
              <p className="text-base md:text-lg font-bold mb-4">
                Education
              </p>
              <div className="text-sm flex flex-col gap-4 border-2 border-gray-700 rounded-2xl p-4">
                <div className="flex items-center gap-2">
                <img src={ucfLogo} alt="ucf" className="size-12 object-cover rounded-full" />

                  <div className="flex flex-col justify-center">
                    <span className="font-bold">
                    M.S. in Computer Science - University of Central Florida
                  </span>
                  <span>
                    (August 2025 - May 2027)
                  </span>
                  </div>
                </div>
                <span className="italic font-medium">Related Course Work: </span>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {
                  mastersCourses.map((course, index) => (
                    <span className="px-4 py-2 rounded bg-stone-900 text-white text-xs font-bold" key={index}>{course}</span>
                  ))
               }
               </div>
              </div>
              <br />
              <div className="text-sm flex flex-col border-2 border-gray-700 rounded-2xl p-4 gap-4">
                <div className="flex items-center gap-2">
                  <img src={kitsLogo} alt="kits" className="size-12 object-cover rounded-full" />
                  <div className="flex flex-col justify-center">
                    <span className="font-bold">
                    B. Tech in Computer Science
                  - KKR & KSR INSTITUTE OF TECHNOLOGY AND SCIENCES 
                  </span>
                  <span>
                    (2020 - 2024)
                  </span>
                  </div>
                </div>
          
                  <span className="italic font-medium">Related Course Work:</span> 
                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
    {
                    bachelorsCourses.map((course, index) => (
                      <span className="px-4 py-2 rounded bg-stone-900 text-white text-xs font-bold" key={index}>{course}</span>
                    ))
                  }
                                 </div>
              
               
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-base md:text-lg font-bold">
                Experience
              </p>
            <div className="text-sm flex flex-col border-2 border-gray-700 rounded-2xl p-4 gap-4">
                <div className="flex items-center gap-2">
                <img src={ucfLogo} alt="ucf" className="size-12 object-cover rounded-full" />
                  <div className="flex flex-col justify-center">
                    <span className="font-bold">
                     Graduate Teaching Assistant - University of Central Florida
                  </span>
                  <span>
                    (Sep 2025 - Present)
                  </span>
                  </div>
                </div>
                  <span className="italic font-medium">Related Work:</span> 

                <ul className="list-disc ml-4 space-y-2">
                  <li>
                 Assisted in the Mobile Device Software Development course (CEN4360) by grading assignments and projects.
                </li>
                <li>
                  Supported faculty in evaluating Android/iOS development coursework and providing structured feedback to
students.
                </li>
                <li>
                  Reinforced understanding of mobile application frameworks and front-end concepts while guiding student
learning.
                </li>
                </ul>
              </div>
              <div className="text-sm flex flex-col border-2 border-gray-700 rounded-2xl p-4 gap-4">
                <div className="flex items-center gap-2">
                <img src={infosolLogo} alt="infosol" className="size-12 object-cover rounded-full" />
                  <div className="flex flex-col justify-center">
                    <span className="font-bold">
                     Full Stack Developer Intern - INFOSOL
                  </span>
                  <span>
                    (Oct 2024 - Mar 2025)
                  </span>
                  </div>
                </div>
                  <span className="italic font-medium">Related Work:</span> 

                <ul className="list-disc ml-4 space-y-2">
                  <li>
                  Developed Admin Dashboards and AI Integrated Chatbots for
                  businesses.
                </li>
                <li>
                  Gained expertise in building and scaling web applications.
                </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
