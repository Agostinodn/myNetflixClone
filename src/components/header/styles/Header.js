import styled from "styled-components/macro";
import {
  Link
} from "react-router-dom";

export const Background = styled.div `
  display: flex;
  flex-direction: column;
  background: url("../images/misc/home-bg.jpg") top left / cover no-repeat;
  min-height: 800px;

  @media (max-width: 1000px) {
    min-height: none;
  }
`;

export const Container = styled.div `
  display: flex;
  margin: 0 56px;
  height: 100px;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
  }

  @media (max-width: 1000px) {
    margin: 0 30px;
  }
`;

export const Logo = styled.img `
  height: 36px;
  width: 134px;
  margin-right: 40px;

  @media (min-width: 1449px) {
    height: 45px;
    width: 167px;
  }
`;


export const ButtonLink = styled(Link)
`
  display: block;
  background-color: #e50914;
  width: 84px;
  height: fit-content;
  color: #fff;
  bord: 0;
  font-size: 15px;
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoraton: none;
  box-sizing: border-box;

  &:hover {
    background-color: #f40612;
  }
`;