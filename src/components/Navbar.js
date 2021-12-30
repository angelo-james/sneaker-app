import styled from "styled-components";
import { Link } from "react-router-dom";

const List = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 40px;
  width: 100%;
  border-bottom: 1px solid #ccc;
`;

const ListItem = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 10px;
  font-size: 10px;
  text-decoration: none;
  color: #000;
`;

export default function Navbar() {
  return (
    <List>
      <ListItem as={Link} to="/">
        Sneaker
      </ListItem>
      <div>
        <ListItem>Join / Login</ListItem>
        <ListItem>Cart</ListItem>
      </div>
    </List>
  );
}
