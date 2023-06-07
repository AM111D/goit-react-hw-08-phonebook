import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
// import { Suspense } from 'react';
// import { styled } from 'react';
// import styled from 'styled-components';

import css from './Navigation.module.css';

const Navigation = () => {
  return (
    <div>
      <header>
        <nav>
          <ul className={css.headerList}>
            <li className={css.headerListItem}>
              <NavLink to="/" className={css.headerListItemLink} exact="true">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/contacts" className={css.headerListItemLink}>
                Contacts
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <footer className={css.container}>
        <span className={css.Footer}></span>
      </footer>
    </div>
  );
};

export default Navigation;
