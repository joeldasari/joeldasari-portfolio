import ucfLogo from "../assets/images/ucf-logo.png";
import kitsLogo from "../assets/images/kits-logo.jpg";

const educationData = [
  {
    degree: "Master of Science in Computer Science",
    institution: "University of Central Florida",
    duration: "(Fall 2025 - Spring 2027)",
    gpa: "3.6/4.0",
    courses: [
      "CDA 5106 - ADV COMPUTER ARCHITECTURE",
      "CIS 6395 - INCIDENT RESPONSE TECHNOLOGIES",
      "COT 5405 - DESIGN & ANALYSIS ALGORITHMS",
      "CEN4360 - MOBILE DEVICE SOFTWARE DEVELOPMENT",
      "CAP5151 - IoT Security and Privacy",
      "COP3223C - INTRO TO PROGRAMMING WITH C",
      "CAP 6614 - Current Topics in Machine Learning",
      "CNT 6418 - Computer Forensics II",
    ],
    imageURL: ucfLogo,
  },
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "KKR & KSR Institute of Technology and Sciences",
    duration: "(2020 - 2024)",
    gpa: "3.4/4.0",
    courses: [
      "DATA STRUCTURES & ALGORITHMS",
      "SOFTWARE ENGINEERING",
      "WEB TECHNOLOGIES",
      "DATABASE MANAGEMENT SYSTEMS",
      "ARTIFICIAL INTELLIGENCE",
      "DISTRIBUTED SYSTEMS",
    ],
    imageURL: kitsLogo,
  },
];

export default educationData;
