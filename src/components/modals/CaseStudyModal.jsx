import Modal from "../../layouts/Modal";
import H1 from "../headings/H1";
import H2 from "../headings/H2";
import H3 from "../headings/H3";

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
            {/* Objective */}
            <H2>Objective</H2>
            <p className="mb-2">
              The objective of this project was to create a responsive image
              gallery using React JS with the following features: reordering,
              deleting multiple images, and setting a feature image. The goal
              was to provide users with a visually appealing and seamless user
              experience.
            </p>

            {/* Project Overview */}
            <H2>Project Overview</H2>
            <p className="mb-2">
              The project involved creating a dynamic image gallery that allows
              users to view, reorder, delete multiple images, and set a featured
              image. The key features of the project were:
            </p>
            <ul className="list-disc pl-6">
              <li>
                Gallery Layout: Implemented a grid layout for the image gallery
                with one feature image larger than the others.
              </li>
              <li>
                Sorting: Enabled reordering functionality, allowing users to
                rearrange the order of images in the gallery. Implemented
                drag-and-drop functionality for an intuitive user experience
              </li>
              <li>
                Deleting Multiple Images: Allowed users to select multiple
                images and delete them. Provided a clear visual indication of
                selected images.
              </li>
              <li>
                Setting Feature Image: Allowed users to set a feature image
                through sorting, with the first image (from the left to right
                direction) considered as the featured image. The feature image
                was visually distinct from the other images.
              </li>
              <li>
                User Experience: Ensured a smooth and responsive user
                experience, with transitions and animations to enhance the look
                and feel of the gallery.
              </li>
              <li>
                Live Demo: Hosted the React JS image gallery on a chosen
                platform and shared the live URL for assessment.
              </li>
            </ul>

            {/* Project Development */}
            <H2>Project Development</H2>
            <H3>Technology Stack</H3>
            <ul className="list-disc pl-6">
              <li>Frontend Framework: React JS</li>
              <li>
                Additional Libraries: React DnD (for drag-and-drop
                functionality), React Transition Group (for animations)
              </li>
            </ul>
            <H3>Implementation</H3>
            <ul className="list-disc pl-6">
              <li>
                Gallery Layout: The gallery layout was implemented using CSS
                Grid. Each image in the gallery was rendered as a grid item. The
                feature image was styled to be larger and more prominent than
                the other images.
              </li>
              <li>
                Sorting: React DnD was used to implement drag-and-drop
                functionality for reordering images. Users could simply drag and
                drop images to change their order.
              </li>
              <li>
                Deleting Multiple Images: Users could select multiple images by
                clicking on them, with a visual indication (e.g., border or
                checkmark) to show which images were selected. A delete button
                allowed users to remove the selected images.
              </li>
              <li>
                Setting Feature Image: The first image in the gallery (from left
                to right) was considered the feature image by default. Users
                could reorder the images to change the featured image, and it
                was visually distinct to highlight its status.
              </li>
              <li>
                User Experience: To enhance the user experience, smooth
                transitions and animations were applied when reordering images
                or deleting them. These animations provided a polished and
                engaging feel to the gallery.
              </li>
              <li>
                Live Demo: The React image gallery was hosted on a platform for
                easy access and assessment. The live URL was shared with the
                project stakeholders.
              </li>
            </ul>

            {/* Challenges */}
            <H2>Challenges</H2>
            <p className="mb-2">
              The project presented some challenges, including:
            </p>
            <ul className="list-disc pl-6">
              <li>
                Implementing smooth drag-and-drop functionality for reordering
                images using React DnD.
              </li>
              <li>
                Ensuring a consistent and visually appealing layout across
                different screen sizes.
              </li>
              <li>
                Handling the complexity of tracking selected images for deletion
                and updating the UI accordingly.
              </li>
            </ul>

            {/* Results */}
            <H2>Results</H2>
            <p className="mb-2">
              The project resulted in a responsive and visually appealing image
              gallery with the desired features. Users could easily reorder
              images, delete multiple images, and set a featured image. The
              transitions and animations added a polished look and feel to the
              gallery.
            </p>
            <p className="mb-2">
              The live demo was hosted successfully, and the URL was shared for
              assessment. The project met the objectives and requirements
              outlined in the task instructions.
            </p>

            {/* Key Takeaways */}
            <H2>Key Takeaways</H2>
            <ul className="list-disc pl-6">
              <li>
                React JS, along with libraries like React DnD and React
                Transition Group, proved to be powerful tools for creating
                dynamic and interactive user interfaces.
              </li>
              <li>
                Implementing drag-and-drop functionality required careful
                planning and coding.
              </li>
              <li>
                User experience is enhanced by smooth transitions and
                animations.
              </li>
              <li>
                Responsive design is crucial to ensure the gallery looks and
                functions well on various screen sizes.
              </li>
            </ul>

            {/* Conclusion */}
            <H2>Conclusion</H2>
            <p className="mb-2">
              The development of the responsive image gallery using React JS was
              a successful project that met the objectives and requirements
              outlined in the task instructions. It provided users with an
              engaging and interactive experience, allowing them to manage and
              view images with ease. The project demonstrated the power of React
              and additional libraries in creating dynamic web applications.
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CaseStudyModal;
