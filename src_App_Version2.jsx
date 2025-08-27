import React, { useState } from "react";
import DataInput from "./components/DataInput";
import TrainPanel from "./components/TrainPanel";

function App() {
  const [data, setData] = useState([]);
  const [model, setModel] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold mb-8">IA Persistente no Navegador</h1>
      <div className="w-full max-w-2xl space-y-8">
        <DataInput data={data} setData={setData} />
        <TrainPanel data={data} model={model} setModel={setModel} />
      </div>
    </div>
  );
}

export default App;