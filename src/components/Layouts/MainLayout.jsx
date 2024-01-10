import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../UI/NavBar";

export default function MainLayout() {
  return (
    <div className="w-full min-h-screen pt-[80px]">
      <NavBar />

      <div className="w-full h-full px-[8%]">
        <Outlet />
      </div>
    </div>
  );
}
