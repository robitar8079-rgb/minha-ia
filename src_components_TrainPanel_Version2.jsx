import React, { useState } from "react";
import { trainModel, predict } from "../utils/model";

export default function TrainPanel({ data, model, setModel }) {
  const [inputX, setInputX] = useState("");
  const [prediction, setPrediction] = useState(null);

  function handleTrain() {
    const trained = trainModel(data);
    setModel(trained);
    localStorage.setItem("model", JSON.stringify(trained));
  }

  function handlePredict() {
    if (!model) return;
    const y = predict(model, Number(inputX));
    setPrediction(y);
  }

  return (
    <div className="bg-white p-4 rounded shadow space-y-4">
      <h2 className="text-lg font-semibold">Treinar Modelo</h2>
      <button
        onClick={handleTrain}
        className="bg-green-600 text-white px-3 py-1 rounded"
        disabled={data.length < 2}
      >
        Treinar
      </button>
      {model && (
        <div>
          <h3 className="font-medium">Modelo treinado:</h3>
          <pre className="bg-gray-100 p-2 rounded text-xs">
            {JSON.stringify(model, null, 2)}
          </pre>
        </div>
      )}
      <div>
        <h3 className="font-medium mb-1">Fazer previsão:</h3>
        <div className="flex gap-2">
          <input
            type="number"
            value={inputX}
            onChange={e => setInputX(e.target.value)}
            placeholder="Digite x"
            className="border px-2 py-1 rounded"
          />
          <button
            onClick={handlePredict}
            className="bg-indigo-600 text-white px-3 py-1 rounded"
            disabled={!model}
          >
            Prever
          </button>
        </div>
        {prediction !== null && (
          <div className="mt-2 text-sm">Predição: {prediction}</div>
        )}
      </div>
    </div>
  );
}