import styled from "styled-components";
import { Link } from "react-router-dom";

const CardContainer = styled.div`
  height: 600px;
  width: 450px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 20px;
  background: url(${(props) => props.image}) no-repeat center center / cover;

  @media (max-width: 768px) {
    height: 380px;
    width: 380px;
  }
`;

const CardGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #ccc;
  opacity: 0;

  &:hover {
    cursor: pointer;
    opacity: 0.2;
  }
`;

const CardText = styled.div`
  position: absolute;
`;

const CardTitle = styled.p`
  font-size: 12px;
  text-transform: uppercase;
  color: #000;
`;
const CardSubText = styled.p`
  font-size: 14px;
  text-transform: uppercase;
  color: #000;
`;

export default function Card({ id, type, name, image }) {
  return (
    <CardContainer as={Link} to={`product-detail/${id}`} image={image}>
      <CardGradient />
      <CardText>
        <CardTitle>{type}</CardTitle>
        <CardSubText>{name}</CardSubText>
      </CardText>
    </CardContainer>
  );
}
