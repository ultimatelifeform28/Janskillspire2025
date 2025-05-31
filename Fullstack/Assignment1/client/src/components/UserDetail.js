import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`/api/users/${id}`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, [id]);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Height: {user.height} cm</p>
      <p>Weight: {user.weight} lbs</p>
      <p>Dietary Preference: {user.dietary}</p>
    </div>
  );
}

export default UserDetail;