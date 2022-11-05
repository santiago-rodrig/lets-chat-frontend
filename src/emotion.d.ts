import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string
      surface1: string
      surface2: string
      text1: string
    }
  }
}