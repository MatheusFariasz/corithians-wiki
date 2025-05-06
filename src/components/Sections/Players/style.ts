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
  font-family: 'Merriweather', serif;
  font-size: 2.5rem;
  margin-bottom: 5rem;
  text-align: center;
  color: #fff;
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
`;

export const Card = styled.div`
  background: linear-gradient(145deg, #111, #1c1c1c);
  border: 1px solid #fff;
  border-radius: 16px;
  padding: 1rem;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.08);

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
  }
`;

export const PlayerImage = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
  object-position: top center;
  margin-bottom: 1rem;
`;

export const PlayerName = styled.h3`
  font-size: 1.4rem;
  margin: 0.5rem 0 0.25rem;
  font-family: 'Roboto', sans-serif;
`;

export const PlayerPosition = styled.p`
  font-size: 1rem;
  color: #ccc;
  margin: 0;
  font-family: 'Lato', sans-serif;
`;

export const BackButton = styled(RouterLink)`
  align-self: flex-start;
  background: transparent;
  color: #fff;
  border: 2px solid #fff;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  text-decoration: none;
  margin-bottom: 1.5rem;
  transition: all 0.3s;

  &:hover {
    background: #fff;
    color: #000;
  }
`;
