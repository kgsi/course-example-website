import { Button } from './Button'

export default {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

export const Primary = {
  args: {
    type: 'primary',
    size: 'm',
    children: 'Button',
  },
}

export const Outline = {
  args: {
    type: 'outline',
    size: 'm',
    children: 'Button',
  },
}
