import React from 'react';
import { FooterContainer } from '../../containers/Footer/Footer';
import { HeaderContainer } from '../../containers/Header/Header';
import MainPageBodyContainer from '../../containers/MainPageBody/MainPageBody';

export const MainPageView = () => {
  return (
    <>
      <HeaderContainer />
      <MainPageBodyContainer />
      <FooterContainer />
    </>
  );
};
