import { useState } from "react";
import SideBar from "./sections/SideBar";
import Home from "./sections/Home";
import Generations from "./sections/Generations";

function App() {
  const [activeTab, setActiveTab] = useState(0);

  function handleSelectTab(tab) {
      setActiveTab(tab);
      console.log(tab);
  }

  return (
    <main>
      <div className="flex">
        <SideBar onSelectTab={handleSelectTab} />
          {activeTab === 0 && <Home />}
          {activeTab === 1 && <Generations />}
      </div>
    </main>
  );
}

export default App;
