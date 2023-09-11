import { Route, Routes } from "react-router-dom";
import IndexPage from "./pages/indexPage";
import Layout from "./Layout";
import Login from "./pages/login";
import Register from "./pages/Register";
import axios from "axios";
import { UserContextProvider } from "./userContext";
import ProfilePage from "./pages/ProfilePage";
import PlacesPage from "./pages/PlacesPage";
import PlacePage from "./pages/PlacePage"
import PlaceFormPage from "./pages/PlaceFormPage";

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
          <Route path="/account/profile" element ={<ProfilePage/>} />
          <Route path="/account/places" element={<PlacesPage/>}/>
          <Route path ="/account/places/new" element={<PlaceFormPage/>}/>
          <Route path ="/account/places/:id" element={<PlaceFormPage/>}/>
          <Route path ="/place/:id" element={<PlacePage/>}/>
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
