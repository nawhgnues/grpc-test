import type * as grpc from "@grpc/grpc-js";
import type { MessageTypeDefinition } from "@grpc/proto-loader";

import type {
  GreeterClient as _demo_GreeterClient,
  GreeterDefinition as _demo_GreeterDefinition,
} from "./demo/Greeter";

type SubtypeConstructor<
  Constructor extends new (...args: any) => any,
  Subtype
> = {
  new (...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  demo: {
    Greeter: SubtypeConstructor<typeof grpc.Client, _demo_GreeterClient> & {
      service: _demo_GreeterDefinition;
    };
    HelloReply: MessageTypeDefinition;
    HelloRequest: MessageTypeDefinition;
  };
}
