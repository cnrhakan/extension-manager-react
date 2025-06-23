function CardRemoveButton({ index, onRemove }) {
  return (
    <div
      className="bg-neutral-50 text-neutral-900 hover:bg-red-700 dark:hover:text-neutral-900 hover:text-red-50 hover:outline-0 duration-300 dark:bg-neutral-800 dark:text-neutral-50 px-4 py-1 border-1 border-neutral-500 dark:border-neutral-500 rounded-4xl cursor-pointer"
      onClick={() => onRemove(index)}
    >
      Remove
    </div>
  );
}

export default CardRemoveButton;
