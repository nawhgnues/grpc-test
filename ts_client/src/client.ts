import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import path from "path";

// proto 파일의 실제 경로에 맞게 조정
const PROTO_PATH = path.resolve(__dirname, "../proto/service.proto");

// proto 로딩 옵션 설정 (명시적 타입과 패키지 구조 파악 가능하게)
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

// protoDescriptor는 전체 proto 패키지를 포함
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);

// gRPC 서비스 접근 (패키지명이 generated인 경우)
const GreeterService = (protoDescriptor as any).generated.Greeter;

const client = new GreeterService(
  "localhost:50051",
  grpc.credentials.createInsecure()
);

function main() {
  const name = process.argv[2] || "TypeScript User";

  client.sayHello({ name }, (error: any, response: any) => {
    if (error) {
      console.error("❌ Error:", error.message);
      return;
    }
    console.log("✅ Server response:", response.message);
  });
}

main();
