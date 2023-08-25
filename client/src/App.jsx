import { Route, Routes } from "react-router-dom";
import IndexPage from "./pages/indexPage";
import Layout from "./Layout";
import Login from "./pages/login";
import Register from "./pages/Register";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
