import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const GAS_URL = import.meta.env.VITE_GOOGLE_SHEET_URL;


  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await fetch(GAS_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error:", error);
      setError("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      className="h-screen flex flex-col justify-center items-center px-6 pt-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-white">Contact Me</h2>
      <p className="text-lg text-gray-400 mt-2">I'd love to hear from you!</p>

      {submitted ? (
        <p className="mt-4 text-green-400">Thank you! Your message has been sent.</p>
      ) : (
        <>
          {error && <p className="mt-4 text-red-500">{error}</p>}

          <div className="relative mt-6 w-full max-w-[550px]">
            {/* Background Blurs */}
            <div className="absolute w-[300px] h-[250px] bg-[#84098f] bottom-[-40px] left-[-60px] blur-[100px] opacity-50 -z-10"></div>
            <div className="absolute w-[250px] h-[220px] bg-[#ff7b00] top-[-30px] right-[30px] blur-[90px] opacity-40 -z-10"></div>
            <div className="absolute w-[200px] h-[180px] bg-[#007bff] top-[50%] left-[50px] blur-[80px] opacity-30 -z-10"></div>

            <motion.form
              onSubmit={handleSubmit}
              className="relative bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-lg w-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-4">
                <label className="block text-white mb-2">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-900 text-white"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-white mb-2">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-900 text-white"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-white mb-2">Message:</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-900 text-white"
                  rows="4"
                  required
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600 transition"
                disabled={loading}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {loading ? "Sending..." : "Send Message"}
              </motion.button>
            </motion.form>
          </div>
        </>
      )}
    </motion.section>
  );
};

export default Contact;
