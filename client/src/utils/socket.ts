import { io, Socket } from 'socket.io-client';
import { API_URL as SOCKET_URL } from '../api/auth.api';

class SocketClient {
    private socket: Socket | null = null;
    private joinedRoom: string | null = null;
    private messageQueue: { event: string; data: any }[] = [];

    connect() {
        if (this.socket?.connected) return;

        console.log(`🔌 Initializing socket connection to: ${SOCKET_URL}`);
        this.socket = io(SOCKET_URL, {
            withCredentials: true,
            transports: ['websocket', 'polling']
        });

        this.socket.on('connect', () => {
            console.log('🔌 Connected to Socket.io server:', this.socket?.id);
            // Re-join previous room if any
            if (this.joinedRoom) {
                this.join(this.joinedRoom);
            }
            // Flush message queue
            while (this.messageQueue.length > 0) {
                const { event, data } = this.messageQueue.shift()!;
                this.emit(event, data);
            }
        });

        this.socket.on('connect_error', (error: any) => {
            console.error('🔌 Socket connection error:', error.message || error);
        });

        this.socket.on('reconnect_attempt', () => {
            console.log('🔌 Attempting to reconnect...');
        });
    }

    disconnect() {
        if (this.socket) {
            this.socket.disconnect();
            this.socket = null;
        }
    }

    join(room: string) {
        this.joinedRoom = room;
        if (this.socket?.connected) {
            console.log(`👤 Joining room: ${room}`);
            this.socket.emit('join', room);
        } else {
            console.log(`👤 Queueing join for room: ${room} (waiting for connection)`);
            if (!this.socket) this.connect();
        }
    }

    on(event: string, callback: (data: any) => void) {
        if (!this.socket) this.connect();
        this.socket?.on(event, callback);
    }

    off(event: string, callback?: (data: any) => void) {
        this.socket?.off(event, callback);
    }

    emit(event: string, data: any) {
        if (this.socket?.connected) {
            this.socket.emit(event, data);
        } else {
            console.log(`📡 Queueing emit for event: ${event} (waiting for connection)`);
            this.messageQueue.push({ event, data });
            if (!this.socket) this.connect();
        }
    }
}

export const socketClient = new SocketClient();