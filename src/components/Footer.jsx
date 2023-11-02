import { BiLogoGithub, BiLogoLinkedinSquare } from "react-icons/bi";
import { MdEmail, MdPhone } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-slate-900 text-gray-300 flex flex-col md:flex-row gap-10 justify-between p-8 sm:p-10 md:px-16 md:py-10 rounded-sm shadow-lg">
      {/* Left Panel */}
      <div className="flex flex-col items-start gap-2">
        <p className="uppercase text-xl text-gray-400 font-bold mb-1">
          Important links
        </p>
        {/* LInks */}
        <button className="hover:underline hover:text-white">
          Project Description
        </button>
        <a
          href="https://github.com/mdsaifullah365/image-gallery.git"
          target="_blank"
          className="hover:underline hover:text-white"
          rel="noreferrer"
        >
          Source Code
        </a>
        <button className="hover:underline hover:text-white">
          Download Resume
        </button>
      </div>

      {/* Right Panel */}
      <div className="flex flex-col items-start md:items-end gap-3">
        <p className="uppercase text-xl text-gray-400 font-bold mb-1">Social</p>
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
        {/* <p>&copy; {new Date().getFullYear()}, Md Saif Ullah</p> */}
      </div>
    </div>
  );
};

export default Footer;
