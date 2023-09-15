import React, { useState } from 'react';
import '../styles/Form.css';

const styles = {
    sectionStyles: {
        background: '#edf5c4',
      },
}

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    if (name === 'name') {
        setName(value);
    } else if (name ==='email') {
        setEmail(value);
    } else {
        setMessage(value);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Alert the user their first and last name, clear the inputs
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <form style={styles.sectionStyles}  className="form">
      <h2 id="section-3">Contact</h2>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="Email"
        />
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Message..."
        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
