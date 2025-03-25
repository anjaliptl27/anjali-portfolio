import { useState, useRef, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import TechStack from "./TechStack";
import Projects from "./Projects";
import Contact from "./Contact";
import About from "./About"; 
import profileImage from "../assets/anjali.jpg";

const Home = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const introRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const techStackRef = useRef(null);
  const contactRef = useRef(null);

  const isIntroInView = useInView(introRef, { once: true });
  const isAboutInView = useInView(aboutRef, { once: true });
  const isProjectsInView = useInView(projectsRef, { once: true });
  const isTechStackInView = useInView(techStackRef, { once: true });
  const isContactInView = useInView(contactRef, { once: true });

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  // Smooth scroll with offset
  const scrollToSection = (ref) => {
    const yOffset = -NAVBAR_HEIGHT;
    const y = ref.current.getBoundingClientRect().top + window.scrollY + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <div className="text-white px-6 2xl:px-20"
    >


      {/* 🔥 Introduction Section */}
      <motion.section
       
        ref={introRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isIntroInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="relative flex flex-col md:flex-row items-center justify-between mt-24 md:mt-36 pt-10 pb-10 rounded-2xl overflow-hidden"
      >
        <div className="absolute w-[300px] h-[250px] bg-[#84098f] bottom-[-80px] left-[-60px] blur-[90px] opacity-50 -z-10" />
        <div className="absolute w-[250px] h-[200px] bg-[#ff7b00] top-[-50px] right-[50px] blur-[100px] opacity-40 -z-10" />
        <div className="absolute w-[200px] h-[180px] bg-[#007bff] top-[50%] right-[-60px] blur-[80px] opacity-30 -z-10" />

        {/* Left Side - Text Content */}
        <div className="md:w-1/2 text-center md:text-left pl-5">
          <motion.h1 className="text-4xl md:text-6xl font-bold">
            Hi there! I'm{" "}
            <span className="text-purple-400">Anjali Arethiya</span>
          </motion.h1>
          <p className="mt-4 text-lg md:text-xl max-w-lg">
            <Typewriter
              words={[
                "A passionate web developer building interactive applications.",
                "A creative coder exploring new technologies.",
                "A problem solver who loves challenges.",
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={2000}
            />
          </p>

          {/* Social Links */}
          <div className="mt-6 flex justify-center md:justify-start space-x-6 relative">
            {[
              { icon: <FaGithub size={28} />, link: "https://github.com/anjaliptl27", label: "GitHub" },
              { icon: <FaLinkedin size={28} />, link: "https://linkedin.com/in/anjali-arethiya", label: "LinkedIn" },
              { icon: <FaEnvelope size={28} />, link: "mailto:anjaliarethiya490@gmail.com", label: "Email" },
              { icon: <FaDownload size={28} />, link: "https://docs.google.com/document/d/13SFjGBXSGrliVvM7pAEo9RO5rOo8hvj-HZ7XeC19FR4/edit?usp=drive_link", label: "Resume" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center relative"
                onMouseEnter={() => setHoveredIcon(index)}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400 transition-transform hover:scale-110"
                >
                  {item.icon}
                </a>
                {hoveredIcon === index && (
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-12 bg-gray-800 text-white text-sm px-2 py-1 rounded-md shadow-lg"
                  >
                    {item.label}
                  </motion.span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Profile Image */}
        <motion.div className="md:w-1/2 flex justify-center mt-10 md:mt-0 relative">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-1 bg-gradient-to-br from-purple-600/50 via-orange-600/50 to-blue-700/50">
            <img
              src={profileImage}
              alt="Profile"
              className="w-full h-full rounded-full object-cover shadow-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
        </motion.div>
      </motion.section>

      {/*  About Me Section */}
      <motion.section
        id="about"
        ref={aboutRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isAboutInView ? { opacity: 1, y: 50 } : {}}
        transition={{ duration: 1 }}
        className="mt-12"
      >
        <About />
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        ref={projectsRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isProjectsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="mt-12"
      >
        <Projects />
      </motion.section>

      {/* Tech Stack Section */}
      <motion.section
        id="techstack"
        ref={techStackRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isTechStackInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="mt-12"
      >
        <TechStack />
      </motion.section>

      {/*Contact Section */}
      <motion.section
        id="contact"
        ref={contactRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isContactInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="mt-20 mb-10"
      >
        <Contact />
      </motion.section>
     

    </div>
  );
};

export default Home;

