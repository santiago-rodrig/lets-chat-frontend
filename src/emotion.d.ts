import "@emotion/react";

declare module "@emotion/react" {
  interface ColorDetails {
    surface: string;
    text: string;
  }

  export interface Theme {
    colors: {
      primary: ColorDetails;
      dark: ColorDetails;
      darker: ColorDetails;
      divider: string;
      paper: ColorDetails;
    };
  }
}
