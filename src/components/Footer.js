import styled from "styled-components";

const FooterContainer = styled.div`
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const FooterText = styled.p`
  padding-top: 20px;
  text-transform: uppercase;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterText>Made with🖤 by AJA</FooterText>
    </FooterContainer>
  );
}
