import React from 'react';
import { Badge } from './Badge';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    label: 'Novo',
    color: 'primary',
  },
};

export const Success: Story = {
  args: {
    label: 'Concluído',
    color: 'success',
  },
};

export const Danger: Story = {
  args: {
    label: 'Erro',
    color: 'danger',
  },
};

export const Warning: Story = {
  args: {
    label: 'Atenção',
    color: 'warning',
  },
};

export const Neutral: Story = {
  args: {
    label: 'Pendente',
    color: 'neutral',
  },
};
