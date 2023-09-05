import { Route, Routes } from "react-router-dom";
import IndexPage from "./pages/indexPage";
import Layout from "./Layout";
import Login from "./pages/login";
import Register from "./pages/Register";
import axios from "axios";
import { UserContextProvider } from "./userContext";
import AccountPage from "./pages/AccountPage";

axios.defaults.baseURL='http://127.0.0.1:5000';
axios.defaults.withCredentials=true;

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account/:subpage" element ={<AccountPage/>} />
          <Route path="/account/:subpage/:action" element={<AccountPage/>}/>
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
