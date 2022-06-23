import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: {
      default: string;
    };
    colors: {
      primary: string;
      secondary: string;
      background: string;
    };
  }
}
