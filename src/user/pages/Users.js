import React from "react";
import UserList from "../components/UserList";

export const Users = () => {
  const USER = [
    {
      id: "u1",
      name: "max",
      image:
        "https://images.pexels.com/photos/15789986/pexels-photo-15789986/free-photo-of-woman-in-dress-standing-in-doorway.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      places: 3
    }
  ];
  return <UserList items={USER} />;
};
export default Users;
