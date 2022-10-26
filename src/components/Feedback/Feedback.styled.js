import styled from '@emotion/styled';

export const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20px, 60px));
  gap: 24px;
  padding-left: 16px;
  padding-right: 16px;
`;

export const Title = styled.h1`
  font-size: 1.5em;
  margin: 20px;
  text-align: left;
`;

export const Info = styled.div`
  display: grid;
  grid-colums: (auto-fit);
  padding-left: 16px;
  padding-right: 16px;
  span {
    padding-bottom: 8px;
  }
`;

export const Notification = styled.p`
  font-size: 1.5em;
  margin: 20px;
  text-align: left;
`;
