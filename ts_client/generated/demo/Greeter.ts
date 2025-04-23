// Original file: ../proto/service.proto

import type * as grpc from "@grpc/grpc-js";
import type { MethodDefinition } from "@grpc/proto-loader";
import type {
  HelloReply as _demo_HelloReply,
  HelloReply__Output as _demo_HelloReply__Output,
} from "./HelloReply";
import type {
  HelloRequest as _demo_HelloRequest,
  HelloRequest__Output as _demo_HelloRequest__Output,
} from "./HelloRequest";

export interface GreeterClient extends grpc.Client {
  SayHello(
    argument: _demo_HelloRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_demo_HelloReply__Output>
  ): grpc.ClientUnaryCall;
  SayHello(
    argument: _demo_HelloRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_demo_HelloReply__Output>
  ): grpc.ClientUnaryCall;
  SayHello(
    argument: _demo_HelloRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_demo_HelloReply__Output>
  ): grpc.ClientUnaryCall;
  SayHello(
    argument: _demo_HelloRequest,
    callback: grpc.requestCallback<_demo_HelloReply__Output>
  ): grpc.ClientUnaryCall;
  sayHello(
    argument: _demo_HelloRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_demo_HelloReply__Output>
  ): grpc.ClientUnaryCall;
  sayHello(
    argument: _demo_HelloRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_demo_HelloReply__Output>
  ): grpc.ClientUnaryCall;
  sayHello(
    argument: _demo_HelloRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_demo_HelloReply__Output>
  ): grpc.ClientUnaryCall;
  sayHello(
    argument: _demo_HelloRequest,
    callback: grpc.requestCallback<_demo_HelloReply__Output>
  ): grpc.ClientUnaryCall;
}

export interface GreeterHandlers extends grpc.UntypedServiceImplementation {
  SayHello: grpc.handleUnaryCall<_demo_HelloRequest__Output, _demo_HelloReply>;
}

export interface GreeterDefinition extends grpc.ServiceDefinition {
  SayHello: MethodDefinition<
    _demo_HelloRequest,
    _demo_HelloReply,
    _demo_HelloRequest__Output,
    _demo_HelloReply__Output
  >;
}
