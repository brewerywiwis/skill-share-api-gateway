// Original file: src/protos/video.proto

import type { VideoInfo as _video_VideoInfo, VideoInfo__Output as _video_VideoInfo__Output } from '../video/VideoInfo';

export interface VideoUploadRequest {
  'info'?: (_video_VideoInfo | null);
  'buffer'?: (Buffer | Uint8Array | string);
  'data'?: "info"|"buffer";
}

export interface VideoUploadRequest__Output {
  'info'?: (_video_VideoInfo__Output);
  'buffer'?: (Buffer);
}
