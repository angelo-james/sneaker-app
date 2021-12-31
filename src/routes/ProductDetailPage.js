import styled from "styled-components";
import { mockData } from "../constant/mockData";
import { useParams } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 200px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Image = styled.img`
  width: 750px;
  height: 536px;

  @media (max-width: 768px) {
    width: 400px;
    height: 300px;
  }
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 5px;
  min-width: 400px;
  min-height: 350px;
  padding: 20px 40px;

  @media (max-width: 768px) {
    margin-top: 40px;
    min-width: 300px;
    min-height: 200px;
  }
`;

const Type = styled.p`
  text-align: center;
  font-size: 12px;
  text-transform: uppercase;
`;

const Name = styled.p`
  text-align: center;
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const Detail = styled.p`
  text-align: left;
  font-size: 10px;
  text-transform: uppercase;
  width: 300px;
`;

const Price = styled.p`
  text-align: center;
  font-size: 18px;
  color: red;
  text-transform: uppercase;
  margin-top: 40px;
`;

const Color = styled.p`
  text-align: center;
  font-size: 12px;
  color: #000;
  text-transform: uppercase;
`;

const StyledButton = styled.button`
  display: inline-block;
  background: #e7e7e7;
  color: #000;
  min-width: 135px;
  padding: 15px 10px;
  font-size: 15px;
  font-weight: 500;
  line-height: 14px;
  border: none;
  border-radius: 5px;
  letter-spacing: 1px;
  cursor: pointer;
  text-transform: uppercase;
  &:hover {
    background: #ccc;
  }
`;

export default function ProductDetailPage() {
  let { id } = useParams();

  return (
    <>
      {mockData.map((md) =>
        md.id === +id ? (
          <Container key={id}>
            <Image src={md.image} alt="jordan 1"></Image>
            <DetailContainer>
              <Type>{md.type}</Type>
              <Name>{md.name}</Name>
              <Detail>{md.detail}</Detail>
              <Price>{md.price}</Price>
              <Color>{md.color}</Color>
              <StyledButton>Add to Cart</StyledButton>
            </DetailContainer>
          </Container>
        ) : (
          false
        )
      )}
    </>
  );
}
