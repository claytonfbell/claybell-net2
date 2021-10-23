import {
  Box,
  Link as MUILink,
  Paper,
  Typography,
  useTheme,
} from "@mui/material"
import { MetaFunction } from "remix"
import { employment } from "~/employment"
import TechItem from "~/TechItem"
import { technologies } from "~/technologies"

export let meta: MetaFunction = () => {
  return {
    title: "Clayton Bell - Software Engineer",
    description: "Software Engineer",
  }
}

export default function Resume() {
  const theme = useTheme()

  return (
    <>
      <Box>
        <Typography sx={{ fontWeight: "bold", fontSize: 42 }}>
          Clayton Bell
        </Typography>

        <Typography>Software Engineer • Portland Oregon</Typography>

        <Typography>Experienced, Productive, Creative</Typography>
      </Box>

      <Paper sx={{ padding: 2, marginTop: 6 }}>
        <Box marginTop={3}>
          <Typography
            sx={{
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            Front-End
          </Typography>
          {technologies
            .filter((x) => x.group === "Front-End")
            .map((x) => (
              <TechItem key={x.name} technology={x} />
            ))}
        </Box>

        <Box marginTop={3}>
          <Typography
            sx={{
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            Backend
          </Typography>
          {technologies
            .filter((x) => x.group === "Backend")
            .map((x) => (
              <TechItem key={x.name} technology={x} />
            ))}
        </Box>

        <Box marginTop={3}>
          <Typography
            sx={{
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          >
            Dev Ops
          </Typography>
          {technologies
            .filter((x) => x.group === "DevOps")
            .map((x) => (
              <TechItem key={x.name} technology={x} />
            ))}
        </Box>
      </Paper>

      {employment.reverse().map((e) => (
        <Box key={e.employer} sx={{ marginTop: 4 }}>
          <Typography variant="h5" component="h2">
            {e.employer}
          </Typography>
          <Typography marginTop={1}>
            <strong>
              {e.position} {e.range}
            </strong>
          </Typography>
          <Typography marginTop={1}>{e.text}</Typography>
          {e.url !== undefined && (
            <MUILink target="_blank" href={e.url}>
              {e.url.replace(/^https?:\/\//g, "")}
            </MUILink>
          )}
        </Box>
      ))}
    </>
  )
}
