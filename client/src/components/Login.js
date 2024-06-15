import React from 'react';

const Login = () => {
  const handleLogin = () => {
    window.location.href = 'http://localhost:5000/auth/google';
  };

  return (
    <div>
      <h1 style={{margin:'15px'}}>Login</h1>
      <button onClick={handleLogin} style={{margin:'30px',color:'blue'}}>Login with Google</button>
    </div>
  );
};

export default Login;
