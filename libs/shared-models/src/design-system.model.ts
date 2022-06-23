import { DefaultTheme } from 'styled-components';

export interface ITheme {
  fonts: {
   name: string,
   fontSize: string, 
  },
  colors: {
    primary: string;
    secondary: string;
    background: string;
  };
}

export const theme: DefaultTheme = {
  fonts: {
    default: 'Roboto',
  },
  colors: {
    primary: '#ffcf54',
    secondary: '#ff7433',
    background: '#1b1724',
    title: '#ecd8bd',
    text: '#fff',
    danger: '#ee5749',
    warning: '#fbc654',
    info: '#6abfed',
    success: '#03996e'
  },
};

