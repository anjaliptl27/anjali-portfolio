import { motion } from "framer-motion";
import amazonImg from "../assets/amazon.png";
import asb from "../assets/asb.png";

const projects = [
  {
    name: "Amazon Static Web Clone",
    description: "An Amazon static web clone built using HTML, CSS, and JS.",
    image: amazonImg,
    link: "https://github.com/anjaliptl27/Amazon-Clone",
  },
  {
    name: "Supermarket Frontend Website",
    description: "An e-commerce platform built using HTML, CSS, and JavaScript.",
    image: asb,
    link: "https://github.com/anjaliptl27/supermarket-frontend-website",
  },
];

const Projects = () => {
  return (
    <motion.section
      className="mt-20 px-6 md:px-20 pt-25"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-center text-white">Projects</h2>
      <div className="mt-8 grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative p-6 rounded-2xl shadow-lg bg-white/10 backdrop-blur-lg transition-transform transform hover:scale-105 overflow-hidden"
            whileHover={{ scale: 1.05 }}
          >
            {/* Background Blur Effect */}
            <div className="absolute w-[250px] h-[200px] bg-[#84098f] bottom-[-50px] left-[-50px] blur-[100px] opacity-40 -z-10" />
            <div className="absolute w-[200px] h-[150px] bg-[#ff7b00] top-[-50px] right-[-30px] blur-[90px] opacity-35 -z-10" />

            {/* Project Content */}
            <img
              src={project.image}
              alt={project.name}
              className="rounded-md w-full"
            />
            <h3 className="text-xl font-semibold mt-3 text-white">
              {project.name}
            </h3>
            <p className="text-gray-300 mt-2">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-purple-400 hover:text-purple-300"
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;

