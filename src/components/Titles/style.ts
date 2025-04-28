import styled from "styled-components";

export const Container = styled.div`
  background: #000;
  padding: 1rem;
  border-radius: 12px;
  color: #fff;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 1.5rem;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export const Item = styled.li`
  background: #1c1c1c;
  padding: 1rem;
  margin-bottom: 0.75rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const TrophyImage = styled.img`
  width: 48px;
  height: 48px;
`;
