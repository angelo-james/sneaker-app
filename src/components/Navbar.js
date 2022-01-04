import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { open } from "../features/loginModal/loginModalSlice";

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

const CartBadge = styled.span`
  font-size: 10px;
  text-align: center;
  color: #fff;
  height: 2px;
  background: red;
  border-radius: 10px;
  padding: 3px;
`;

export default function Navbar() {
  const dispatch = useDispatch();
  const cartItemCount = useSelector((state) => state.cart.count);

  return (
    <List>
      <ListItem as={Link} to="/">
        Sneaker
      </ListItem>
      <div>
        <ListItem onClick={() => dispatch(open())}>Join / Login</ListItem>
        <ListItem>
          Cart{" "}
          {cartItemCount > 0 ? <CartBadge>{cartItemCount}</CartBadge> : false}
        </ListItem>
      </div>
    </List>
  );
}
