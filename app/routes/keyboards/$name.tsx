import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
// @ts-ignore
import { Image, Transformation } from "cloudinary-react"
import ReactMarkdown from "react-markdown"
import { useKeyboard } from "../keyboards"

export default function Keyboard() {
  const keyboard = useKeyboard()

  return (
    <>
      <Typography variant="h1">{keyboard?.name}</Typography>
      {keyboard?.notes !== undefined ? (
        <Typography sx={{ marginTop: 2 }}>
          <ReactMarkdown>{keyboard?.notes}</ReactMarkdown>
        </Typography>
      ) : null}
      {(keyboard?.photos || []).map((photo) => (
        <Box sx={{ marginTop: 2 }}>
          <Image
            key={photo.fileName}
            publicId={`claybell-net/keyboards/${photo.fileName}`}
            width="100%"
          >
            <Transformation width={1600} crop="scale" />
          </Image>
        </Box>
      ))}
    </>
  )
}
