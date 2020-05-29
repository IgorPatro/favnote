import React from 'react';
import Button from 'components/Button/Button';
import { withKnobs, select } from '@storybook/addon-knobs';

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs],
};

export const asDynamicVariables = () => {
  const label = 'Colors';
  const options = {
    Primary: 'Yeah babe',
    Secondary: 'It is working!',
  };
  const defaultValue = 'Yeah babe';
  const groupId = 'GROUP-ID1';

  const value = select(label, options, defaultValue, groupId);

  return <Button>{value}</Button>;
};

export const SecondaryText = () => <Button secondary>Hello Igor</Button>;
