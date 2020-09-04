import {ChangeDetectionStrategy, Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {itemAnim} from '../../../anim';
import {TaskVM} from '../../../vm';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [itemAnim]
})
export class TaskItemComponent implements OnInit {

  @Output() taskComplete = new EventEmitter();
  @Output() taskClick = new EventEmitter();
  @Input() item: TaskVM;
  avatar: string;
  widerPriority = 'in';

  constructor() {
  }

  ngOnInit(): void {
    this.avatar = (this.item.owner) ? this.item.owner.avatar as string : 'unassigned';
  }

  onCheckboxClick(ev: Event): void {
    ev.stopPropagation();
  }

  checkboxChanged(): void {
    this.taskComplete.emit();
  }

  itemClicked(ev: Event): void {
    ev.preventDefault();
    this.taskClick.emit();
  }

  @HostListener('mouseenter')
  handleMouseEnter(): void {
    this.widerPriority = 'out';
  }

  @HostListener('mouseleave')
  handleMouseLeave(): void {
    this.widerPriority = 'in';
  }

}
