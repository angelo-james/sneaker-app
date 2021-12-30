import styled from "styled-components";
import Card from "./Card";
import { mockData } from "../constant/mockData";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 40px 40px;
  justify-content: center;
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

export default function CardList() {
  return (
    <Container>
      <CardsContainer>
        {mockData.map((md) => (
          <Card
            key={md.id}
            id={md.id}
            type={md.type}
            name={md.name}
            image={md.image}
          />
        ))}
      </CardsContainer>
    </Container>
  );
}
