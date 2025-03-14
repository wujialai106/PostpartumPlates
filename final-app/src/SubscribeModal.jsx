import { useRef } from "react";
import { useId, useState } from "react";
import Button from "./Button";
import './subscribeModal.css';
function SubscribeModal() {
  const dialogRef = useRef();
  const dialogRef2 = useRef();
  const [name, setName] = useState('');
  const [tier, setTier] = useState('');
  const [email, setEmail] = useState('');
  const [emailBlank, setEmailBlank] = useState(false);
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [emailConfirm, setEmailConfirm] = useState('');
  const [emailConfirmInvalid, setEmailConfirmInvalid] = useState(false);

  const [formValid, setFormValid] = useState(false);
  const id = useId(0);

  const showEmailBlankError = (
    <div className="subscribe-email__blank-error">
      <span>Please enter your email.</span>
    </div>
  );

  const showEmailInalidError = (
    <div className="subscribe-email__invalid-error">
      <span>Please enter a valid email address with @.</span>
    </div>
  );

  const showConfirmError = (
    <div className="subscribe-confirm__error">
      <span>The content does not match the email.</span>
    </div>
  );

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formValid);
    if (email === '') {
      setEmailBlank(true);
      return;
    } else {
      setEmailBlank(false);
    }
    if (!email.includes('@')) {
      setEmailInvalid(true);
      return;
    } else {
      setEmailInvalid(false);
    }
    if (email !== emailConfirm) {
      setEmailConfirmInvalid(true);
      return;
    } else {
      setEmailConfirmInvalid(false);
    }
    setFormValid(true);
    // e.target.submit();
    e.preventDefault(); 
    //remove it after passing tests
    console.log('submit successfully.');
    dialogRef2.current.showModal();
  }


  return (
    <>
      <Button  visual="link" type="button" onClick={() => {dialogRef.current.showModal()}}>
        *Enroll for Subscribe!*</Button>

      <dialog className="modal" ref={dialogRef}>
        <h3 className="modal__title">Subscirbe to the Latest News!</h3>
        <form className="subscribe" action="/subscribe" method="post"
          onSubmit={handleSubmit}>

          <label className="subscribe__label" htmlFor={`${id}-name`}>
            <div className="subscribe__label-div">
              <span className="subscribe__name-label">Name:</span>
              <span className="subscribe__eg-label">* eg:Jialai Wu</span>
            </div>
            <input className="name"
              // onInput={handleChange}
              id={`${id}-name`}
              value={name}
              onInput={(e) => {
                setName(e.target.value);
              }}
            />
          </label>

          <label className="subscribe__label" htmlFor={`${id}-tier`}>
            <div className="subscribe__label-div">
              <span className="subscribe__name-label">Select Tier:</span>
              <span className="subscribe__eg-label">* Gold</span>
            </div>
            <select className="tier"
              // onChange={handleChange}
              id={`${id}-tier}`}
              onChange={(e) => setTier(e.target.value)}
              value={tier}>
              <option value="">Select Type</option>
              <option value="Gold">Gold</option>
              <option value="Prime">Prime</option>
            </select>
          </label>

          <label className="subscribe__label" htmlFor={`${id}-email`}>
            <div className="subscribe__label-div">
              <span className="subscribe__email-label">Email:</span>
              <span className="subscribe__required-label">* required</span>
            </div>
            <input className="subscribe__email"
              // onInput={handleChange}
              id={`${id}-subscribe__email`}
              value={email}
              onInput={(e) => {
                setEmail(e.target.value);
              }}
            />
            {emailBlank && showEmailBlankError}
            {emailInvalid && showEmailInalidError}
          </label>

          <label className="subscribe__label" htmlFor={`${id}-confirm`}>
            <div className="subscribe__label-div">
              <span className="subscribe__confirm-label">Confirm Email: </span>
              <span className="subscribe__required-label">* required</span>
            </div>
            <input className="subscribe__confirm"
              // onInput={handleChange}
              id={`${id}-subscribe__confirm`}
              value={emailConfirm}
              onInput={(e) => {
                setEmailConfirm(e.target.value);
              }}
            />
            {emailConfirmInvalid && showConfirmError}
          </label>

          <div className="subscribe__buttons">
            <Button visual="button" type="submit"> Submit</Button>
 
            <Button
              visual="button" type="button"
              onClick={() => dialogRef.current.close()}>
              Close</Button>
          </div>
          <dialog className="submission" ref={dialogRef2}>
            <p>Subscirbe successfully!</p>
            <Button
              visual="button" type="button" className="submission__close-button"
              onClick={() => dialogRef2.current.close()}>
              Close</Button>
          </dialog>

        </form>
      </dialog>
    </>
  );
}

export default SubscribeModal;
