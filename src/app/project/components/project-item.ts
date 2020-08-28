import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output
} from '@angular/core';
import {cardAnim} from '../../anim';
import {Project} from '../../domain';

@Component({
  selector: 'app-project-item',
  template: `
    <mat-card class="hover" (click)="onClick($event)">
      <mat-card-header>
        <mat-card-title>
          <span>
            {{ item.name }}
          </span>
        </mat-card-title>
      </mat-card-header>
      <img matCardImage [src]="item.coverImg" alt="">
      <mat-card-content>
        <p>{{ item.desc }}</p>
      </mat-card-content>
      <mat-card-actions>
        <button mat-button (click)="openUpdateDialog($event)">
          <mat-icon>note</mat-icon>
          <span>编辑</span>
        </button>
        <button mat-button (click)="openInviteDialog($event)">
          <mat-icon>group_add</mat-icon>
          <span>邀请</span>
        </button>
        <button mat-button (click)="openDeleteDialog($event)">
          <mat-icon>delete</mat-icon>
          <span>删除</span>
        </button>
      </mat-card-actions>
    </mat-card>
  `,
  styles: [`
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [cardAnim],
})
export class ProjectItemComponent {
  @Input() item: Project;
  @Output() itemSelected = new EventEmitter<void>();
  @Output() launchUpdateDialog = new EventEmitter<void>();
  @Output() launchInviteDailog = new EventEmitter<void>();
  @Output() launchDeleteDailog = new EventEmitter<void>();
  @HostBinding('@card') cardState = 'out';

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.cardState = 'hover';
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.cardState = 'out';
  }

  onClick(ev: Event): void {
    ev.preventDefault();
    this.itemSelected.emit();
  }

  openUpdateDialog(ev: Event): void {
    ev.preventDefault();
    ev.stopPropagation();
    this.launchUpdateDialog.emit();
  }

  openInviteDialog(ev: Event): void {
    ev.preventDefault();
    ev.stopPropagation();
    this.launchInviteDailog.emit();
  }

  openDeleteDialog(ev: Event): void {
    ev.preventDefault();
    ev.stopPropagation();
    this.launchDeleteDailog.emit();
  }

  constructor() {}
}
