import styled from "styled-components";
import { Link } from "react-router-dom";
export const TopNav = styled.nav`
  background-color: #efefef;
  width: ${({ click }) => (click ? "100%" : "82%")};
  float: right;
  color: #000;
  // border-bottom: 1px solid white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding-right: 2rem;
  padding-left: 2rem;
  cursor: pointer;
`;
export const MenuIcon = styled.div``;

export const MenuItem = styled.ul`
  display: flex;
  // flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  p {
    // text-align: center;
    font-family: Dosis, sans-serif;
    font-weight: 600;
    font-size: 0.85rem;
    text-transform: capitalize;
    color: #333a56;
  }
`;
export const UserName = styled.div`
  display: flex;
  flex-direction: column;
  color: red;
  span {
    margin-top: 0.3rem;
    // text-align: center;

    font-size: 0.7rem;
    // text-transform: capitalize;
    color: #333a56;
  }
`;
export const ItemLinks = styled(Link)`
  margin-right: 1.5rem;
  text-decoration: none;
  color: ${(props) => props.color};
  font-size: 1.4rem;
`;
