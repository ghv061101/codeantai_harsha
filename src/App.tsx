import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Auth from "./Pages/Auth";

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen w-full bg-[#FAFAFA]">
        <Routes>
          {/* Routes */}
          <Route path="/" element={<Auth />} />
          <Route path="/dashboard" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
