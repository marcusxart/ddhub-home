import styled from "styled-components";

export const PrimaryBtn = styled.button`
  background: rgb(254, 0, 2);
  background: linear-gradient(
    90deg,
    rgba(254, 0, 2, 1) 0%,
    rgba(255, 170, 119, 1) 100%
  );
  color: white;
  border-radius: 5px;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
`;

export const SecondaryBtn = styled.button`
  background: transparent;
  outline: 0;
  border: 1px solid #101010;
  border-radius: 5px;
`;
