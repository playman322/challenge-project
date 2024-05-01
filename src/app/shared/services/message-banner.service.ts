import { inject, Injectable } from '@angular/core';
import { MessageService } from "primeng/api";

@Injectable({
  providedIn: 'root'
})
export class MessageBannerService {
  private messageService = inject(MessageService);

  displayMessage (message: string, type: string): void {
    this.messageService.add({
      severity: type.toLowerCase(),
      summary: type,
      detail: message,
    });
  }
}
