import React from 'react';
import Button from './index';
import Stack from '../Stack';

export default {
  title: 'Components/Button',
  component: Button
};

export const button = () => {
  return <Button>BUTTON</Button>;
};

button.story = {
  name: 'Default'
};

export const BasicButton = () => {
  return (
    <Stack>
      <Button variant='contained'>CONTAINED</Button>
      <Button variant='outlined'>OUTLINED</Button>
      <Button variant='text'>TEXT</Button>
    </Stack>
  );
};

BasicButton.storyName = 'variant buttons';

export const SizeButton = () => {
  return (
    <Stack>
      <Button variant='contained' size='small'>
        SMALL
      </Button>
      <Button variant='contained' size='medium'>
        MEDIUM
      </Button>
      <Button variant='contained' size='large'>
        LARGE
      </Button>
      <Button variant='contained' size='fullWidth'>
        FULLWIDTH
      </Button>
    </Stack>
  );
};

SizeButton.storyName = 'size buttons';

export const DisabledButton = () => {
  return (
    <Stack>
      <Button variant='contained' disabled>
        CONTAINED
      </Button>
      <Button variant='outlined' disabled>
        OUTLINED
      </Button>
      <Button variant='text' disabled>
        TEXT
      </Button>
    </Stack>
  );
};

DisabledButton.storyName = 'disabled buttons';
