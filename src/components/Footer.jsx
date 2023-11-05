import { useState } from "react";
import { BiLogoGithub, BiLogoLinkedinSquare } from "react-icons/bi";
import { MdEmail, MdPhone } from "react-icons/md";
import CaseStudyModal from "./modals/CaseStudyModal";

const Footer = () => {
  const [isCaseStudyModalOpen, setIsCaseStudyModalOpen] = useState(false);

  return (
    <>
      <div className="bg-slate-900 text-gray-300 flex gap-10 flex-col md:flex-row justify-between md:items-center p-8 sm:p-10 md:px-16 md:py-10 rounded-sm shadow">
        {/* Left Panel */}
        <div className="flex flex-col items-start gap-2 order-2 md:order-1">
          <p className="uppercase text-xl text-gray-400 font-bold mb-1">
            Important links
          </p>
          {/* LInks */}
          <button
            onClick={() => setIsCaseStudyModalOpen(true)}
            className="hover:underline hover:text-white"
          >
            Case Study
          </button>
          <a
            href="https://github.com/mdsaifullah365/image-gallery.git"
            target="_blank"
            className="hover:underline hover:text-white"
            rel="noreferrer"
          >
            Source Code
          </a>
          <a
            href="https://drive.google.com/file/d/1qKCQbRDGX3EokK0nQKf02ivksedcEFRv/view?usp=sharing"
            target="_blank"
            className="hover:underline hover:text-white"
            rel="noreferrer"
          >
            My Resume
          </a>
        </div>

        {/* Middle Panel */}
        <p className="text-4xl order-1 md:order-2 hidden md:block">
          Thank you!
        </p>

        {/* Right Panel */}
        <div className="flex flex-col items-start md:items-end gap-3 order-3">
          <p className="uppercase text-xl text-gray-400 font-bold mb-1">
            Social
          </p>
          {/* Links */}
          <div className="flex justify-center gap-5 text-2xl">
            <a href="tel:+8801766637772">
              <MdPhone />
            </a>
            <a href="mailto:mdsaifullah1302@gmail.com">
              <MdEmail />
            </a>
            <a
              href="https://www.linkedin.com/in/mdsaifullah365/"
              target="_blank"
              rel="noreferrer"
            >
              <BiLogoLinkedinSquare />
            </a>
            <a
              href="https://www.github.com/mdsaifullah365/"
              target="_blank"
              rel="noreferrer"
            >
              <BiLogoGithub />
            </a>
          </div>
          <p>&copy; {new Date().getFullYear()}, Md Saif Ullah</p>
        </div>
      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        isCaseStudyModalOpen={isCaseStudyModalOpen}
        handleClose={() => setIsCaseStudyModalOpen(false)}
      />
    </>
  );
};

export default Footer;
