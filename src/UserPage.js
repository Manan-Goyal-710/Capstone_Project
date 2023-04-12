import React from 'react';
import { useHistory } from 'react-router-dom';

function UserPage() {
  const history = useHistory();

  const handleLogout = () => {
    // logout logic here
    history.push('/'); // redirect to homepage after logout
  };

  return (
    <div>
      <h2>You have signed in as a user.</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default UserPage;
