import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./scenes/login/Login";
import Dashboard from "./scenes/dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
