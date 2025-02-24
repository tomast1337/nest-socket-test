import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { NotificationService } from './notification.service';
import { Logger } from '@nestjs/common';

@WebSocketGateway()
export class NotificationGateway {
  @WebSocketServer()
  server: Server;

  private readonly logger = new Logger(NotificationGateway.name);

  constructor(private readonly notificationService: NotificationService) {
    this.sendPeriodicNotifications();
  }

  private sendPeriodicNotifications() {
    setInterval(async () => {
      const notification = {
        title: 'Notification title',
        subtitle: 'Notification subtitle',
      };
      this.logger.log('Sending notifications to all clients');
      this.server.emit('periodicNotification', notification);
    }, 15 * 1000); // Sends notifications every 60 seconds
  }
}
