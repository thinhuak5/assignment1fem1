import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {ProductsService} from 'src/app/services/apis/product.service';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-delete-product',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
  ],
  templateUrl: './delete-product.component.html',
})
export class DeleteComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { id: number; name: string },
    private dialogRef: MatDialogRef<DeleteComponent>,
    private productService: ProductsService
  ) {
  }

  delete() {
    this.productService.deleteProducts(this.data.id).subscribe({
      next: () => {
        alert('Xoá thành công!');
        this.dialogRef.close(true);
      },
      error: (err) => {
        console.error('Xoá thất bại:', err);
        alert('Xoá thất bại, vui lòng thử lại.');
        this.dialogRef.close(false);
      }
    });
  }
}
