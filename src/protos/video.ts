import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { ChatServiceClient as _video_ChatServiceClient, ChatServiceDefinition as _video_ChatServiceDefinition } from './video/ChatService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  video: {
    ChatService: SubtypeConstructor<typeof grpc.Client, _video_ChatServiceClient> & { service: _video_ChatServiceDefinition }
    Message: MessageTypeDefinition
  }
}

