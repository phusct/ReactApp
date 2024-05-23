import React, { useState } from 'react';
import Login from './Login';
import Home from './Home';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (username, password) => {
    // Bạn có thể thêm logic xác thực tại đây
    if (username && password) {
      setUsername(username);
      setIsLoggedIn(true);
    }
  };

  return (
    <div>
      {isLoggedIn ? <Home username={username} /> : <Login onLogin={handleLogin} />}
    </div>
  );
};

export default App;
