import H2 from "../../components/headings/H2";
import H3 from "../../components/headings/H3";

const ProjectDevelopment = () => {
  return (
    <>
      <H2>Project Development</H2>
      <H3>Technology Stack</H3>
      <ul className="list-disc pl-6">
        <li>
          <span className="font-semibold">Frontend Framework:</span> React JS
        </li>
        <li>
          <span className="font-semibold">Additional Libraries:</span>{" "}
          TailwindCSS
        </li>
      </ul>
      <H3>Implementation</H3>
      <ul className="list-disc pl-6">
        <li>
          <span className="font-semibold">Gallery Layout:</span> The gallery
          layout was implemented using CSS Grid. Each image in the gallery was
          rendered as a grid item.
        </li>
        <li>
          <span className="font-semibold">Sorting:</span> HTML5 Drag and Drop
          API is used to implement drag-and-drop functionality for reordering
          images. Users could simply drag and drop images to change their order.
        </li>
        <li>
          <span className="font-semibold">Deleting Multiple Images:</span> Users
          could select multiple images by clicking on the checkbox. Visual
          indication was provided by changing border and opacity to show which
          images were selected. A delete button allowed users to remove the
          selected images. A confirmation dialogue box is implemented to confirm
          the deletion.
        </li>
        <li>
          <span className="font-semibold">Setting Feature Image:</span> The
          first image in the gallery (from left to right) was considered the
          feature image by default. Users could reorder the images to change the
          featured image, and it was visually distinct to highlight its status.
          It was styled to be larger and more prominent than the other images.
        </li>
        <li>
          <span className="font-semibold">Responsiveness:</span> The gallery
          layout and other components have been designed to be both responsive
          and visually attractive on all devices.
        </li>
      </ul>
    </>
  );
};

export { ProjectDevelopment };
