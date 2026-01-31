# Lynn The Storyteller - Blog phong cách Notion ✨  

**Một. Đôi. Ba. Tứ.**

Một trang blog đẹp mắt được thiết kế theo phong cách Notion, featuring nội dung từ blog Lynn The Storyteller - nơi chia sẻ những câu chuyện về khởi nghiệp, kinh doanh F&B, và phát triển bản thân.

## 🎨 Tính năng

- **Thiết kế Notion-style**: Giao diện sạch sẽ, hiện đại giống Notion
- **Dark Mode**: Hỗ trợ chế độ tối/sáng tự động
- **Responsive**: Hoạt động mượt mà trên mọi thiết bị
- **Sidebar Navigation**: Điều hướng dễ dàng với sidebar có thể thu gọn
- **Typography đẹp**: Sử dụng font system với cỡ chữ và khoảng cách hợp lý
- **Smooth Animations**: Hiệu ứng mượt mà và tinh tế
- **Component Blocks**: Callouts, quotes, code blocks, và nhiều hơn nữa

## 🚀 Cách chạy

1. **Cài đặt dependencies** (nếu chưa cài):
```bash
npm install
```

2. **Chạy development server**:
```bash
npm run dev
```

3. **Mở trình duyệt** và truy cập:
```
http://localhost:4321/
```

## 📁 Cấu trúc dự án

```
blog/
├── src/
│   ├── layouts/
│   │   └── Layout.astro       # Layout chính
│   ├── pages/
│   │   └── index.astro        # Trang chủ blog
│   └── styles/
│       └── global.css         # Design system và styles
├── public/                     # Static assets
└── package.json
```

## 🎨 Design System

### Colors
- **Primary**: `#2383e2` (Blue)
- **Secondary**: `#f7f6f3` (Light Gray)
- **Text**: `#37352f` (Dark Gray)
- **Accents**: Purple, Pink, Orange, Green

### Typography
- **Font**: System font stack (Apple, Segoe UI, etc.)
- **Sizes**: 12px - 48px với scale hợp lý
- **Line Height**: 1.5 - 1.8 cho nội dung

### Spacing
- Sử dụng scale 4px, 8px, 16px, 24px, 32px, 48px, 64px

## 🔧 Tùy chỉnh

### Thay đổi màu sắc
Mở `src/styles/global.css` và chỉnh sửa CSS variables:

```css
:root {
  --color-accent-blue: #2383e2;
  --color-accent-purple: #9065b0;
  /* ... */
}
```

### Thêm bài viết
Chỉnh sửa `src/pages/index.astro` để thêm nội dung mới.

### Sidebar Navigation
Thêm/sửa các mục trong sidebar tại phần `<nav>` trong `index.astro`.

## 🌟 Các thành phần có sẵn

### Callout
```html
<div class="callout info">
  <div class="callout-icon">💡</div>
  <div class="callout-content">
    <p>Nội dung của bạn</p>
  </div>
</div>
```

Types: `info`, `warning`, `success`

### Quote
```html
<blockquote class="quote">
  Trích dẫn của bạn
</blockquote>
```

### Divider
```html
<hr class="divider">
```

### Code Block
```html
<pre><code>
// Your code here
</code></pre>
```

## 📱 Responsive Design

- **Desktop**: Full sidebar + content
- **Tablet**: Collapsible sidebar
- **Mobile**: Hidden sidebar với menu toggle

## 🎯 Shortcuts

- `Ctrl + K`: Tìm kiếm (giữ cho tương lai)
- Click icon theme: Toggle dark/light mode
- Click menu icon (mobile): Mở/đóng sidebar

## 📝 To-Do / Cải tiến

- [ ] Thêm tính năng tìm kiếm
- [ ] Tích hợp markdown/MDX cho blog posts
- [ ] Thêm tags và categories
- [ ] Pagination
- [ ] RSS feed
- [ ] Comments system
- [ ] Reading time estimate
- [ ] Table of contents

## 🤝 Contribute

Feel free to fork và tùy chỉnh theo nhu cầu của bạn!

## 📄 License

MIT License - Tự do sử dụng cho dự án cá nhân và thương mại.

---

**Tạo bởi Antigravity** với ❤️ và Astro
