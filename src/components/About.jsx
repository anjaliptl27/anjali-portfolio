import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const handleScrollToTechStack = () => {
    navigate("/", { replace: false });
    setTimeout(() => {
      const techStackSection = document.getElementById("techstack");
      if (techStackSection) {
        techStackSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative flex flex-col md:flex-row items-center justify-between mt-24 md:mt-36 p-10 rounded-2xl pt-20 overflow-hidden"
    >

      <div className="absolute w-[300px] h-[250px] bg-[#84098f] bottom-[-80px] left-[-60px] blur-[90px] opacity-50 -z-10" />
      <div className="absolute w-[250px] h-[200px] bg-[#ff7b00] top-[-50px] right-[50px] blur-[100px] opacity-40 -z-10" />
      <div className="absolute w-[200px] h-[180px] bg-[#007bff] top-[50%] right-[-60px] blur-[80px] opacity-30 -z-10" />

      {/* Left Side - About Content */}
      <motion.div
        className="md:w-full text-center md:text-left"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-5xl font-bold"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <p className="mt-6 text-lg text-gray-300 leading-relaxed">
          Hi, I'm{" "}
          <span className="text-purple-400 font-semibold">Anjali Arethiya</span>,
          a passionate web developer with a love for exploring new technologies
          and bringing creative ideas to life. Currently pursuing my second year
          in Computer Applications, I enjoy building intuitive and efficient
          digital experiences.
          <br />
          My journey in development has led me to work on various projects, from
          dynamic web applications to innovative marketplaces like{" "}
          <span className="text-fuchsia-700 font-bold text-lg">StarryArts</span>,
          where I combine technology with artistic creativity.
          <br />
          Beyond coding, I engage in painting, sketching, and DIY projects. I
          also love traveling, as it inspires me with new perspectives and
          cultures.
        </p>

        <motion.div
          className="pt-10 flex justify-center md:justify-start gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <button
            onClick={handleScrollToTechStack}
            className="bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600 transition"
          >
            My Tech Stack
          </button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default About;
