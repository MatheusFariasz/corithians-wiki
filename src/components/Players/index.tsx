//hooks
import { usePlayers } from "../../hooks/usePlayers/usePlayers";

//styles
import { Title, Container, List } from "./style";

//components
import { CardItem } from "../UI/Card/index"

export default function Teste() {
  const { players, isLoading } = usePlayers();

  if (isLoading) return <p>Carregando jogadores...</p>;

  return (
    <Container>
      <Title>Jogadores do Corinthians</Title>
      <List>
        {players.map((player) => (
          <CardItem key={player.id}><Title>{player.name}</Title></CardItem>
        ))}
      </List>
    </Container>
  );
}