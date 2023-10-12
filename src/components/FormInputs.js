import { useState } from "react";
export default function FormInputs({ addItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  function handleSubmit(e) {
    e.preventDefault();
    const newItem = { description, quantity, packed: false, id: Date.now() };
    if (!description) return;
    addItem(newItem);
    setDescription("");
    setQuantity(1);
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
