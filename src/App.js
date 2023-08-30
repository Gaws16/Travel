import { useState } from "react";
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Umbrella", quantity: 1, packed: true },
];

export default function App() {
  return (
    <div className="app">
      <Header />
      <FormInputs />
      <PackingList />
      <Stats />
    </div>
  );
}
function Header() {
  return <h1>🌴Far Away💼</h1>;
}
function FormInputs() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
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
function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}
function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}
function Stats() {
  return (
    <footer className="stats">
      <em>You have X items on the list</em>
    </footer>
  );
}
