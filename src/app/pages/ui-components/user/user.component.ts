import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MaterialModule} from 'src/app/material.module';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {UserService} from '../../../services/apis/user.service';
import {IUser} from '../../../interface/user.interface';
import {DeleteUserComponent} from './delete/delete.component';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [


    CommonModule,
    MatTableModule,
    MatCardModule,
    MaterialModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    RouterModule,
  ],
  templateUrl: './user.component.html',
})
export class UserComponent {
  list: IUser[] = [];
  displayedColumns: string[] = ['id', 'avatar', 'name', 'email', 'phone', 'status', 'role', 'actions'];

  readonly dialog = inject(MatDialog);

  constructor(private userService: UserService) {
    this.getAll();
  }

  getAll() {
    this.userService.getUsers().subscribe({
      next: (res: any) => {
        this.list = res?.data ?? res;
      },
      error: (err) => {
        console.error('Error fetching users:', err);
      }
    });
  }


  openDeleteDialog(id: number, name: string) {
    const dialogRef = this.dialog.open(DeleteUserComponent, {
      data: {id, name},
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getAll(); // Reload the user list after deletion
      }
    });
  }

}
