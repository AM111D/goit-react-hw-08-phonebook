import React, { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';

import Container from './Container/Container';
import AppBar from './AppBar';

import operations from './store/Auth/authOperation';

const HomeView = lazy(() => import('../views/HomeView/HomeView'));
const RegisterView = lazy(() => import('../views/RegisterView/RegisterView'));
const LoginView = lazy(() => import('../views/LoginView/LoginView'));
const ContactsView = lazy(() => import('../views/ContactsView/ContactsView'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/register" element={<RegisterView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/contacts" element={<ContactsView />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Container>
  );
}

export default App;
