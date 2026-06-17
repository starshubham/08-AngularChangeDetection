import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject, input, OnInit } from '@angular/core';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-messages-list',
  standalone: true,
  templateUrl: './messages-list.component.html',
  styleUrl: './messages-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessagesListComponent {
  // messages = input.required<string[]>();
  // private cdRef = inject(ChangeDetectorRef);
  // private destroyRef = inject(DestroyRef);
  private messagesService = inject(MessagesService);
  messages = this.messagesService.allMessages;
  
  // messages: string[] = [];

  // ngOnInit() {
  //   const subscription = this.messagesService.messages$.subscribe((messages) => {
  //     this.messages = messages;
  //     this.cdRef.markForCheck();
  //   });
  //   this.destroyRef.onDestroy(() => {
  //     subscription.unsubscribe();
  //   })
  // }

  get debugOutput() {
    console.log('[MessagesList] "debugOutput" binding re-evaluated.');
    return 'MessagesList Component Debug Output';
  }
}
