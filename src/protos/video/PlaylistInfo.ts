// Original file: src/protos/video.proto

import type { VideoUploaded as _video_VideoUploaded, VideoUploaded__Output as _video_VideoUploaded__Output } from '../video/VideoUploaded';

export interface PlaylistInfo {
  'playlistId'?: (string);
  'title'?: (string);
  'description'?: (string);
  'videoList'?: (_video_VideoUploaded)[];
}

export interface PlaylistInfo__Output {
  'playlistId'?: (string);
  'title'?: (string);
  'description'?: (string);
  'videoList'?: (_video_VideoUploaded__Output)[];
}
