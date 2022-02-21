import { css } from "styled-components";

export const Break960 = (props) => {
  return css`
    @media only screen and (max-width: 960px) {
      ${props}
    }
  `;
};

export const Break820 = (props) => {
  return css`
    @media only screen and (max-width: 820px) {
      ${props}
    }
  `;
};

