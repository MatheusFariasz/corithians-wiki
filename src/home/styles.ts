import styled, { keyframes } from "styled-components";
import { Link as RouterLink } from "react-router-dom";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeInLogo = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  background: linear-gradient(to right, #000000, #1a1a1a);
  color: #fff;
  font-family: 'Lato', sans-serif;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftSection = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeInLogo} 1.2s ease;

  @media (max-width: 768px) {
    padding: 2rem 0 1rem;
  }
`;

export const Logo = styled.img`
  max-height: 90%;
  max-width: 90%;
  object-fit: contain;
  user-drag: none;
  user-select: none;
  pointer-events: none;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
    pointer-events: auto;
  }

  @media (max-width: 768px) {
    max-height: 40vh;
  }
`;

export const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 3rem;

  @media (max-width: 768px) {
    padding: 1rem 2rem;
  }
`;

export const Header = styled.div`
  text-align: center;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-size: 5rem;
  font-weight: 700;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const NavSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  animation: ${fadeInUp} 1s ease;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const StyledLink = styled(RouterLink)`
  font-size: 1.5rem;
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  padding: 1rem 1.5rem;
  background-color: #000;
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s ease;
  font-family: 'Lato', sans-serif;
  box-shadow: 0 0 0 transparent;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  &:hover {
    background-color:rgb(255, 255, 255);
    color: #000;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 1.25rem;
  }
`;