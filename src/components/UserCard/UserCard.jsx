import React from "react";

export default function UserCard({ data }) {
  return (
    <div
      className="px-5"
      style={{
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
      }}
    >
      <img className="h-300px" src={data.image} alt={data.firstName} />
      <div className="text-gray-600">
        First Name: <span className="text-black"> {data.firstName}</span>
      </div>
      <div className="text-gray-600">
        Last Name: <span className="text-black"> {data.lastName}</span>
      </div>
      <div className="text-gray-600">
        Gender: <span className="text-black"> {data.gender}</span>
      </div>
      <div className="text-gray-600">
        Age: <span className="text-black"> {data.age}</span>
      </div>
      <div className="text-gray-600">
        E-mail: <span className="text-black"> {data.email}</span>
      </div>
      <div className="text-gray-600">
        Phone: <span className="text-black"> {data.phone}</span>
      </div>
      <div className="text-gray-600">
        Company: <span className="text-black"> {data.company.name}</span>
      </div>
    </div>
  );
}
