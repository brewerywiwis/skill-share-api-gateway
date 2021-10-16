// Original file: src/protos/video.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { VideoUploadRequest as _video_VideoUploadRequest, VideoUploadRequest__Output as _video_VideoUploadRequest__Output } from '../video/VideoUploadRequest';
import type { VideoUploadResponse as _video_VideoUploadResponse, VideoUploadResponse__Output as _video_VideoUploadResponse__Output } from '../video/VideoUploadResponse';

export interface VideoServiceClient extends grpc.Client {
  UploadVideo(metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _video_VideoUploadResponse__Output) => void): grpc.ClientWritableStream<_video_VideoUploadRequest>;
  UploadVideo(metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _video_VideoUploadResponse__Output) => void): grpc.ClientWritableStream<_video_VideoUploadRequest>;
  UploadVideo(options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _video_VideoUploadResponse__Output) => void): grpc.ClientWritableStream<_video_VideoUploadRequest>;
  UploadVideo(callback: (error?: grpc.ServiceError, result?: _video_VideoUploadResponse__Output) => void): grpc.ClientWritableStream<_video_VideoUploadRequest>;
  uploadVideo(metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _video_VideoUploadResponse__Output) => void): grpc.ClientWritableStream<_video_VideoUploadRequest>;
  uploadVideo(metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _video_VideoUploadResponse__Output) => void): grpc.ClientWritableStream<_video_VideoUploadRequest>;
  uploadVideo(options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _video_VideoUploadResponse__Output) => void): grpc.ClientWritableStream<_video_VideoUploadRequest>;
  uploadVideo(callback: (error?: grpc.ServiceError, result?: _video_VideoUploadResponse__Output) => void): grpc.ClientWritableStream<_video_VideoUploadRequest>;
  
}

export interface VideoServiceHandlers extends grpc.UntypedServiceImplementation {
  UploadVideo: grpc.handleClientStreamingCall<_video_VideoUploadRequest__Output, _video_VideoUploadResponse>;
  
}

export interface VideoServiceDefinition extends grpc.ServiceDefinition {
  UploadVideo: MethodDefinition<_video_VideoUploadRequest, _video_VideoUploadResponse, _video_VideoUploadRequest__Output, _video_VideoUploadResponse__Output>
}
