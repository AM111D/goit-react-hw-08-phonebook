import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { getToken } from 'components/store/Auth/authSelectors';
import { fetchContacts } from 'components/store/Contacts/operation';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './ContactsView.module.css';

function ContactsView() {
  const dispatch = useDispatch();

  const token = useSelector(getToken);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.contactsBlock}>
      {token ? (
        <>
          <ContactForm />
          <h1>Contacts</h1>
          <Filter />
          <ContactList />
        </>
      ) : (
        <p className={css.welcomeContactsText}>
          Please login or register to use the app 😋
        </p>
      )}
    </div>
  );
}

export default ContactsView;
