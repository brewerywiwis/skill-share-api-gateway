// Original file: src/protos/video.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Message as _video_Message, Message__Output as _video_Message__Output } from '../video/Message';

export interface ChatServiceClient extends grpc.Client {
  SayHello(argument: _video_Message, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _video_Message__Output) => void): grpc.ClientUnaryCall;
  SayHello(argument: _video_Message, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _video_Message__Output) => void): grpc.ClientUnaryCall;
  SayHello(argument: _video_Message, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _video_Message__Output) => void): grpc.ClientUnaryCall;
  SayHello(argument: _video_Message, callback: (error?: grpc.ServiceError, result?: _video_Message__Output) => void): grpc.ClientUnaryCall;
  sayHello(argument: _video_Message, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _video_Message__Output) => void): grpc.ClientUnaryCall;
  sayHello(argument: _video_Message, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _video_Message__Output) => void): grpc.ClientUnaryCall;
  sayHello(argument: _video_Message, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _video_Message__Output) => void): grpc.ClientUnaryCall;
  sayHello(argument: _video_Message, callback: (error?: grpc.ServiceError, result?: _video_Message__Output) => void): grpc.ClientUnaryCall;
  
}

export interface ChatServiceHandlers extends grpc.UntypedServiceImplementation {
  SayHello: grpc.handleUnaryCall<_video_Message__Output, _video_Message>;
  
}

export interface ChatServiceDefinition extends grpc.ServiceDefinition {
  SayHello: MethodDefinition<_video_Message, _video_Message, _video_Message__Output, _video_Message__Output>
}
