import EmailIcon from "@mui/icons-material/Email"
import GitHub from "@mui/icons-material/GitHub"
import PhoneIcon from "@mui/icons-material/Phone"
import TwitterIcon from "@mui/icons-material/Twitter"
import {
  Box,
  Button,
  Container,
  CssBaseline,
  Divider,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material"
import type { MetaFunction } from "remix"
import Logo from "~/Logo"

export let meta: MetaFunction = () => {
  return {
    title: "Clayton Bell - Software Engineer",
    description: "Software Engineer",
  }
}

export default function Index() {
  const twitter = "https://twitter.com/claytonfbell"
  const gitHub = "https://github.com/claytonfbell"

  const theme = useTheme()
  const isXsDown = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <>
      <Container sx={{ marginTop: 2 }}>
        <CssBaseline />

        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Logo width={isXsDown ? 150 : 250} />
          </Grid>
          {isXsDown ? (
            <Grid item>
              <IconButton href={twitter} color="primary">
                <TwitterIcon />
              </IconButton>
              <IconButton href={gitHub} color="primary">
                <GitHub />
              </IconButton>
            </Grid>
          ) : null}
        </Grid>
        <Grid container spacing={0}>
          {isXsDown ? (
            <>
              <Grid item xs={12}>
                <Button
                  variant="text"
                  href="tel:1-971-285-5666"
                  startIcon={<PhoneIcon />}
                >
                  (971) 285-5666
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="text"
                  href="mailto: claytonfbell@gmail.com"
                  startIcon={<EmailIcon />}
                >
                  claytonfbell@gmail.com
                </Button>
              </Grid>
            </>
          ) : (
            <>
              <Button
                sx={{ marginRight: !isXsDown ? 1 : undefined }}
                variant="text"
                href="tel:1-971-285-5666"
                startIcon={!isXsDown ? <PhoneIcon /> : undefined}
              >
                (971) 285-5666
              </Button>
              <Button
                sx={{ marginRight: !isXsDown ? 1 : undefined }}
                variant="text"
                href="mailto: claytonfbell@gmail.com"
                startIcon={!isXsDown ? <EmailIcon /> : undefined}
              >
                claytonfbell@gmail.com
              </Button>
              <Button
                sx={{ marginRight: 1 }}
                variant="text"
                href={twitter}
                startIcon={<TwitterIcon />}
              >
                @claytonfbell
              </Button>
              <Button
                sx={{ marginRight: 1 }}
                variant="text"
                href={gitHub}
                startIcon={<GitHub />}
              >
                github.com/claytonfbell
              </Button>
            </>
          )}
        </Grid>
        <Divider />

        <Box marginTop={3}>
          <Typography
            sx={{
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            Front-End
          </Typography>
        </Box>

        {/* <Paper sx={{ padding: 2 }}>Hello World</Paper> */}
      </Container>
    </>
  )
}
