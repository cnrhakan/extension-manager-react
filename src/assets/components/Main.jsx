import { useState } from "react";
import ExtensionHeader from "./ExtensionHeader";
import Extensions from "./Extensions";

function Main() {
  const [activeBtn, setActiveBtn] = useState("All");
  return (
    <>
      <ExtensionHeader activeBtn={activeBtn} setActiveBtn={setActiveBtn} />
      <Extensions filter={activeBtn} />
    </>
  );
}

export default Main;
