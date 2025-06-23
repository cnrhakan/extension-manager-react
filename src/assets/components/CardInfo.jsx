function CardInfo({ name, description }) {
  return (
    <div className="flex-1 flex-col">
      <h2 className="mt-0 mb-2 font-bold dark:text-neutral-50 text-neutral-900 text-xl">
        {name}
      </h2>
      <p className="text-neutral-700 dark:text-neutral-300 text-sm">
        {description}
      </p>
    </div>
  );
}

export default CardInfo;
