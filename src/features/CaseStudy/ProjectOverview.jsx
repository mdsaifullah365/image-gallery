import H2 from "../../components/headings/H2";

const ProjectOverview = () => {
  return (
    <>
      <H2>Project Overview</H2>
      <p className="mb-2">
        The project involved creating a dynamic image gallery that allows users
        to view, reorder, delete multiple images, and set a featured image. The
        key features of the project were:
      </p>
      <ul className="list-disc pl-6">
        <li>
          <span className="font-semibold">Gallery Layout:</span> Implemented a
          grid layout for the image gallery with one feature image larger than
          the others.
        </li>
        <li>
          <span className="font-semibold">Sorting:</span> Enabled reordering
          functionality, allowing users to rearrange the order of images in the
          gallery. Implemented drag-and-drop functionality for an intuitive user
          experience
        </li>
        <li>
          <span className="font-semibold">Deleting Multiple Images:</span>{" "}
          Allowed users to select multiple images and delete them. Provided a
          clear visual indication of selected images.
        </li>
        <li>
          <span className="font-semibold">Setting Feature Image:</span> Allowed
          users to set a feature image through sorting, with the first image
          (from the left to right direction) considered as the featured image.
          The feature image was visually distinct from the other images.
        </li>
        <li>
          <span className="font-semibold">User Experience:</span> Ensured a
          smooth and responsive user experience, with transitions and animations
          to enhance the look and feel of the gallery.
        </li>
      </ul>
    </>
  );
};

export { ProjectOverview };
