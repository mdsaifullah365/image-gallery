import gitmind from "../../assets/images/gitmind.png";
import H2 from "../../components/headings/H2";

const ProjectPlanning = () => {
  return (
    <>
      <H2>Project Planning and Workflow Visualization</H2>
      <p>
        For effective project planning and organization, I utilized GitMind.
        GitMind allowed me to structure ideas, break down tasks, and create a
        visual workflow.
      </p>
      <img src={gitmind} alt="Project Planning" className="w-full" />
    </>
  );
};

export { ProjectPlanning };
