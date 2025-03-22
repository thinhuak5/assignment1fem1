import {Component} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MaterialModule} from 'src/app/material.module';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule} from '@angular/router';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [
    MatTableModule,
    MatCardModule,
    MaterialModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    RouterModule,
    MatSelectModule,

  ],
  templateUrl: './edit-product.component.html',
})
export class EditProductComponent {
  imageUrl: string = '';
}
