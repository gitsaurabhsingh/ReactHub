import React, { useState } from "react";
import Style from "./From.module.scss";

interface IType {
  Toggle: any;
}
const Form: React.FC<IType> = ({ Toggle }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [error1, setError1] = useState("");
  const [error2, setError2] = useState("");
  const [error3, setError3] = useState("");
  const [error4, setError4] = useState("");

  const handlesubmit = (e: any) => {
    e.preventDefault();
    if (name === "" || name.length < 4) {
      setError("Please enter name");
    } else {
      setError("");
    }

    if (email === "") {
      setError1("Please enter email");
    } else {
      setError1("");
    }
    if (password === "") {
      setError2("Please enter password");
    } else {
      setError2("");
    }
    if (number === "") {
      setError3("Please enter number");
    } else {
      setError3("");
    }
    if (message === "") {
      setError4("Please enter message");
    } else {
      setError4("");
    }
  };

  return (
    <>
      <div className={Style.form}>
        <div className={Style.Dotted}>
          <form onSubmit={handlesubmit} action="https://google.com">
            <div className={Style.formname}>
              <input
                type="text"
                placeholder="Name"
                value={name}
                name="name"
                onChange={(e) => setName(e.currentTarget.value)}
              />
              <span className={Style.error}>{error}</span>
            </div>
            <div className={Style.formname}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                name="email"
                onChange={(e) => setEmail(e.currentTarget.value)}
              />
              <span className={Style.error}>{error1}</span>
            </div>
            <div className={Style.formname}>
              <input
                type="password"
                placeholder="....."
                value={password}
                name="password"
                onChange={(e) => setPassword(e.currentTarget.value)}
              />
              <span className={Style.error}>{error2}</span>
            </div>
            <div className={Style.formname}>
              <input
                type="number"
                placeholder="66666"
                value={number}
                name="number"
                onChange={(e) => setNumber(e.currentTarget.value)}
              />
              <span className={Style.error}>{error3}</span>
            </div>
            <div className={Style.formname}>
              <input
                type="text"
                placeholder="message"
                value={message}
                name="message"
                onChange={(e) => setMessage(e.currentTarget.value)}
              />
              <span className={Style.error}>{error4}</span>
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
      <div className={Style.cross} onClick={Toggle}>
        X
      </div>
    </>
  );
};

export default Form;
