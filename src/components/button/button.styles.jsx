import styled from "styled-components";

export const ButtonContainer = styled.div`
  cursor: pointer;
  width: fit-content;
  letter-spacing: 1px;
  background: #fa9a08;
  color: #000;
  padding: 7px 30px;
  // border: 1px solid #1d1d1d;
  border-radius: 5px;
  font-family: typo;
  font-weight: 600;
  text-transform: capitalize;
  transition: all .9s ease-in-out;
  letter-spacing: 1px;
  font-size: 18px;

  &:hover {
    background-color: #444946;
    color: #fff;
    padding: 7px 30px;
    transform: scale(1.0);
  }
`;
