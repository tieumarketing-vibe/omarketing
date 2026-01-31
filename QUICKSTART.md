# 🚀 Quick Start Guide

## Bước 1: Xem trang blog

Server đã đang chạy tại: **http://localhost:4321/**

Mở trình duyệt và truy cập địa chỉ trên để xem blog Notion-style của bạn!

## Bước 2: Khám phá các tính năng

### 🎨 Dark Mode
- Click vào icon ☀️/🌙 ở góc trên bên phải
- Hoặc để hệ thống tự động theo theme của máy bạn

### 📱 Responsive
- Thu nhỏ cửa sổ trình duyệt để xem responsive design
- Trên mobile: Click icon ☰ để mở/đóng sidebar

### 🖱️ Hover Effects
- Di chuột qua các elements để xem animations
- Blog cards có smooth hover effects
- Navigation items thay đổi màu khi hover

## Bước 3: Tùy chỉnh nội dung

### Thay đổi tiêu đề blog
Mở `src/pages/index.astro`, tìm dòng:
```astro
<h1 class="page-title">Chào mừng đến với Blog của tôi ✨</h1>
```

### Thêm blog card mới
Thêm component sau vào file `src/pages/index.astro`:
```astro
<BlogCard
  title="Bài viết mới của bạn"
  excerpt="Mô tả ngắn về bài viết..."
  date="7 Tháng 1, 2026"
  category="Danh mục"
  icon="💡"
  href="#link"
/>
```

### Thay đổi màu chủ đạo
Mở `src/styles/global.css` và sửa:
```css
--color-accent-blue: #2383e2;  /* Đổi màu này */
```

## Bước 4: Xem kết quả

Astro tự động reload khi bạn lưu file. Chỉ cần lưu và xem thay đổi ngay lập tức!

## 📚 Tài liệu chi tiết

- **README.md** - Tổng quan và hướng dẫn cơ bản
- **CUSTOMIZATION.md** - Hướng dẫn tùy chỉnh chi tiết
- **PROJECT_SUMMARY.md** - Tổng quan dự án và components

## 🎯 Thử ngay

### 1. Thêm một danh mục mới vào sidebar
File: `src/pages/index.astro`

Tìm section `<div class="nav-section">` và thêm:
```astro
<a href="#" class="nav-item">
  <span class="nav-icon">🎯</span>
  <span>Danh mục mới</span>
</a>
```

### 2. Tạo một callout
```html
<div class="callout warning">
  <div class="callout-icon">⚠️</div>
  <div class="callout-content">
    <p>Nội dung cảnh báo của bạn</p>
  </div>
</div>
```

### 3. Thêm tags
```astro
<Tag name="JavaScript" color="blue" />
<Tag name="CSS" color="purple" />
<Tag name="Astro" color="green" />
```

## 💡 Tips

1. **Hot Reload**: Mọi thay đổi được cập nhật tự động
2. **CSS Variables**: Thay đổi một lần, áp dụng toàn bộ
3. **Component Reuse**: Sử dụng lại components đã có
4. **Semantic HTML**: Giữ code sạch và accessible

## 🐛 Gặp vấn đề?

### CSS không cập nhật
```bash
# Dừng server (Ctrl+C)
# Xóa cache
rm -rf .astro
# Chạy lại
npm run dev
```

### Port bị chiếm
```bash
# Sử dụng port khác
npm run dev -- --port 3000
```

## 🎉 Next Steps

1. ✅ Tùy chỉnh màu sắc và typography
2. ✅ Thêm nội dung blog của bạn
3. ✅ Tạo thêm pages mới
4. ✅ Deploy lên production (Vercel, Netlify, etc.)

## 📞 Cần giúp đỡ?

- Đọc **CUSTOMIZATION.md** cho hướng dẫn chi tiết
- Check **PROJECT_SUMMARY.md** để hiểu cấu trúc
- Xem [Astro Docs](https://docs.astro.build)

---

**Happy blogging! 🚀**
