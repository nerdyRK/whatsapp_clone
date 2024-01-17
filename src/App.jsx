import { useState } from "react";
import Sidebar from "./components/Sidebar";
import MainArea from "./components/MainArea";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="app">
        <Sidebar />
        <MainArea />
      </div>
    </>
  );
}

export default App;
