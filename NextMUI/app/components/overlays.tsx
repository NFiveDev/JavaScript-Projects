import { Box } from "@mui/material"

// Place inside container but do not wrap content with it...

export function ImageOverlay(props: {color: string, borderRadius?: string, position?: 'absolute'}) {
    return (
        <Box
            sx={{
              position: props.position,
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: props.color,
              borderRadius: props.borderRadius
            }}
          ></Box>
    )
}