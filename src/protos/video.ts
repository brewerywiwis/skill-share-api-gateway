import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { VideoServiceClient as _video_VideoServiceClient, VideoServiceDefinition as _video_VideoServiceDefinition } from './video/VideoService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  video: {
    Empty: MessageTypeDefinition
    NumberRequest: MessageTypeDefinition
    VideoCriteriaRequest: MessageTypeDefinition
    VideoInfo: MessageTypeDefinition
    VideoService: SubtypeConstructor<typeof grpc.Client, _video_VideoServiceClient> & { service: _video_VideoServiceDefinition }
    VideoStatusRequest: MessageTypeDefinition
    VideoStatusResponse: MessageTypeDefinition
    VideoUploadRequest: MessageTypeDefinition
    VideoUploadResponse: MessageTypeDefinition
    VideoUploaded: MessageTypeDefinition
    VideoUploadedResponse: MessageTypeDefinition
  }
}

