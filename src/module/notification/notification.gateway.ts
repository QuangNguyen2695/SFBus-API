// notification.gateway.ts
import {
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
    OnGatewayInit,
    OnGatewayConnection,
    OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { NotificationService } from './notification.service';

@WebSocketGateway({
    cors: {
        origin: ['http://localhost:8100'],  // Địa chỉ nguồn của ứng dụng Ionic
        methods: ['GET', 'POST'],
        credentials: true,
    },
    path: '/socket.io',
})
export class NotificationGateway
    implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {

    @WebSocketServer() server: Server;

    constructor() { }

    afterInit(server: Server) {
        console.log('WebSocket gateway initialized');
    }

    handleConnection(client: any) {
        console.log(`Client connected: ${client.id}`);
    }

    handleDisconnect(client: any) {
        console.log(`Client disconnected: ${client.id}`);
    }

    async notifyChange(notification) {
        this.server.emit('notificationChange', notification);
    }
}
