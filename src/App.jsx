import { useState } from "react";
import SideBar from "./sections/SideBar";
import Home from "./sections/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <div className="flex">
        <SideBar />
        <Home />
      </div>
    </main>
  );
}

export default App;
