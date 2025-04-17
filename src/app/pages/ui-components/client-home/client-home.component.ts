import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './client-home.component.html'
})
export class ClientHome {
  books = [
    {
      title: 'Đắc Nhân Tâm',
      price: '80.000 VNĐ',
      image: 'https://tiemsach.org/wp-content/uploads/2023/07/Ebook-Dac-nhan-tam.jpg',
      alt: 'Sách - Đắc Nhân Tâm',
      desc: 'Cuốn sách kinh điển về nghệ thuật giao tiếp, giúp bạn xây dựng mối quan hệ bền vững.'
    },
    {
      title: 'Nhà Giả Kim',
      price: '95.000 VNĐ',
      image: 'https://upload.wikimedia.org/wikipedia/vi/9/9c/Nh%C3%A0_gi%E1%BA%A3_kim_%28s%C3%A1ch%29.jpg',
      alt: 'Sách - Nhà Giả Kim',
      desc: 'Hành trình khám phá bản thân qua câu chuyện đầy cảm hứng của Paulo Coelho.'
    },
    {
      title: 'Tư Duy Nhanh Và Chậm',
      price: '220.000 VNĐ',
      image: 'https://bizweb.dktcdn.net/thumb/grande/100/197/269/products/462558750-1083111936819329-1957541486232979466-n.png?v=1730363480047',
      alt: 'Sách - Tư Duy Nhanh Và Chậm',
      desc: 'Khám phá cách bộ não hoạt động qua lăng kính tâm lý học của Daniel Kahneman.'
    }
  ];

  features = [
    {
      icon: 'images/truck.svg',
      alt: 'Giao hàng',
      title: 'Giao Hàng Nhanh & Miễn Phí',
      description: 'Sách của bạn sẽ được giao đến tận tay nhanh chóng và hoàn toàn miễn phí.'
    },
    {
      icon: 'images/bag.svg',
      alt: 'Mua sắm',
      title: 'Mua Sắm Dễ Dàng',
      description: 'Trải nghiệm mua sách trực tuyến đơn giản với giao diện thân thiện.'
    },
    {
      icon: 'images/support.svg',
      alt: 'Hỗ trợ',
      title: 'Hỗ Trợ 24/7',
      description: 'Đội ngũ của chúng tôi luôn sẵn sàng giải đáp mọi thắc mắc.'
    },
    {
      icon: 'images/return.svg',
      alt: 'Đổi trả',
      title: 'Đổi Trả Dễ Dàng',
      description: 'Chính sách đổi trả linh hoạt giúp bạn yên tâm khi mua sách.'
    }
  ];

  helps = [
    'Sách chất lượng cao, nội dung phong phú',
    'Dịch vụ tư vấn chọn sách tận tâm',
    'Lựa chọn phù hợp cho mọi sở thích đọc',
    'Cam kết mang lại trải nghiệm đọc sách tuyệt vời'
  ];
}
