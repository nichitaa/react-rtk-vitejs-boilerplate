import { ButtonProps, Button as AntdButton } from 'antd';
import styled from 'styled-components';
import React from 'react';

// define additional prop attributes for the component
export interface AppButtonProps extends ButtonProps {
  bg?: string;
}

// style the components in dependent of the additional props
export const Button: React.FunctionComponent<AppButtonProps> = styled<AppButtonProps>(
  AntdButton
)`
  background: ${(p: AppButtonProps) => (p.bg ? p.bg : '#fff')};
`;
