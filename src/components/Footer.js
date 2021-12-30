import styled from "styled-components";

const FooterContainer = styled.div`
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

export default function Footer() {
  return (
    <FooterContainer class="footer">
      <h4 style={{ paddingTop: "20px" }}>Made with🖤 by AJA</h4>
    </FooterContainer>
  );
}
