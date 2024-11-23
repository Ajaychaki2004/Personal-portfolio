import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate and dedicated student with a strong foundation in Backend development, GenAI technologies. 
With hands-on experience in building intelligent systems, I have developed projects ranging from technical interview training bots to next-gen employment platforms. 
My expertise spans diverse areas like Python, Django, Node.js, MongoDB, honed through real-world challenges such as encryption algorithm identification.
Currently interning at SNS InnovationHub as Junior software intern.`;

export const ABOUT_TEXT = `Hi, I'm Ajay Chakravarthi, an aspiring software engineer with a passion for leveraging technology to solve complex problems and drive innovation. 
As a student and a budding professional, I thrive on exploring diverse fields like AI/ML, IoT, automation, and full-stack development to create meaningful solutions that make an impact.
My journey in tech has been hands-on and versatile. I've worked on projects such as building AI-driven training tools, and developing ATS platforms powered by smart recommendations and skill-gap analysis. 
I also enjoy tackling challenging domains like encryption algorithm identification and automating processes through data engineering.
Developing intelligent systems using Python, Django, Node.js, and Express.js.I've been exploring innovative projects like InterviewIQ AI and an AI-powered ATS system.`

export const EXPERIENCES = [
  {
    year: " Oct 2024 - Present",
    role: "Junior Software Intern",
    company: "SNS InnovationHub",
    description: `Worked in team for   developing and maintaining web applications using React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Django", "React.js", "mongoDB"],
  },
  {
    year: "May 2024 - Jun 2024",
    role: "GenAi Developer Intern",
    company: "CoralFlow",
    description: `Developed an AI-powered technical interview training bot using the Gemini model to explain concepts, process documents, and simulate interview scenarios for effective preparation.`,
    technologies: ["Python", "Streamlit", "Groq", "LLM", "Gemini", "OpenAI",],
  },
];

export const PROJECTS = [
  {
    title: "InterviewIQ AI",
    image: project1,
    description:
      "An AI-powered technical interview training tool that simulates real-world interview scenarios and provides feedback on performance.",
    technologies: ["Streamlit", "Gemini", "LLM", "Crew AI", "Agents"],
  },
  {
    title: "NVIDIA RAG chatbot",
    image: project2,
    description:
      "A RAG(Retrieval Augmented Generation) based LLM for the NVIDIA which gives the specific information about the Query",
    technologies: ["Python", "Streamlit", "Colab", "Gemini", "LLM"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Tailwind CSS"],
  },
];

export const CONTACT = {
  address: "Coimbatore, Tamil Nadu, India",
  phoneNo: "+91 9486682348",
  email: "sajaychakravarthi2004.com",
};
