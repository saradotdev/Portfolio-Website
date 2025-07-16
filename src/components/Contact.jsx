import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { footerLinks } from "../constants";

// EmailJS configuration
// Service ID: service_txccwd8
// Template ID: template_5gniyde
// Public Key: yu0zzbUjf3IpMAy-P

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_txccwd8",
        "template_5gniyde",
        {
          from_name: form.name,
          to_name: "Sara Aziz",
          from_email: form.email,
          to_email: "saraaziz180903@gmail.com",
          message: form.message,
        },
        "yu0zzbUjf3IpMAy-P"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <>
      <div
        className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
        style={{ marginTop: window.innerWidth >= 1280 ? "48px" : "0px" }}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
          style={{ padding: "32px" }}
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
            style={{ marginTop: "48px" }}
          >
            <label className="flex flex-col">
              <span
                className="text-white font-medium mb-4"
                style={{ marginBottom: "16px" }}
              >
                Your Name
              </span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                style={{ padding: "16px 24px" }}
              />
            </label>
            <label className="flex flex-col">
              <span
                className="text-white font-medium mb-4"
                style={{ marginBottom: "16px" }}
              >
                Your email
              </span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                style={{ padding: "16px 24px" }}
              />
            </label>
            <label className="flex flex-col">
              <span
                className="text-white font-medium mb-4"
                style={{ marginBottom: "16px" }}
              >
                Your Message
              </span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                style={{ padding: "16px 24px" }}
              />
            </label>

            <button
              type="submit"
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
              style={{ padding: "12px 32px" }}
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>

      <footer style={{ paddingTop: "96px" }}>
        <hr
          className="h-1 opacity-10 dark:bg-white"
          style={{ marginBottom: "64px" }}
        />

        <div className="flex items-center justify-between">
          <div className="flex gap-4">
            {footerLinks.map((item) => (
              <a
                key={item.name}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="w-8 h-8" src={item.image} alt={item.name} />
              </a>
            ))}
          </div>

          <div>© 2025 - Sara Aziz</div>
        </div>
      </footer>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
