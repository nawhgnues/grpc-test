import grpc
from concurrent import futures
import time
import generated.service_pb2 as service_pb2
import generated.service_pb2_grpc as service_pb2_grpc


class GreeterServicer(service_pb2_grpc.GreeterServicer):
    def SayHello(self, request, context):
        print(f"Received request from: {request.name}")
        return service_pb2.HelloReply(message=f"Hello, {request.name}! 😎")

def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    service_pb2_grpc.add_GreeterServicer_to_server(GreeterServicer(), server)
    server.add_insecure_port('[::]:50051')
    server.start()
    print("Server started on port 50051")
    try:
        while True:
            time.sleep(86400)  # One day in seconds
    except KeyboardInterrupt:
        server.stop(0)

if __name__ == '__main__':
    serve()