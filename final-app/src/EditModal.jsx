import { useRef } from "react";
import { useState } from "react";
import Button from "./Button";
import './editModal.css';
import Content from './Content'; // These have explicit paths, we're importing our own files
import Login from './Login';
function EditModal() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  function onLogin(userEmail) {
    setUserEmail(userEmail);
    setIsLoggedIn(true);
  };
  function onLogout() {
    setIsLoggedIn(false);
  };
  const dialogRef = useRef();

  return (
    <>
      <Button
        visual="link" type="button"
        onClick={() => dialogRef.current.showModal()}>
        *Already enrolled? Edit profile here!*</Button>

      <dialog className="login__modal" ref={dialogRef}>
        <div className="login__div">
          <button onClick={() => dialogRef.current.close()} className="login__close-button">
            X
          </button>
          <h3 className="modal__title">Account profile.</h3>
          <br />
          {isLoggedIn
            ? <Content
              userEmail={userEmail}
              setUserEmail={setUserEmail}
              onLogout={onLogout}
            />
            : <Login
              onLogin={onLogin}
            />
          }
        </div>
      </dialog>
    </>
  );
}

export default EditModal;
