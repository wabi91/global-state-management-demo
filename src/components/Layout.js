import React from 'react';
import styled from 'styled-components';

import Header from './Header';

const S = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 64px;
    padding-bottom: 32px;
  `,
};

const Layout = ({ children }) => (
  <S.Wrapper>
    <Header />
    {children}
  </S.Wrapper>
);

export default Layout;
