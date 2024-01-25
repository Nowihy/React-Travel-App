// import "./index.css";

import { useState } from "react";
import { Logo } from "./Logo";
import { Form } from "./Form";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleResetItems() {
    const confirmed = window.confirm(
      "Are you sure you want to reset all items"
    );
    if (confirmed) setItems([]);
  }
  function handleUpdateItems(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  return (
    <div>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItems}
        onUpdateItem={handleUpdateItems}
        onResetItems={handleResetItems}
      />
      <Stats items={items} />
    </div>
  );
}
