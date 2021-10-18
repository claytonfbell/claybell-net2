import { createTheme, ThemeProvider } from "@mui/material"
import React from "react"

export function SiteTheme(props: { children: React.ReactNode }) {
  //   const { createMuiThemeWithDarkMode } = useDarkMode()
  const theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#27aae1",
      },
      //   background: {
      //     default: "#dddddd",
      //   },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
          },
        },
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      {props.children}

      {/* <DarkModeToggle /> */}
    </ThemeProvider>
  )
}
