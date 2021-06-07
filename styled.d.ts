import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      iceWhite: string
      grey: string
      greyBlue: string
      indigo: string
      darkGrey: string
    }

    fontSizes: {
        title: string
        heading: string
        highlight: string
        normal: string
        small: string
    }

    screenSizes: {
      phoneOnly: string
      tabletPortraitPlus: string
      tabletLandscapePlus: string
      desktopPlus: string
    }
  }
}