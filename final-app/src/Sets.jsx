import './styleSets.css';
import setCards from './setCards.js';
import { useRef } from "react";
import { useId, useState } from "react";
import Button from './Button';
function Sets() {


    const list = setCards.map(item => {
        return (
            <div className="card" key={item.name}>
                <h3 className="card__title">{item.name}</h3>
                <div className="card__container"><img src={item.src} alt={item.alt} className="card__pic" /></div>
                <p className="card__text">{item.text}</p>
                <a className="card__link" 
                onClick={() => {
                    dialogRef.current.showModal();
                    setFormValid(false);
                    }} href={item.path}>
                    Order It!
                </a>
            </div>
        );
    });

    const id = useId(0);
    const dialogRef = useRef();
    const [formValid, setFormValid] = useState(false);
    const [name, setName] = useState('');
    const [nameBlank, setNameBlank] = useState(false);

    const [email, setEmail] = useState('');
    const [emailBlank, setEmailBlank] = useState(false);
    const [emailInvalid, setEmailInvalid] = useState(false);

    const [shipping, setShipping] = useState('');
    const [shippingBlank, setShippingBlank] = useState(false);

    const [billing, setBilling] = useState('');
    const [billingBlank, setBillingBlank] = useState(false);

    const showNameBlankError = (
        <div className="order-name__blank-error">
            <span>Please enter your name.</span>
        </div>
    );
    const showEmailBlankError = (
        <div className="order-email__blank-error">
            <span>Please enter your email.</span>
        </div>
    );

    const showEmailInvalidError = (
        <div className="order-email__invalid-error">
            <span>Please enter a valid email address with @.</span>
        </div>
    );
    const showShippingBlankError = (
        <div className="order-shipping__blank-error">
            <span>Please enter your shipping address.</span>
        </div>
    );

    const showBillingBlankError = (
        <div className="order-shipping__blank-error">
            <span>Please enter your billing address.</span>
        </div>
    );
    const [sameAsShipping, setSameAsShipping] = useState(false);
    function handleSameAsShippingChange(e) {
        setSameAsShipping(e.target.checked);
        if (e.target.checked) {
            setBilling(shipping);
        } else {
            setBilling('');
        }
    }
    const billingClass = sameAsShipping ? 'billing-readonly' : '';

    function handleSubmit(e) {


        e.preventDefault();
        console.log(formValid);
        if (name === '') {
            setNameBlank(true);
            return;
        } else {
            setNameBlank(false);
        }

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

        if (shipping === '') {
            setShippingBlank(true);
            return;
        } else {
            setShippingBlank(false);
        }
        if (billing === '') {
            setBillingBlank(true);
            return;
        } else {
            setBillingBlank(false);
        }
        e.preventDefault();
        setFormValid(true);
        //remove it after passing tests
        // e.target.submit();
        console.log('submit successfully.');
    }
    const showSuccessSubmission = (
        <div className="order-submission">
            <span>Order Submitted.</span>
        </div>
    );

    return (
        <div className='main__div'>
            <h2 className='main__title'>Meal and Dessert Sets</h2>
            <div className={"cards"}>
                {list}
            </div>

            <dialog className="order__modal" ref={dialogRef}>
                <button onClick={() => dialogRef.current.close()} className="order__close-button">
                    X
                </button>
                <h3 className="order__title">Order Information</h3>
                <p className="order__text">All fields are required.</p>
                <form className="order__form" action="/order" method="post"
                    onSubmit={handleSubmit}>
                    <label className="order__label" htmlFor={`${id}-name`}>
                        <div className="order__label-div">
                            <span className="order__name-label">Name:</span>
                            <span className="order__eg-label">eg:Tom Ranks</span>
                        </div>
                        <input className="name"
                            // onInput={handleChange}
                            id={`${id}-name`}
                            value={name}
                            onInput={(e) => {
                                setName(e.target.value);
                            }}
                        />
                        {nameBlank && showNameBlankError}
                    </label>
                    <label className="order__label" htmlFor={`${id}-email`}>
                        <div className="order__label-div">
                            <span className="order__email-label">Email:</span>
                            <span className="order__eg-label">eg:123@gmail.com</span>
                        </div>
                        <input className="order__email"
                            // onInput={handleChange}
                            id={`${id}-order_email`}
                            value={email}
                            onInput={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                        {emailBlank && showEmailBlankError}
                        {emailInvalid && showEmailInvalidError}
                    </label>
                    <label className="order__label" htmlFor={`${id}-shipping`}>
                        <div className="order__label-div">
                            <span className="order__shipping-label">Shipping Address:</span>
                            <span className="order__eg-label">eg:9840 Sydney lane, APT 8310, San Diego,CA,92126</span>
                        </div>
                        <input className="shipping"
                            // onInput={handleChange}
                            id={`${id}-order-shipping`}
                            value={shipping}
                            onInput={(e) => {
                                setShipping(e.target.value);
                            }}
                        />
                        {shippingBlank && showShippingBlankError}
                    </label>

                    <label className="order__checkbox" htmlFor={`${id}-same-address`}>
                        <input type="checkbox"
                            id={`${id}-order-same-address`}
                            checked={sameAsShipping}
                            onChange={handleSameAsShippingChange}
                        />
                        <label htmlFor="sameAsShipping">Billing address same as shipping address</label>
                    </label>

                    <label className="order__label" htmlFor={`${id}-billing`}>
                        <div className="order__label-div">
                            <span className='order__billing-label'>Billing Address:</span>
                            <span className="order__eg-label">eg:9840 Sydney lane, APT 8310, San Diego,CA,92126</span>
                        </div>
                        <input className={`billing ${billingClass}`}
                            // onInput={handleChange}
                            id={`${id}-order-billing`}
                            value={billing}
                            readOnly={sameAsShipping}
                            onInput={(e) => {
                                setBilling(e.target.value);
                            }}
                        />
                        {billingBlank && showBillingBlankError}
                    </label>
                    <div className='order__buttons'>
                        <Button visual="button" type="submit" className='order__submit-button'
                        > Submit</Button>
                        {formValid && showSuccessSubmission}
                    </div>
                </form>

            </dialog>
        </div>
    );
}

export default Sets;