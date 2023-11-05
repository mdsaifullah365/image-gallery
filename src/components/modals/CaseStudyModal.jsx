import {
  Challenges,
  Conclusion,
  Failures,
  KeyTakeaways,
  Objective,
  ProjectDevelopment,
  ProjectOverview,
  ProjectPlanning,
  Results,
} from "../../features/CaseStudy";
import Modal from "../../layouts/Modal";
import H1 from "../headings/H1";

const CaseStudyModal = ({ isCaseStudyModalOpen, handleClose }) => {
  return (
    <Modal isOpen={isCaseStudyModalOpen} handleClose={handleClose}>
      <div className="bg-white rounded-lg shadow-lg max-w-4xl mx-5 h-[95vh] overflow-hidden pb-8">
        <div className="h-full overflow-y-scroll">
          {/* Header */}
          <div className="flex justify-between items-center gap-3 px-8 py-4 mb-4 sticky top-0 bg-white border-b border-gray-100">
            <H1>Case Study: Responsive Image Gallery using React JS</H1>
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="text-gray-500 hover:text-gray-700"
            >
              Close
            </button>
          </div>

          {/* Body */}
          <div className="px-8">
            <Objective />
            <ProjectOverview />
            <ProjectPlanning />
            <ProjectDevelopment />
            <Challenges />
            <Results />
            <Failures />
            <KeyTakeaways />
            <Conclusion />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CaseStudyModal;
