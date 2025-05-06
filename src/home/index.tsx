import {
  Container,
  Logo,
  LeftSection,
  RightSection,
  Title,
  Nav,
  StyledLink,
  Header,
  NavSection,
} from "./styles";

export default function Home() {
  return (
    <Container>
      <LeftSection>
        <Logo
          src="../../public/assets/icons/corinthians.svg"
          alt="Corinthians Logo"
        />
      </LeftSection>
      <RightSection>
        <Header>
          <Title>MENU</Title>
        </Header>
        <NavSection>
          <Nav>
            <StyledLink to="/players">Ver Jogadores</StyledLink>
            <StyledLink to="/titles">Ver Títulos</StyledLink>
          </Nav>
        </NavSection>
      </RightSection>
    </Container>
  );
}
