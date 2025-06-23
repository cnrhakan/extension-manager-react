import { Switch } from "@headlessui/react";

function CardToggle({ isActive, onToggle }) {
  return (
    <Switch
      onChange={onToggle}
      checked={isActive}
      className={`group relative flex h-7 w-14 cursor-pointer rounded-full p-1 ease-in-out focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white ${
        isActive ? "bg-red-700" : "bg-neutral-300 dark:bg-neutral-500"
      }`}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out group-data-checked:translate-x-7"
      />
    </Switch>
  );
}
export default CardToggle;
