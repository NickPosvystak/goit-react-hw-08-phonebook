import { StyledContainer } from 'App.styled';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOutThunk } from 'redux/AuthReducer';
import { selectAuthAuthenticated } from 'redux/authSelector';
import { User } from '../User/User';
import { StyledBtn, StyledNavLink } from './Navigation.styled';

const Navigation = () => {
  const authenticated = useSelector(selectAuthAuthenticated);

  const dispatch = useDispatch();
  const onLogOut = () => {
    dispatch(logOutThunk());
  };
  return (
    <>
      {authenticated ? (
        <>
          <StyledContainer>

          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/contacts">Contacts</StyledNavLink>
          
          <StyledBtn type="button" onClick={onLogOut}>
            Log Out
          </StyledBtn>
          </StyledContainer>
          <User />
        </>
      ) : (
        <>
          {/* <StyledNavLink to="/login">Login</StyledNavLink> */}
          {/* <StyledNavLink to="/register">Register</StyledNavLink> */}
        </>
      )}
    </>
  );
};

export default Navigation;
