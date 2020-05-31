import React from 'react';
import styled from 'styled-components';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import bulbIcon from 'assets/icons/bulb.svg';
import logoutIcon from 'assets/icons/logout.svg';
import magnifierIcon from 'assets/icons/magnifier.svg';
import penIcon from 'assets/icons/pen.svg';
import plusIcon from 'assets/icons/plus.svg';
import twitterIcon from 'assets/icons/twitter.svg';

const YellowBackgroud = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  background: ${({ theme }) => theme.note};
`;

export default {
  title: 'ButtonIcon',
  component: ButtonIcon,
};

export const ButtonIconBulb = () => (
  <YellowBackgroud>
    <ButtonIcon icon={bulbIcon} />
  </YellowBackgroud>
);
export const ButtonIconBulbActive = () => (
  <YellowBackgroud>
    <ButtonIcon active icon={bulbIcon} />
  </YellowBackgroud>
);
export const ButtonIconLogout = () => (
  <YellowBackgroud>
    <ButtonIcon icon={logoutIcon} />
  </YellowBackgroud>
);
export const ButtonIconMagnifier = () => (
  <YellowBackgroud>
    <ButtonIcon icon={magnifierIcon} />
  </YellowBackgroud>
);
export const ButtonIconPen = () => (
  <YellowBackgroud>
    <ButtonIcon icon={penIcon} />
  </YellowBackgroud>
);
export const ButtonIconPlus = () => (
  <YellowBackgroud>
    <ButtonIcon icon={plusIcon} />
  </YellowBackgroud>
);
export const ButtonIconTwitter = () => (
  <YellowBackgroud>
    <ButtonIcon icon={twitterIcon} />
  </YellowBackgroud>
);
