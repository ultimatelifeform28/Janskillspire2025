import React, { useState, useEffect } from 'react';
import UserForm from './UserForm';
import UserList from './UserList';

function UserManager() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  const handleUserAdded = (newUser) => {
    setUsers([newUser, ...users]);
  };

  return (
    <div>
      <UserForm onUserAdded={handleUserAdded} />
      <hr />
      <UserList users={users} />
    </div>
  );
}

export default UserManager;