import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Outlet />
    </div>
  );
}
