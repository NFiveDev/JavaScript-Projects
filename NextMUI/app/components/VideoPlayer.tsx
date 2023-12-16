'use client';

import ReactPlayer from 'react-player';
import { Box, styled } from '@mui/material';

type VideoPlayerProps = {
  url: string;
};

const VideoPlayerWrapper = styled(Box)({
  paddingTop: 2,
  paddingBottom: 2,
});

export function VideoPlayer(props: VideoPlayerProps) {
  return (
    <ReactPlayer
      wrapper={VideoPlayerWrapper}
      url={props.url}
      width={800}
      height={400}
    />
  );
}
