import React from "react";

import UserList from "../components/UserList";

const User = () => {
    const USERS = [
        {
        id: 'ul',
        name : 'Deepak',
        image : 'https://images.pexels.com/photos/3534160/pexels-photo-3534160.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        places : 3
    }
];

  return <UserList items={USERS} />;
};
export default User;
