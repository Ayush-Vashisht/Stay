import { useContext, useState } from "react";
import { UserContext } from "../userContext";
import PlacesPage from "./PlacesPage";
import {Navigate, useParams } from "react-router-dom";
import axios from "axios";
import AccountNav from "../AccountNav";

export default function AccountPage() {
  const [redirect, setRedirect] = useState(null);
  const { ready, setUser, user } = useContext(UserContext);
  let { subpage } = useParams();
  if (subpage === undefined) {
    subpage = "profile";
  }
  async function logout() {
    await axios.post("/logout");

    setRedirect("/");
    setUser(null);
  }
  if (!ready) {
    return "Loading...";
  }
  if (ready && !user && !redirect) {
    return <Navigate to={"/login"} />;
  }
  if (redirect) {
    return <Navigate to={redirect} />;
  }
  return (
    
    <div>
    <AccountNav />
      {subpage === "profile" && (
        <div className="text-center max-w-full mx-auto ">
          Logged in as {user.name}({user.email})<br />
          <button onClick={logout} className="primary max-w-sm mt-4">
            Logout
          </button>
        </div>
      )}
      {subpage == "places" && (
        <div>
          <PlacesPage />
        </div>
      )}
    </div>
  );
}
