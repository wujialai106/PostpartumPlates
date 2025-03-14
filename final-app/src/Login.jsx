
import { useState } from 'react';
import './login.css';
// "username" here is NOT the same as "username" in App.jsx
// We pass this username to the onLogin function we are passed
import Button from "./Button";
function Login({ onLogin }) {
  const [userEmail, setUserEmail] = useState('');

  return (
    <form className='login__form'>
      <label className="login__label" >
        <span>User Email: </span>
        <input
          value={userEmail}
          onInput={(e) => setUserEmail(e.target.value)}
        />
      </label>
      <br />
      <div className='login__buttons'>
        <Button className="login__button"
          visual="button" type="button"
          onClick={() => onLogin(userEmail)}>
          Login</Button>
      </div>
    </form>
  );
}

export default Login;
