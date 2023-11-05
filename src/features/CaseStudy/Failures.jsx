import H2 from "../../components/headings/H2";
import H3 from "../../components/headings/H3";

const Failures = () => {
  return (
    <>
      <H2>Failures!</H2>

      <ul className="list-disc pl-6">
        <li>
          <H3>Failure 1: Smooth Transition and Animation When Reordering</H3>

          <p>
            <span className="font-semibold">Issue:</span> Smooth transitions and
            animations were challenging due to state changes at the time of
            reordering.
          </p>

          <p>
            <span className="font-semibold">Lesson:</span> Gained awareness of
            the need for advanced animation techniques in React. Will focus on
            mastering this skill in future projects.
          </p>
        </li>

        <li>
          <H3>Failure 2: Lack of Touch Device Support</H3>

          <p>
            <span className="font-semibold">Issue:</span> Drag and drop
            functionality was not compatible with touch devices.
          </p>

          <p>
            <span className="font-semibold">Lesson:</span> Highlighted the
            importance of considering cross-device compatibility from the
            project&apos;s outset. Will explore separate touch event handling in
            future to ensure inclusivity.
          </p>
        </li>
      </ul>
    </>
  );
};

export { Failures };
