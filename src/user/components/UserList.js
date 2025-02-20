import React from "react";
import { UserItem } from "./UserItem";
import './UserList.css';

export const UserList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <h1>No User Found ....</h1>
      </div>
    );
  }
  return (
    <ul className="users-list">
      {props.items.map(user => (
        <UserItem
          key={user.id}
          id={user.id}
          name={user.name}
          image={user.image}
          placeCount={user.places}
        />
      ))}
    </ul>
  );
};
export default UserList;
