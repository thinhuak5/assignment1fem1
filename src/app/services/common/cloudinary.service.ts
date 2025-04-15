import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CloudinaryService {

  private cloudName = 'dw5mtwjmp';
  private uploadPreset = 'upload_preset';

  constructor(
    private http: HttpClient,
  ) {
  }

  uploadImage(file: File) {
    const url = `https://api.cloudinary.com/v1_1/${this.cloudName}/image/upload`;
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', this.uploadPreset);

    return this.http.post(url, formData);
  }
}
