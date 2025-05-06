import { usePlayers } from "../../../hooks/usePlayers/usePlayers";
import { Container, Title, List, Card, PlayerImage, PlayerName, PlayerPosition, BackButton } from "./style";

export default function Players() {
  const { players, isLoading } = usePlayers();

  if (isLoading) return <Container><p>Carregando jogadores...</p></Container>;

  return (
    <Container>
      <BackButton to="/">Voltar para Home</BackButton>
      <Title>JOGADORES</Title>
      <List>
        {players.map((player) => (
          <Card key={player.id}>
            <PlayerImage src={player.image} alt={player.name} />
            <PlayerName>{player.name}</PlayerName>
            <PlayerPosition>{player.position}</PlayerPosition>
          </Card>
        ))}
      </List>
    </Container>
  );
}
