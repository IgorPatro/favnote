import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.note};
  height: 47px;
  width: 220px;
  border: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: ${({ theme }) => theme.grey200};
      width: 105px;
      height: 30px;
      font-size: 10px;
    `}
`;

export default Button;
