import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@storybook/react/demo';
import NumberSpinner from '../components/NumberSpinner'
import LightsOnGame from '../components/LightsOnGame'

storiesOf('NumberSpinner', module)
  .add('with no props', () => (
    <NumberSpinner/>
  ))
  .add('with emoji', () => (
    <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  )); 

storiesOf('LightsOnGame', module)
  .add('with no props', () => (
    <LightsOnGame/>
  ))
  .add('with size 4', () => (
    <LightsOnGame size={4} />
  ))
  .add('with size 5', () => (
    <LightsOnGame size={5} />
  ))
