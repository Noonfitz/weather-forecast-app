import React from "react";


function UserItem(props) {
  return (
    props.users.map(user => (
      <ul key = {user.id}>
        <li>{user.city}, {user.administrativeArea.abbrev}, {user.country.abbrev}</li>
      </ul>
    ))
  );
}

export default UserItem;