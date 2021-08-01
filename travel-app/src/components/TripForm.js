import React, { useState, useEffect, useRef } from "react";

export default function TripForm() {
  let refName = useRef();
  let refEmail = React.createRef();
  let refContact = React.createRef();
  let [errName, setNameError] = useState("");
  let [errEmail, setEmailError] = useState("");
  let [errContact, setContactError] = useState("");
  let [successSubmit, setSuccess] = useState(false);
  let [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    refName.current.focus();
  }, []);

  function handleNameChange() {
    setShowSuccess(false);
    if (refName.current.value.length <= 0) {
      setNameError("Name is required");
      setSuccess(false);
    } else {
      setNameError("");
      setSuccess(true);
    }
  }

  function handleContactChange() {
    const contactRegex = /^\d{10}$/;
    if (refContact.current.value.length <= 0) {
      setContactError("Contact No is required");
      setSuccess(false);
    } else if (
      refContact.current.value.length < 10 ||
      !refContact.current.value.match(contactRegex)
    ) {
      setContactError("Invalid Contact No");
      setSuccess(false);
    } else {
      setContactError("");
      setSuccess(true);
    }
  }

  function handleEmailChange() {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (refEmail.current.value.length <= 0) {
      setEmailError("Email is required");
      setSuccess(false);
    } else if (!refEmail.current.value.match(emailRegex)) {
      setEmailError("Invalid Email");
      setSuccess(false);
    } else {
      setEmailError("");
      setSuccess(true);
    }
  }

  function handleClick() {
    if (successSubmit === true) {
      setShowSuccess(true);
      refContact.current.value = "";
      refEmail.current.value = "";
      refName.current.value = "";
    }
  }
  return (
    <div className="form-container">
      <div className="form-body">
        <h1>Travelling as a group? Get a quote</h1>
        <div>
          <p className="form-labels">Your Name</p>
          <input
            type="text"
            name="textName"
            ref={refName}
            onBlur={handleNameChange}
          />
          {errName.length > 0 && <p className="error-display">{errName}</p>}
          <p className="form-labels">Contact no</p>
          <input
            type="text"
            name="textContact"
            ref={refContact}
            onBlur={handleContactChange}
          />
          {errContact.length > 0 && (
            <p className="error-display">{errContact}</p>
          )}
          <p className="form-labels">Email</p>
          <input
            type="text"
            name="textEmail"
            ref={refEmail}
            onBlur={handleEmailChange}
          />
          {errEmail.length > 0 && <p className="error-display">{errEmail}</p>}
        </div>
        {showSuccess && (
          <p className="success-submit">
            We hear you! We will get back to you for planning your vacation
          </p>
        )}
        <button
          type="button"
          onClick={handleClick}
          className="button-style linear-color"
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
}
