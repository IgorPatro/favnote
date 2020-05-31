import React from 'react';
import Card from 'components/molecules/Card/Card';

export default {
  title: 'Card',
  component: Card,
};

export const NoteCardStorie = () => <Card cardType="note" />;
export const TwitterCardStorie = () => <Card cardType="twitter" />;
export const ArticleCardStorie = () => <Card cardType="article" />;
