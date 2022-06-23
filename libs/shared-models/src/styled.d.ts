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
      title: string,
      text: string,
      danger: string,
      warning: string,
      info: string,
      success: string
    };
  }
}
