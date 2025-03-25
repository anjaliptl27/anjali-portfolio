import { 
  FaReact, FaHtml5, FaCss3Alt, FaNodeJs, 
  FaDatabase, FaFigma, FaGithub, FaLeaf, 
  FaJava, FaPython 
} from "react-icons/fa";

const TechStack = () => {
  return (
    <section id="techstack" className="mt-20 text-center">
      <h2 className="text-3xl font-bold text-white">Tech Stack</h2>
      
      {/* Tech Icons Container */}
      <div className="mt-8 flex flex-wrap justify-center gap-6">
        {[
          { Icon: FaReact, label: "React", color: "#61DBFB" },       
          { Icon: FaHtml5, label: "HTML5", color: "#E34F26" },       
          { Icon: FaCss3Alt, label: "CSS3", color: "#264DE4" },     
          { Icon: FaNodeJs, label: "Node.js", color: "#68A063" },   
          { Icon: FaDatabase, label: "MySQL", color: "#F29111" },    
          { Icon: FaLeaf, label: "MongoDB", color: "#4DB33D" },      
          { Icon: FaJava, label: "Java", color: "#ED8B00" },         
          { Icon: FaPython, label: "Python", color: "#3776AB" },
          { Icon: FaGithub, label: "Github", color: "#3776AB" }

        ].map(({ Icon, label, color }, index) => (
          <div
            key={index}
            className="w-36 h-24 flex flex-col justify-center items-center 
                      bg-white/10 backdrop-blur-md border border-white/20 rounded-lg 
                      shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <Icon size={50} style={{ color }} /> 
            <span className="mt-2 text-sm text-white">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
