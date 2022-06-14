import { useState } from "react";
import FontPage from "../sous-components/font-end";
import BackPage from "../sous-components/back-end";
const Skills = () => {
  const [ShowFront, NotShowFront] = useState(false);
  const [ShowBack, NotShowBack] = useState(false);
  return (
    <>
      <div className="skill-front" onClick={() => NotShowFront(!ShowFront)}>
        <h2>Front-End</h2>
        {ShowFront ? <FontPage /> : null}
      </div>
      <div className="skill-back" onClick={() => NotShowBack(!ShowBack)}>
        <h2>Back-End</h2>
        {ShowBack && <BackPage />}
      </div>
    </>
  );
};
export default Skills;
