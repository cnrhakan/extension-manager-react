import ExtensionTitle from "./ExtensionTitle";
import ExtensionButtons from "./ExtensionButtons";

function ExtensionHeader({ activeBtn, setActiveBtn }) {
  return (
    <div className="flex items-center justify-between mb-8">
      <ExtensionTitle />
      <div className="flex gap-3">
        {["All", "Active", "Inactive"].map((btn) => (
          <ExtensionButtons
            key={btn}
            content={btn}
            isActive={activeBtn === btn}
            onClick={() => setActiveBtn(btn)}
          />
        ))}
      </div>
    </div>
  );
}

export default ExtensionHeader;
