import React from "react";
import UserCard from "../UserCard/UserCard";

export default function Main({ data }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {data.map((item, index) => {
        return <UserCard data={item} key={index} />;
      })}
    </div>
  );
}
