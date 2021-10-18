// Original file: src/protos/video.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Empty as _video_Empty, Empty__Output as _video_Empty__Output } from '../video/Empty';
import type { NumberRequest as _video_NumberRequest, NumberRequest__Output as _video_NumberRequest__Output } from '../video/NumberRequest';
import type { VideoCriteriaRequest as _video_VideoCriteriaRequest, VideoCriteriaRequest__Output as _video_VideoCriteriaRequest__Output } from '../video/VideoCriteriaRequest';
import type { VideoUploadRequest as _video_VideoUploadRequest, VideoUploadRequest__Output as _video_VideoUploadRequest__Output } from '../video/VideoUploadRequest';
import type { VideoUploadResponse as _video_VideoUploadResponse, VideoUploadResponse__Output as _video_VideoUploadResponse__Output } from '../video/VideoUploadResponse';
import type { VideoUploadedResponse as _video_VideoUploadedResponse, VideoUploadedResponse__Output as _video_VideoUploadedResponse__Output } from '../video/VideoUploadedResponse';

export interface VideoServiceClient extends grpc.Client {
  GetAllVideo(argument: _video_Empty, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_video_VideoUploadedResponse__Output>;
  GetAllVideo(argument: _video_Empty, options?: grpc.CallOptions): grpc.ClientReadableStream<_video_VideoUploadedResponse__Output>;
  getAllVideo(argument: _video_Empty, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_video_VideoUploadedResponse__Output>;
  getAllVideo(argument: _video_Empty, options?: grpc.CallOptions): grpc.ClientReadableStream<_video_VideoUploadedResponse__Output>;
  
  GetRandomVideo(argument: _video_NumberRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_video_VideoUploadedResponse__Output>;
  GetRandomVideo(argument: _video_NumberRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_video_VideoUploadedResponse__Output>;
  getRandomVideo(argument: _video_NumberRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_video_VideoUploadedResponse__Output>;
  getRandomVideo(argument: _video_NumberRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_video_VideoUploadedResponse__Output>;
  
  GetVideoByCriteria(argument: _video_VideoCriteriaRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_video_VideoUploadedResponse__Output>;
  GetVideoByCriteria(argument: _video_VideoCriteriaRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_video_VideoUploadedResponse__Output>;
  getVideoByCriteria(argument: _video_VideoCriteriaRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_video_VideoUploadedResponse__Output>;
  getVideoByCriteria(argument: _video_VideoCriteriaRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_video_VideoUploadedResponse__Output>;
  
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
  GetAllVideo: grpc.handleServerStreamingCall<_video_Empty__Output, _video_VideoUploadedResponse>;
  
  GetRandomVideo: grpc.handleServerStreamingCall<_video_NumberRequest__Output, _video_VideoUploadedResponse>;
  
  GetVideoByCriteria: grpc.handleServerStreamingCall<_video_VideoCriteriaRequest__Output, _video_VideoUploadedResponse>;
  
  UploadVideo: grpc.handleClientStreamingCall<_video_VideoUploadRequest__Output, _video_VideoUploadResponse>;
  
}

export interface VideoServiceDefinition extends grpc.ServiceDefinition {
  GetAllVideo: MethodDefinition<_video_Empty, _video_VideoUploadedResponse, _video_Empty__Output, _video_VideoUploadedResponse__Output>
  GetRandomVideo: MethodDefinition<_video_NumberRequest, _video_VideoUploadedResponse, _video_NumberRequest__Output, _video_VideoUploadedResponse__Output>
  GetVideoByCriteria: MethodDefinition<_video_VideoCriteriaRequest, _video_VideoUploadedResponse, _video_VideoCriteriaRequest__Output, _video_VideoUploadedResponse__Output>
  UploadVideo: MethodDefinition<_video_VideoUploadRequest, _video_VideoUploadResponse, _video_VideoUploadRequest__Output, _video_VideoUploadResponse__Output>
}
