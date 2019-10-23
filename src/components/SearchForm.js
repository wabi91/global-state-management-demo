import React from 'react';
import styled from 'styled-components';

import Input from './Input';
import Jumbotron from './Jumbotron';

const S = {
  Jumbotron: styled(Jumbotron)`
    padding-top: 32px;
  `,
  Heading: styled.h2`
    margin-bottom: 0.75rem;
    font-size: 2.5rem;
    font-weight: 400;
  `,
  Paragraph: styled.p`
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-weight: 300;
  `,
  Form: styled.form``,
  Input: styled(Input)`
    margin-bottom: 1rem;
  `,
  Button: styled.button`
    padding: 8px 12px;
    color: #333;
    background-color: #E7E7E7;
    border: 1px solid #CCC;
  `,
};

const SearchForm = () => (
  <>
    <S.Jumbotron as="section">
      <S.Heading>Gitstar Ranking</S.Heading>
      <S.Paragraph>
          Unofficial GitHub star ranking for users, organizations and repositories.
      </S.Paragraph>
      <S.Form>
        <S.Input
          type="search"
          placeholder="Github username"
        />
        <S.Button type="submit">Search</S.Button>
      </S.Form>
    </S.Jumbotron>
  </>
);

export default SearchForm;
