import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import css from './Register.module.css';
import operations from 'components/store/Auth/authOperation';
import { getIsLoading } from 'components/store/Contacts/selectors';

const Register = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(operations.register({ name, email, password }));
    console.log(getIsLoading);
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className={css.registrationBlock}>
      <h1>Register page</h1>

      <form className={css.contactForm} onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          className={css.contactInput}
          id="name"
          value={name}
          onChange={handleChange}
          type="text"
          name="name"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor="email">Email</label>
        <input
          className={css.contactInput}
          id="email"
          value={email}
          onChange={handleChange}
          type="email"
          name="email"
          // pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
          title="Phone email must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <label htmlFor="email">Password</label>
        <input
          className={css.contactInput}
          id="password"
          value={password}
          onChange={handleChange}
          type="password"
          name="password"
          // pattern="^[a-zA-Z0-9]{6,}$"
          title="Phone password must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button className={css.contactButton} type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
