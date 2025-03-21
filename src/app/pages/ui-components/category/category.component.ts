import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MaterialModule} from 'src/app/material.module';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule} from '@angular/router';

export interface PeriodicElement {
  id: number;
  name: string;
  description: string;
  images: string;
  status: number;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: 1,
    name: ' Anime/Manga',
    description: 'Gundam, One Piece, Dragon Ball, Naruto, Attack on Titan…',
    images: 'assets/images/products/anime.jpg',
    status: 1
  },
  {
    id: 2,
    name: ' Phim ảnh',
    description: 'Marvel, DC, Star Wars, Harry Potter…',
    images: 'assets/images/products/anime.jpg',
    status: 1
  },
  {
    id: 3,
    name: 'Game',
    description: 'Genshin Impact,Honkai Star rail,Wuthering waves,...',
    images: 'assets/images/products/anime.jpg',
    status: 1
  },
  {
    id: 4,
    name: 'Thể thao',
    description: 'Mô hình cầu thủ bóng đá, vận động viên thể thao',
    images: 'assets/images/products/anime.jpg',
    status: 1
  },
  {
    id: 5,
    name: 'Thần thoại/Fantasy',
    description: 'Nhân vật thần thoại, quái vật, siêu nhân…',
    images: 'assets/images/products/anime.jpg',
    status: 0
  }
];


@Component({
  selector: 'app-category',
  imports: [MatTableModule,
    MatCardModule,
    MaterialModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    CommonModule,
    RouterModule],
  templateUrl: './category.component.html',
})
export class CategoryComponent {
  displayedColumns: string[] = ['id', 'images', 'name', 'description', 'status', 'actions'];
  dataSource = ELEMENT_DATA;
}
