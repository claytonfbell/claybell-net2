import { darken, ThemeProvider } from "@mui/material"
import { useDarkMode } from "material-ui-pack"
import React from "react"

const BLUE = "#27aae1"

export function SiteTheme(props: { children: React.ReactNode }) {
  const { createMuiThemeWithDarkMode, darkMode } = useDarkMode()
  const theme = createMuiThemeWithDarkMode({
    typography: {
      h1: {
        fontSize: 36,
      },
    },
    palette: {
      primary: {
        main: darkMode ? BLUE : darken(BLUE, 0.25),
      },
      ...(!darkMode
        ? {
            background: {
              default: "#cdcdcd",
            },
          }
        : {}),
    },
    components: {
      MuiTooltip: {
        defaultProps: { arrow: true },
        styleOverrides: {
          tooltip: {
            fontSize: 18,
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
          },
        },
      },
    },
  })

  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
}
