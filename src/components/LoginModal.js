import styled from "styled-components";
import { useDispatch } from "react-redux";
import closeIcon from "../assets/images/close.svg";
import { close } from "../features/loginModal/loginModalSlice";

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

const ModalBox = styled.div`
  margin: 10% auto;
  width: 400px;
  background: #fff;
  color: #333;
  position: relative;
`;

const ModalBody = styled.div`
  padding: 50px;
`;

const ModalFooter = styled.div`
  background: #f7f7f9;
  color: #333;
  padding: 20px 0;
  border-top: #eee solid 1px;
  text-align: center;
`;

const FormControl = styled.div`
  margin: 20px 0;
`;

const FromLabel = styled.label`
  font-size: 12px;
  display: block;
  text-transform: uppercase;
`;

const FormInput = styled.input`
  width: 100%;
  border: 2px #ccc solid;
  border-radius: 5px;
  height: 50px;
  padding: 5px;
`;

const CloseIcon = styled.img`
  cursor: pointer;
  height: 12px;
  width: 12px;
  position: absolute;
  top: 20px;
  right: 20px;
`;

const Button = styled.button`
  display: inline-block;
  background: #000;
  color: #fff;
  min-width: 135px;
  padding: 20px 32px;
  font-size: 15px;
  font-weight: 600;
  line-height: 14px;
  border: none;
  border-radius: 5px;
  letter-spacing: 1px;
  cursor: pointer;
  text-transform: uppercase;
  width: 100%;
  margin-top: 30px;

  &:hover {
    color: #000;
    background: #ccc;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: steelblue;

  &:hover {
    color: #ccc;
  }
`;

export default function LoginModal() {
  const dispatch = useDispatch();

  return (
    <ModalContainer>
      <ModalBox>
        <ModalBody>
          <h2>Log In</h2>
          <form>
            <FormControl>
              <FromLabel htmlFor="email">Email</FromLabel>
              <FormInput type="email" id="email" />
            </FormControl>
            <FormControl>
              <FromLabel htmlFor="password">Password</FromLabel>
              <FormInput type="password" id="password" />
            </FormControl>
            <p>
              <Link href="#">Forgot your email or password</Link>
            </p>
            <Button>Log In</Button>
          </form>
        </ModalBody>
        <ModalFooter>
          <p>
            Don't have an account? <Link href="#">Join Now</Link>
          </p>
        </ModalFooter>
        <CloseIcon
          onClick={() => dispatch(close())}
          src={closeIcon}
          alt="close"
        />
      </ModalBox>
    </ModalContainer>
  );
}
