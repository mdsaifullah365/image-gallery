import { useState } from "react";
import CaseStudyModal from "./modals/CaseStudyModal";

const Header = () => {
  const [isCaseStudyModalOpen, setIsCaseStudyModalOpen] = useState(false);

  return (
    <>
      <div className="bg-white flex justify-between items-center px-5 rounded-sm shadow h-12 md:h-16">
        {/* Logo */}
        <h1 className="font-bold text-lg md:text-2xl lg:text-3xl">
          Image Gallery
        </h1>

        {/* CTA Buttons*/}
        <button
          onClick={() => setIsCaseStudyModalOpen(true)}
          className="bg-[#f67d28] text-white text-xs sm:text-base sm:font-semibold px-3 sm:px-6 py-2 sm:py-2 rounded-md cursor-pointer shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-100 ease-in"
        >
          Case Study
        </button>
      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        isCaseStudyModalOpen={isCaseStudyModalOpen}
        handleClose={() => setIsCaseStudyModalOpen(false)}
      />
    </>
  );
};

export default Header;
