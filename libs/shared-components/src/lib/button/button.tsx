import React from 'react';

import { Container } from './button.styles';

export interface ButtonProps {
  children: React.ReactNode;
}

export function Button({ children }: ButtonProps) {
  return <Container>{children}</Container>;
}

export default Button;
