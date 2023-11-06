import H2 from "../../components/headings/H2";
import H3 from "../../components/headings/H3";

const Challenges = () => {
  return (
    <>
      <H2>Challenges and Solutions</H2>

      <p className="mb-2">The project presented some challenges, including:</p>

      <ul className="list-disc pl-6">
        <li>
          <H3>
            Challenge 1: Implementing drag-and-drop functionality for reordering
            images using native HTML drag events.
          </H3>

          <p>
            <span className="font-semibold">Solution:</span> Overcoming this
            challenge without relying on a specialized library like React DnD
            required a deep dive into native HTML drag-and-drop events. I
            extensively studied the HTML5 Drag and Drop API to understand its
            capabilities and limitations. I implemented a custom drag-and-drop
            solution that allowed users to reorder images seamlessly using the
            native events. This solution involved setting up event listeners for
            drag start and drag over events. By carefully managing the
            image&apos;s state, I ensured that images could be reordered
            smoothly without the need for a third-party library.
          </p>
        </li>

        <li>
          <H3>
            Challenge 2: Ensuring a consistent and visually appealing layout
            across different screen sizes.
          </H3>

          <p>
            <span className="font-semibold">Solution:</span> To address the
            challenge of maintaining a visually appealing and responsive layout,
            I adopted a mobile-first design strategy. Leveraging CSS Grid for
            the gallery layout and Tailwind CSS for styling, I created a
            flexible and responsive design that adapted seamlessly to different
            screen sizes. Extensive testing was conducted on various devices and
            browsers to validate the responsiveness of the gallery. I fine-tuned
            the design and styles, ensuring that the layout remained consistent
            and visually appealing across a wide range of screen sizes.
          </p>
        </li>

        <li>
          <H3>
            Challenge 3: Handling the complexity of tracking selected images for
            deletion and updating the UI accordingly.
          </H3>

          <p>
            <span className="font-semibold">Solution:</span> The challenge of
            managing the selection of multiple images for deletion was resolved
            through effective state management and UI updates. A custom
            selection mechanism was implemented to track user-selected images
            and visually indicate their selection. React&apos;s state management
            capabilities were utilized to ensure a responsive and performant UI.
            This allowed users to interact with the gallery seamlessly,
            selecting and deleting images with ease while maintaining a smooth
            and intuitive user experience.
          </p>
        </li>
      </ul>

      <br />

      <p>
        By addressing these challenges with a focus on native HTML drag events,
        I was able to create a responsive image gallery that met the
        project&apos;s objectives and provided a seamless user experience. These
        challenges highlighted my ability to work with core web technologies and
        reinforced my problem-solving skills in web development.
      </p>
    </>
  );
};

export { Challenges };
