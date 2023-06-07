import operations from 'components/store/Auth/authOperation';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './LoginView.module.css';
import { useNavigate } from 'react-router-dom';
import { getToken } from 'components/store/Auth/authSelectors';

function LoginView() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const token = useSelector(getToken);
  const navigate = useNavigate();

  function handleLoginSuccess(token) {
    navigate('/contacts');
  }

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);
    await dispatch(operations.logIn({ email, password }));
    handleLoginSuccess(token);
    setEmail('');
    setPassword('');
    setIsLoading(false);
  };

  return (
    <div className={css.logInBlock}>
      <h1>LogIn</h1>
      <form className={css.contactForm} onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          className={css.contactInput}
          id="email"
          value={email}
          onChange={handleChange}
          type="email"
          name="email"
          title="Phone email must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <label htmlFor="password">Password</label>
        <input
          className={css.contactInput}
          id="password"
          value={password}
          onChange={handleChange}
          type="password"
          name="password"
          title="Phone password must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button className={css.contactButton} type="submit">
          {isLoading ? 'Loading...' : 'Enter'}
        </button>
      </form>
    </div>
  );
}

export default LoginView;
