import styled from "styled-components";

export const SocialStyle = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;

  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
`;

export const LinkSocial = styled.a`
  @media (hover: hover) {
    &:hover {
      opacity: 0.7;
      transition: opacity 1s;
    }
  }

  &:focus {
    opacity: 0.7;
  }

  &:active {
    opacity: 0.5;
  }
`;
