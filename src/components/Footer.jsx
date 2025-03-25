import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative mt-20 bg-white/10 backdrop-blur-md border-t border-white/20 p-6 text-center rounded-t-lg">
      {/* Social Media Icons */}
      <div className="flex justify-center space-x-6 mb-4">
        {[
          { icon: <FaGithub size={28} />, link: "https://github.com/anjaliptl27", label: "GitHub" },
          { icon: <FaLinkedin size={28} />, link: "https://linkedin.com/in/anjali-arethiya", label: "LinkedIn" },
          { icon: <FaEnvelope size={28} />, link: "mailto:anjaliarethiya490@gmail.com", label: "Email" }
        ].map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 border border-white/20 text-white transition-all 
                      duration-300 hover:bg-purple-500 hover:scale-110"
          >
            {item.icon}
          </a>
        ))}
      </div>

      {/* Footer Text */}
      <p className="text-gray-400 text-sm">
        Made by @Anjali Arethiya
      </p>
    </footer>
  );
};

export default Footer;


