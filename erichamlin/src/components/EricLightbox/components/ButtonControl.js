import styled from "styled-components";

export default styled.button`
  z-index: 10;
  background: none;
  border-style: none;
  font-size: 50px;
  cursor: pointer;
  padding: 0;
  margin: 0;
  color: #fff;
  transition: color 0.2s linear;
  :hover {
    color: #feffc1;
  }
  :focus {
    outline: none;
    color: #fff;
  }
`;
