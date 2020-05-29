import styled, { css } from 'styled-components';

const Button = styled.button`
  /* Warunek tak */
  background-color: ${({ secondary }) => (secondary ? '#E6E6E6' : '#FFD82B')};
  height: 47px;
  /* Przekazanie wartości w propsie */
  width: ${({ width }) => width || '220px'};
  border: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;

  /* Lub warunek tak */
  ${({ secondary }) =>
    secondary &&
    css`
      width: 105px;
      height: 30px;
      font-size: 10px;
    `}
`;

export default Button;
