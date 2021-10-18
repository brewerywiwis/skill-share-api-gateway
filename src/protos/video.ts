import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { ChatServiceClient as _video_ChatServiceClient, ChatServiceDefinition as _video_ChatServiceDefinition } from './video/ChatService';
import type { VideoServiceClient as _video_VideoServiceClient, VideoServiceDefinition as _video_VideoServiceDefinition } from './video/VideoService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  video: {
    ChatService: SubtypeConstructor<typeof grpc.Client, _video_ChatServiceClient> & { service: _video_ChatServiceDefinition }
    Empty: MessageTypeDefinition
    Message: MessageTypeDefinition
    NumberRequest: MessageTypeDefinition
    VideoCriteriaRequest: MessageTypeDefinition
    VideoInfo: MessageTypeDefinition
    VideoService: SubtypeConstructor<typeof grpc.Client, _video_VideoServiceClient> & { service: _video_VideoServiceDefinition }
    VideoUploadRequest: MessageTypeDefinition
    VideoUploadResponse: MessageTypeDefinition
    VideoUploaded: MessageTypeDefinition
    VideoUploadedResponse: MessageTypeDefinition
  }
}

