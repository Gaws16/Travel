import { useState } from "react";
import Item from "./Item";
export default function PackingList({
  items,
  onDeleteItem,
  onCheckItem,
  onClearItems,
}) {
  const [orderBy, setOrderBy] = useState("input");
  let orderedList;
  if (orderBy === "input") orderedList = items;
  else if (orderBy === "description")
    orderedList = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  else if (orderBy === "packed")
    orderedList = items.slice().sort((a, b) => a.packed - b.packed);

  return (
    <div className="list">
      <ul>
        {orderedList.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onCheckItem={onCheckItem}
          />
        ))}
      </ul>
      <div className="action">
        <select value={orderBy} onChange={(e) => setOrderBy(e.target.value)}>
          <option value={"input"}>Sort by input order</option>
          <option value={"description"}>Sort by description</option>
          <option value={"packed"}>Sort by packed status</option>
        </select>
        <button onClick={onClearItems}>Clear</button>
      </div>
    </div>
  );
}
