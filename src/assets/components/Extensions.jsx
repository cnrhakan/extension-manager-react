import { useState } from "react";
import { data } from "../data";
import CardLogo from "./CardLogo";
import CardInfo from "./CardInfo";
import CardRemoveButton from "./CardRemoveButton";
import CardToggle from "./CardToggle";

function Extensions({ filter }) {
  const [extensions, setExtensions] = useState(data);

  function handleRemove(index) {
    setExtensions((prev) => prev.filter((_, i) => i !== index));
  }

  function handleToggle(index) {
    setExtensions((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, isActive: !item.isActive } : item
      )
    );
  }

  const filteredExtensions = extensions.filter((item) => {
    if (filter === "All") return true;
    if (filter === "Active") return item.isActive;
    if (filter === "Inactive") return !item.isActive;
    return true;
  });

  return (
    <div className="grid grid-cols-3 gap-3 max-md:grid-cols-1">
      {filteredExtensions.map((item, filteredIndex) => {
        const originalIndex = extensions.findIndex(
          (ext) => ext.name === item.name
        );
        return (
          <div
            key={item.name}
            className="h-[200px] shadow p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-800 flex flex-col gap-12"
          >
            <div className="flex gap-5 items-start">
              <CardLogo logo={item.logo} />
              <CardInfo name={item.name} description={item.description} />
            </div>
            <div className="flex justify-between items-center">
              <CardRemoveButton index={originalIndex} onRemove={handleRemove} />
              <CardToggle
                isActive={item.isActive}
                onToggle={() => handleToggle(originalIndex)}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Extensions;
