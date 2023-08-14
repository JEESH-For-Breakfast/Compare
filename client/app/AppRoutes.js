import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import AuthForm from "../features/Account/AuthForm";
import { me } from "./store";
import { Container } from "react-bootstrap";
import Home from "../features/Home/Home";

const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, []);

  const loggedInRoutes = (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );

  const guestRoutes = (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );

  return<>
  <Container>{isLoggedIn ? loggedInRoutes : guestRoutes}</Container>
  </>;
};
export default AppRoutes;
