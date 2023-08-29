import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function userLogin(ev) {
    ev.preventDefault();
    try {
      await axios.post("/login", {
        email,
        password,
      });
      alert("login successful");
    } catch (e) {
      alert("login failed");
    }
  }
  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className=" mt-20">
        <h1 className="text-4xl font-bold text-center mb-4">Login</h1>
        <form className="max-w-md mx-auto " onSubmit={userLogin}>
          <input
            type="email"
            placeholder="yourname@gmail.com"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />
          <button className="primary">Login</button>
          <div className="text-center py-2 text-gray-500">
            Dont have an account yet?
            <Link className="underline text-black" to={"/register"}>
              Register Now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
