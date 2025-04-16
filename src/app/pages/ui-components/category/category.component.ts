import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MaterialModule} from 'src/app/material.module';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule} from '@angular/router';
import {CategoryService} from '../../../services/apis/category.service';
import {ICategory} from '../../../interface/category.interface';
import {MatDialog} from '@angular/material/dialog';
import {CloudinaryService} from '../../../services/common/cloudinary.service';
import {DeleteComponent} from './delete/delete.component';
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";
// import { CreateComponent } from './create/create.component';
// import { EditComponent } from './edit/edit.component';
// import { DetailComponent } from './detail/detail.component';

@Component({
  selector: 'app-category',
  imports: [MatTableModule,
    MatCardModule,
    MaterialModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    CommonModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    RouterModule],
  templateUrl: './category.component.html',
})
export class CategoryComponent {
  imageUrl: string = '';
  list: ICategory[] = [];
  displayedColumns: string[] = ['id', 'images', 'name', 'status', 'actions'];

  readonly dialog = inject(MatDialog);

  constructor(
    private cloudinary: CloudinaryService,
    private categoryService: CategoryService
  ) {
    this.getAll();
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.cloudinary.uploadImage(file).subscribe((res: any) => {
        this.imageUrl = res.secure_url;
        console.log('Uploaded:', this.imageUrl);
      });
    }
  }

  getAll() {
    this.categoryService.getCategories().subscribe({
      next: (res: any) => {
        this.list = res?.data ?? res;
        console.log(this.list);
      },
      error: (err) => {
        console.error('Error fetching categories:', err);
      }
    })
  }

  openDialog(id: number, name: string): void {
    const dialogRef = this.dialog.open(DeleteComponent, {
      data: {name: name, id: id},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result) {
        this.getAll();
      }
    });
  }
}
