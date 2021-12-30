import styled from "styled-components";
import { Link } from "react-router-dom";

const List = styled.div`
  display: flex;
  justify-content: center;
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
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  color: #000;

  &:hover {
    color: #ccc;
  }
`;

export default function SubNavbar() {
  return (
    <List>
      <ListItem as={Link} to="/">
        Stock
      </ListItem>
      {/* <ListItem>Instock</ListItem>
      <ListItem>Upcoming</ListItem> */}
    </List>
  );
}
