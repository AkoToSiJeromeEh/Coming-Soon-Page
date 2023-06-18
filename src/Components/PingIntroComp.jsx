import React, { useState } from 'react';
import GreetComp from './Greetings';
import Footer from '../Contents/Footer'
import '../Style/Main.css';

function PingIntroComp() {
  const [toggle, setToggle] = useState(false);
  const [notify, setNotify] = useState(false);
  const [error, setError] = useState('');
  const [valid, setValid] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
  });

  function errorHandling() {
    if (!formData.email) {
      setError('Empty Fields, Please Fill Up!');
      setValid(false);
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(formData.email)) {
      setError('Invalid Email');
      setValid(false);
    } else if (!formData.email.endsWith('.com')) {
      setError('Did you mean .com?');
    } else {
      setError('');
      setValid(true);
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevVal) => ({
      ...prevVal,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    errorHandling();
    if (valid) {
      console.log(`Email Sent: ${formData.email}`);
    }
  }

  function onMouseEnter() {
    setToggle(true);
  }

  function onMouseLeave() {
    setToggle(false);
  }

  function toggleNotify() {
    setNotify((prevVal) => !prevVal);
  }

  return (
    <section className="Ping--Section--Container">
      <div className={notify && valid ? 'Greetings--Cont shows' : 'Greetings--Cont'}>
        {valid && (
          <GreetComp email={formData.email} Toggle={toggleNotify} />
        )}
      </div>
      <div className="Ping-Wrapper">
        <div className="Ping--logo--Container">
          <img src="logo.svg" alt="" />
        </div>
        <div className="Ping--Content-Container">
          <h1>
            <span>We are launching</span> soon!
          </h1>
          <p>Subscribe and get notified</p>
        </div>
        <div className="Ping--Form--Container">
          <div className={toggle ? 'email--details--cont show' : 'email--details--cont'}>
            <h5>e.g: YourEmail@example.com</h5>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              className={valid ? 'blue-border' : 'red-border'}
              type="text"
              placeholder="Email Address"
              name="email"
              onChange={handleChange}
              value={formData.email}
            />
            <button onClick={toggleNotify}>
              <i className="fa-solid fa-bell"></i> Notify Me
            </button>
            <p>{valid ? '' : error}</p>
          </form>
          <div className="icon--div">
            <button onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
              <i className="fa-solid fa-at"></i>
            </button>
          </div>
        </div>
        <picture className="Ping--ilustration-Container">
          <img src="illustration-dashboard.png" alt="" />
        </picture>
      </div>
      <Footer/>
    </section>
  );
}

export default PingIntroComp;
