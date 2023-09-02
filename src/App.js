import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);
  function handleAddItem(item) {
    setItems([...items, item]);
  }
  function handleDeleteItem(id) {
    setItems((i) => i.filter((x) => x.id !== id));
  }
  function handleCheckedItem(id) {
    setItems(
      items.map((i) => {
        return i.id === id ? { ...i, packed: !i.packed } : i;
      })
    );
  }
  return (
    <div className="app">
      <Header />
      <FormInputs onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onCheckedItem={handleCheckedItem}
      />
      <Stats items={items} />
    </div>
  );
}
function Header() {
  return <h1>🌴Far Away💼</h1>;
}
function FormInputs({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  function handleSubmit(e) {
    e.preventDefault();
    if (!description) {
      return;
    }
    const item = {
      description,
      quantity,
      id: new Date().getTime(),
      packed: false,
    };
    setDescription("");
    setQuantity(1);
    onAddItem(item);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <label>What do you need for your 😍 trip?</label>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num}>{num}</option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Write item here"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button>Submit</button>
    </form>
  );
}
function PackingList({ items, onDeleteItem, onCheckedItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            key={item.id}
            item={item}
            onCheckedItem={onCheckedItem}
            onDeleteItem={onDeleteItem}
          />
        ))}
      </ul>
    </div>
  );
}
function Item({ item, onDeleteItem, onCheckedItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onCheckedItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
function Stats({ items }) {
  if (items.length === 0) {
    return (
      <footer className="stats">
        <em>{`You have 0 items on the list, start packing!`}</em>
      </footer>
    );
  }
  const count = items.length;
  const packedCount = items.filter((i) => i.packed === true).length;
  const percent = Math.round((packedCount * 100) / count);
  return (
    <footer className="stats">
      <em>
        {percent < 100
          ? `You have ${count} items on the list, you have packed ${packedCount}, that is ${percent}%`
          : `You packed everethig its time to go!!`}
      </em>
    </footer>
  );
}
