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
    name: '',
    fontSize: '1.2rem'
  },
  colors: {
    primary: '#f00',
    secondary: '#0f0',
    background: '#00f',
  },
};

