export function Stats({ items }) {
  const numOfItems = items.length;
  const itemPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((itemPacked / numOfItems) * 100);
  if (!items.length)
    return (
      <p className="stats">
        <em>Start Adding some items</em>
      </p>
    );
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "you have packed all items"
          : `you have ${numOfItems} items, and you already packed ${itemPacked}(
        ${percentage}% )`}
      </em>
    </footer>
  );
}
