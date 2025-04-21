import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MaterialModule} from 'src/app/material.module';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {RouterLink, RouterModule} from '@angular/router';
import {ProductsService as ProductService} from '../../../services/apis/product.service';
import {IProduct} from '../../../interface/product.interface';
import {MatDialog} from '@angular/material/dialog';
import {CloudinaryService} from '../../../services/common/cloudinary.service';
import {DeleteComponent} from './delete-product/delete-product.component';

@Component({
  selector: 'app-product',
  imports: [
    MatTableModule,
    MatCardModule,
    MaterialModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    CommonModule,
    RouterModule,
    RouterLink
  ],
  templateUrl: './product.component.html',
})
export class ProductComponent {
  imageUrl: string = '';
  list: IProduct[] = [];
  displayedColumns: string[] = ['id', 'images', 'price', 'name', 'category_id', 'status', 'actions'];
  readonly dialog = inject(MatDialog);

  constructor(
    private cloudinary: CloudinaryService,
    private productService: ProductService
  ) {
    this.getAll();
  }

  // Lấy danh sách sản phẩm
  getAll() {
    this.productService.getProducts().subscribe({
      next: (res: any) => {
        console.log('API Response:', res); // Kiểm tra dữ liệu trả về
        this.list = res?.data ?? res; // Gán dữ liệu vào `list`
        console.log('List:', this.list); // Kiểm tra dữ liệu được gán vào `list`
      },
      error: (err) => {
        console.error('Error fetching products:', err);
      },
    });
  }

  // Xử lý khi chọn file để upload
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.cloudinary.uploadImage(file).subscribe((res: any) => {
        this.imageUrl = res.secure_url;
        console.log('Uploaded:', this.imageUrl);
      });
    }
  }

  // Mở dialog xóa sản phẩm
  openDialog(id: number, name: string): void {
    const dialogRef = this.dialog.open(DeleteComponent, {
      data: {name: name, id: id},
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      if (result) {
        this.getAll();
      }
    });
  }

  // Mở dialog thêm sản phẩm

}
