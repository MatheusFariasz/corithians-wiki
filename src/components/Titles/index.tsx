import { useTitles } from "../../hooks/useTitles/useTitles";
import { Title, Container, List, Item, TrophyImage } from "./style";

export default function Titles() {
  const { titles, isLoading } = useTitles();

  if (isLoading) {
    return <p>Carregando Titulos...</p>;
  }

  return (
    <Container>
      <Title>Titulos do Corinthians</Title>

      <List>
        {titles.map((title) => (
          <Item key={title.id}>
            {title.name}
            <TrophyImage src={title.img} />
          </Item>
        ))}
      </List>
    </Container>
  );
}
