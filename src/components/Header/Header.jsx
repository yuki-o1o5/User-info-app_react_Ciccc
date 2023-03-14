import React from "react";

export default function Header() {
  return (
    <header
      className="flex flex-row justify-between content-center py-5 bg-gray-900 text-white"
      style={{
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      }}
    >
      <div>
        <h1 className="text-3xl pl-3">Robot Company</h1>
      </div>
      <ul className="flex flex-row content-evenly list-none items-center">
        <li className="py-0 px-10">Home</li>
        <li className="py-0 px-10">About</li>
        <li className="py-0 px-10">Contact</li>
      </ul>
    </header>
  );
}
