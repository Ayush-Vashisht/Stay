import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function userRegister(ev){
    ev.preventDefault();
    try{
    axios.post('/register',{
      name,
      email,
      password,
    });
    alert("Registration succesful. Now you can log in");
  } catch(e){
    alert("Registration failed. Please try again later");
  }
  }
  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className=" mt-20">
        <h1 className="text-4xl font-bold text-center mb-4">Register</h1>
        <form className="max-w-md mx-auto " onSubmit={userRegister}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />
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
          <button className="primary">Register</button>
          <div className="text-center py-2 text-gray-500">
            Alerady a member?
            <Link className="underline text-black" to={"/login"}>
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
