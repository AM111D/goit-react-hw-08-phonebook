import React, { useState } from 'react';
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addContact } from 'components/store/Contacts/operation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactForm() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const notifyErrorName = () => toast.warning('Please write letters');
  const notifyErrorNumber = () => toast.warning('Please write number');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addContact({ id: nanoid(), name, number }));
    setName('');
    setNumber('');
  };

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        if (/^[a-zA-Zа-яА-Я\s'-]*$/.test(value)) {
          return setName(value);
        }
        notifyErrorName();
        break;

      case 'number':
        if (!isNaN(value)) {
          return setNumber(value);
        }
        notifyErrorNumber();
        break;

      default:
        return;
    }
  };

  return (
    <>
      <h1>Phonebook</h1>
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
        <label htmlFor="number">Number</label>
        <input
          className={css.contactInput}
          id="number"
          value={number}
          onChange={handleChange}
          type="tel"
          name="number"
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button className={css.contactButton} type="submit">
          Add Contact
        </button>
        <ToastContainer autoClose={1000} theme="dark" />
      </form>
    </>
  );
}

export default ContactForm;
