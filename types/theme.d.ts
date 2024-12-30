import "@emotion/react"; // Import Emotion's default theme type

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      background: {
        screen: string;
        card: string;
      };
      text: {
        primary: string;
        secondary: string;
      };
      primary: string;
      accent: string;
    };
    spacing: {
      small: number;
      medium: number;
      large: number;
    };
    typography: {
      fontFamily: string;
      fontSize: {
        small: number;
        medium: number;
        large: number;
      };
    };
  }
}