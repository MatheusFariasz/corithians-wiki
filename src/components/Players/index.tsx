import { usePlayers } from "../../hooks/usePlayers/usePlayers";
import { Title, Container, List, Item } from "./style";

export default function Teste() {
  const { players, isLoading } = usePlayers();

  if (isLoading) {
    return <p>Carregando jogadores...</p>;
  }

  return (
    <Container>
      <Title>Jogadores do Corinthians</Title>

      <List>
        {players.map((player) => (
          <Item key={player.id}>
            {player.name}
          </Item>
        ))}
      </List>
    </Container>
  );
}
