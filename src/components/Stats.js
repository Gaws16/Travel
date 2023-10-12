export default function Stats({ items }) {
  const itemsCount = items.length;
  if (itemsCount === 0)
    return (
      <footer className="stats">
        <em>You have 0 items, start packing!</em>
      </footer>
    );

  const itemsPackedCount = items.filter((i) => i.packed).length;
  const percetage = Math.round((itemsPackedCount / itemsCount) * 100);
  return (
    <footer className="stats">
      <em>
        {percetage === 100
          ? "You packed everything, time to go!"
          : `You have ${itemsCount} items on the list, and you already packed ${itemsPackedCount} (${percetage}%)`}
      </em>
    </footer>
  );
}
