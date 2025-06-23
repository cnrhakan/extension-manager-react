function ExtensionButtons({ content, isActive, onClick }) {
  return (
    <button
      className={`py-2 px-4 cursor-pointer rounded-full ${
        isActive
          ? "bg-red-700 text-neutral-50 dark:text-neutral-900"
          : "bg-neutral-50 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
      }`}
      onClick={onClick}
    >
      {content}
    </button>
  );
}

export default ExtensionButtons;
