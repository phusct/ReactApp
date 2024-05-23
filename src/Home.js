import React from 'react';

const Home = ({ username }) => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Welcome, {username}</h2>
      <p>This is the Home page</p>
    </div>
  );
};

export default Home;
