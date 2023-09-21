import { css } from 'styled-components';

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 380px){
      ${props}
    }
  `;
};
export const table = (props) => {
  return css`
    @media only screen and (min-width: 600px) {
      ${props}
    }
  `;
};