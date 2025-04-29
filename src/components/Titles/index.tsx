//hooks
import { useTitles } from "../../hooks/useTitles/useTitles";

//styles
import { Title, Container, List, TrophyImage } from "./style";

//components
import { CardItem } from "../UI/Card/index";

export default function Titles() {
  const { titles, isLoading } = useTitles();

  if (isLoading) return <p>Carregando Títulos...</p>;

  return (
    <Container>
      <Title>Títulos do Corinthians</Title>
      <List>
        {titles.map((title) => (
          <CardItem key={title.id}>
              <Title>{title.name}</Title>
              <TrophyImage src={title.img} />
          </CardItem>
        ))}
      </List>
    </Container>
  );
}
