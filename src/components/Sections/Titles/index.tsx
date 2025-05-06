import { useTitles } from "../../../hooks/useTitles/useTitles";
import {
  Container,
  Title,
  List,
  Card,
  TrophyImage,
  TrophyName,
  BackButton,
} from "./style";

export default function Titles() {
  const { titles, isLoading } = useTitles();

  if (isLoading) return <Container><p>Carregando Títulos...</p></Container>;

  return (
    <Container>
      <BackButton to="/">Voltar para Home</BackButton>
      <Title>TÍTULOS</Title>
      <List>
        {titles.map((title) => (
          <Card key={title.id}>
            <TrophyImage src={title.img} alt={title.name} />
            <TrophyName>{title.name}</TrophyName>
          </Card>
        ))}
      </List>
    </Container>
  );
}
