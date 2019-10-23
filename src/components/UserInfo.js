import React from 'react';
import styled from 'styled-components';
import { sumBy } from 'lodash/fp';

import { star } from '../assets';

const S = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  Anchor: styled.a`
    width: 100%;
  `,
  UserName: styled.h2`
    margin-bottom: 0.75rem;
    border-bottom: 1px solid #DDD;
    color: #008CBA;
    font-size: 2rem;
    font-weight: 500;
    text-decoration: none;
  `,
  ImageWrapper: styled.div`
    order: -1;
    margin-bottom: 1rem;
  `,
  Image: styled.img`
    display: block;
    width: 100%;
  `,
  List: styled.ul`
    width: 100%;
  `,
  ListItem: styled.li`
    display: flex;
    align-items: center;
  `,
  Attribute: styled.p`
    margin-right: 4rem;
    color: #999;
    font-size: 1.25rem;
  `,
  Value: styled.p`
    display: flex;
    align-items: center;
    ::before {
      content: '';
      display: block;
      width: 12px;
      height: 16px;
      margin-right: 4px;
      background: url(${star}) no-repeat;
    }
  `,
};

const UserInfo = React.memo(({ className, repos, user }) => (
  <S.Wrapper className={className}>
    <S.Anchor to={user.html_url}>
      <S.UserName>
        {user.login}
      </S.UserName>
    </S.Anchor>
    <S.ImageWrapper>
      <S.Image src={user.avatar_url} alt={user.name} />
    </S.ImageWrapper>
    <S.List>
      <S.ListItem>
        <S.Attribute id="star">
          Star
        </S.Attribute>
        <S.Value aria-labelledby="star">
          {sumBy((repo) => repo.stargazers_count, repos)}
        </S.Value>
      </S.ListItem>
    </S.List>
  </S.Wrapper>
));

UserInfo.defaultProps = {
  className: undefined,
  repos: null,
  user: null,
};

export default UserInfo;
