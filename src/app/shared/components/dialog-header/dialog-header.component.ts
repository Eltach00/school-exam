import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-dialog-header',
  templateUrl: './dialog-header.component.html',
  styleUrls: ['./dialog-header.component.sass'],
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogHeaderComponent {
  @Input() title: string;
  @Input() buttonText: string;
  @Input() isShowCloseButton: boolean = true;

  @Output() closeEmitter: EventEmitter<void> = new EventEmitter();

  onCloseClicked(): void {
    this.closeEmitter.emit();
  }
}
