import React from 'react';
import arrow from './icons8-стрелка-вверх-64.png';
import css from './HomeView.module.css';
import { useSelector } from 'react-redux';
import { getToken } from 'components/store/Auth/authSelectors';

function HomeView() {
  const token = useSelector(getToken);

  return (
    <>
      <div className={css.textContainer}>
        {token ? (
          ''
        ) : (
          <img src={arrow} className={css.styleArrow} alt="avatar" />
        )}

        <h1 className={css.homeTitle}>
          Welcome to our Contact Books app 👋 here you can create your own
          important contacts notebook. If you have logged in for the first time,
          you need to register so that we can store only your contacts 😊 we are
          waiting for you on the next page 😉{' '}
        </h1>
      </div>
    </>
  );
}

export default HomeView;
