import styled from "styled-components";

export const HeaderContainer = styled.div`
  background: #fff;
  padding: 10px;
  margin-top: 0;
  border: 1px solid #1d1d1d;
  display: flex;
  align-items: center;
  border-radius: 5px;
`;
export const Logo = styled.div``;
export const Options = styled.div`
  display: flex;
  gap: 20px;
  margin-left: auto;
  align-items: center;

  @media screen and (max-width: 830px) {
    margin: 0 auto;
  }
`;
export const Option = styled.a`
  font-family: typo;
  font-weight: 600;
  text-transform: capitalize;
  letter-spacing: 1px;
  font-size: 18px;
  color: #000;
`;
