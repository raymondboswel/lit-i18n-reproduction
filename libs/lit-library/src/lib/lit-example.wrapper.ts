import React from 'react';
import { createComponent } from '@lit/react';
import { LitExample } from './lit-example';

export const LitExampleComponent = createComponent({
  tagName: 'lit-example',
  elementClass: LitExample,
  react: React,
  events: {},
});
