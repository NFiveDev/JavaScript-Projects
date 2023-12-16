'use client';

import ReactPlayer from 'react-player';
import { Box, styled } from '@mui/material';

type VideoPlayerProps = {
    url: string,
    
};

// const VideoPlayerWrapper = styled(() => {

// })

export function VideoPlayer(props: VideoPlayerProps) {
  return (
    <Box>
      <ReactPlayer url={props.url} width={800} height={400} />
    </Box>
  );
}
