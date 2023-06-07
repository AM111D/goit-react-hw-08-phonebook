import operations from 'components/store/Auth/authOperation';
import authSelectors from 'components/store/Auth/authSelectors';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import avatar from './default-avatar.png';
import css from './UserMenu.module.css';

function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  useEffect(() => {}, []);

  return (
    <div className={css.userMenu}>
      <img src={avatar} alt="" width="32" />
      <span className={css.userName}>Welcome, {name}</span>
      <button
        type="button"
        className={css.btnOut}
        onClick={() => dispatch(operations.logOut())}
      >
        LogOut
      </button>
    </div>
  );
}

export default UserMenu;
