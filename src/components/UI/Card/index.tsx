//styles
import { Card } from "./style";

//types
import { CardItemProps } from "./types";

export function CardItem({ children }: CardItemProps) {
  return <Card>{children}</Card>;
}