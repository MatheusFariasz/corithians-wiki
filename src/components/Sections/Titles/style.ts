import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const Container = styled.div`
  background: linear-gradient(to right, #000, #1a1a1a);
  min-height: 100vh;
  color: #fff;
  padding: 2rem 4rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 4rem;
  text-align: center;
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
`;

export const Card = styled.div`
  background: linear-gradient(145deg, #111, #1c1c1c);
  border: 1px solid #fff;
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.08);

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
  }
`;

export const TrophyImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
  margin-bottom: 1rem;
`;

export const TrophyName = styled.h3`
  font-size: 1.2rem;
  margin: 0;
`;

export const BackButton = styled(RouterLink)`
  align-self: flex-start;
  background: transparent;
  color: #fff;
  border: 2px solid #fff;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  text-decoration: none;
  margin-bottom: 2rem;
  transition: all 0.3s;

  &:hover {
    background: #fff;
    color: #000;
  }
`;
