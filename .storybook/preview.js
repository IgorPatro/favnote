import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/theme/mainTheme';
import GlobalStyle from '../src/theme/GlobalStyle';

addDecorator((story) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle /> {story()}
  </ThemeProvider>
));
