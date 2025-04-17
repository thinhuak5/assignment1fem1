import {Component, inject} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog';
import {UserService} from '../../../../services/apis/user.service';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


export interface DialogData {
  name: string;
  id: number;
}

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete.component.html',
  imports: [
    MatDialogModule,  // Đảm bảo thêm dòng này
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    // Các module khác...
  ],
})
export class DeleteUserComponent {
  readonly dialogRef = inject(MatDialogRef<DeleteUserComponent>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);

  constructor(private userService: UserService) {
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  deleted() {
    this.userService.deleteUser(this.data.id).subscribe({
      next: () => {
        this.dialogRef.close(true);
      },
      error: (err) => {
        console.error('Error deleting user:', err);
        this.dialogRef.close(false);
      },
    });
  }
}
