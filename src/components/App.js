import { useState } from "react";
import Header from "./header";
import FormInputs from "./FormInputs";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);
  function addItem(item) {
    setItems((i) => [...i, item]);
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((i) => i.id !== id));
  }
  function handleCheckItem(id) {
    setItems((items) =>
      items.map((i) => (i.id === id ? { ...i, packed: !i.packed } : i))
    );
  }
  function handleClearItems() {
    const confirm = window.confirm(
      "Are you sure you want to delete everething?"
    );
    if (!confirm) return;
    setItems([]);
  }
  return (
    <div className="app">
      <Header />
      <FormInputs addItem={addItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onCheckItem={handleCheckItem}
        onClearItems={handleClearItems}
      />
      <Stats items={items} />
    </div>
  );
}
