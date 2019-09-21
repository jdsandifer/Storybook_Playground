import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@storybook/react/demo';
import NumberSpinner from '../components/NumberSpinner'

storiesOf('NumberSpinner', module)
  .add('with no props', () => (
    <NumberSpinner/>
  ))
  .add('with emoji', () => (
    <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  )); 
