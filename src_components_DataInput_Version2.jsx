import React, { useState } from "react";

export default function DataInput({ data, setData }) {
  const [input, setInput] = useState({ x: "", y: "" });

  function handleChange(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  function handleAdd() {
    if (input.x !== "" && input.y !== "") {
      setData([...data, { x: Number(input.x), y: Number(input.y) }]);
      setInput({ x: "", y: "" });
    }
  }

  return (
    <div className="bg-white p-4 rounded shadow space-y-4">
      <h2 className="text-lg font-semibold">Adicionar dados</h2>
      <div className="flex gap-2">
        <input
          name="x"
          type="number"
          value={input.x}
          onChange={handleChange}
          placeholder="x"
          className="border px-2 py-1 rounded"
        />
        <input
          name="y"
          type="number"
          value={input.y}
          onChange={handleChange}
          placeholder="y"
          className="border px-2 py-1 rounded"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-600 text-white px-3 py-1 rounded"
        >
          Adicionar
        </button>
      </div>
      <div>
        <h3 className="font-medium mb-1">Dados inseridos:</h3>
        <ul className="text-sm">
          {data.map((d, i) => (
            <li key={i}>
              x: {d.x}, y: {d.y}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}