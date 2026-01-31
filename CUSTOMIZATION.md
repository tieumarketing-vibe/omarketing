# Hướng dẫn tùy chỉnh Blog phong cách Notion

## 🎨 Tùy chỉnh màu sắc

### Thay đổi màu chủ đạo

Mở file `src/styles/global.css` và chỉnh sửa các CSS variables trong `:root`:

```css
:root {
  /* Màu nền */
  --color-bg-primary: #ffffff;      /* Nền chính */
  --color-bg-secondary: #f7f6f3;    /* Nền phụ */
  --color-sidebar: #fbfbfa;         /* Nền sidebar */
  
  /* Màu chữ */
  --color-text-primary: #37352f;    /* Chữ chính */
  --color-text-secondary: rgba(55, 53, 47, 0.65);  /* Chữ phụ */
  
  /* Màu accent */
  --color-accent-blue: #2383e2;     /* Màu xanh chủ đạo */
  --color-accent-purple: #9065b0;   /* Màu tím */
  --color-accent-pink: #e03e8e;     /* Màu hồng */
  --color-accent-orange: #d9730d;   /* Màu cam */
  --color-accent-green: #0f7b6c;    /* Màu xanh lá */
}
```

### Tạo theme riêng

Bạn có thể tạo các theme variants:

```css
/* Theme sáng (mặc định) */
:root {
  --color-bg-primary: #ffffff;
  --color-text-primary: #37352f;
}

/* Theme tối */
@media (prefers-color-scheme: dark) {
  :root {
    --color-bg-primary: #191919;
    --color-text-primary: rgba(255, 255, 255, 0.9);
  }
}

/* Custom theme - ví dụ: Purple theme */
.theme-purple {
  --color-accent-blue: #9065b0;
  --color-sidebar: #f5f3f7;
}
```

## 📝 Thêm bài viết mới

### Sử dụng BlogCard component

Trong file `src/pages/index.astro`, thêm component mới:

```astro
<BlogCard
  title="Tiêu đề bài viết của bạn"
  excerpt="Mô tả ngắn gọn về nội dung bài viết..."
  date="7 Tháng 1, 2026"
  category="Danh mục"
  icon="🎯"
  href="/link-to-post"
/>
```

### Tạo trang bài viết riêng

1. Tạo file mới trong `src/pages/posts/`:

```bash
src/pages/posts/bai-viet-moi.astro
```

2. Sử dụng template sau:

```astro
---
import Layout from '../../layouts/Layout.astro';
---

<Layout title="Tiêu đề bài viết">
  <div class="app-container">
    <!-- Copy cấu trúc từ index.astro -->
    <div class="content-wrapper">
      <h1 class="page-title">Tiêu đề bài viết</h1>
      
      <div class="content">
        <!-- Nội dung của bạn -->
      </div>
    </div>
  </div>
</Layout>
```

## 🏷️ Làm việc với Tags

### Thêm tags

```astro
<Tag name="JavaScript" color="blue" href="/tags/javascript" />
<Tag name="CSS" color="purple" href="/tags/css" />
<Tag name="React" color="pink" href="/tags/react" />
```

### Các màu có sẵn

- `blue` - Xanh dương
- `purple` - Tím
- `pink` - Hồng
- `orange` - Cam
- `green` - Xanh lá
- `gray` - Xám (mặc định)

## 📐 Thay đổi Layout

### Điều chỉnh độ rộng sidebar

File: `src/styles/global.css`

```css
:root {
  --sidebar-width: 240px;  /* Thay đổi giá trị này */
}
```

### Điều chỉnh độ rộng nội dung

```css
:root {
  --content-max-width: 900px;  /* Thay đổi giá trị này */
}
```

## ✨ Thêm Components mới

### Callout boxes

```html
<div class="callout info">
  <div class="callout-icon">💡</div>
  <div class="callout-content">
    <p>Nội dung callout</p>
  </div>
</div>
```

Types: `info`, `warning`, `success`

### Quote block

```html
<blockquote class="quote">
  "Trích dẫn của bạn ở đây"
</blockquote>
```

### Divider

```html
<hr class="divider">
```

## 🎯 Navigation & Sidebar

### Thêm menu items

File: `src/pages/index.astro`, tìm section `<nav>`:

```astro
<a href="/link" class="nav-item">
  <span class="nav-icon">
    <svg><!-- SVG icon --></svg>
  </span>
  <span>Tên menu</span>
</a>
```

### Thêm category mới

```astro
<div class="nav-section">
  <div class="nav-section-title">Danh mục mới</div>
  <a href="#" class="nav-item">
    <span class="nav-icon">🎯</span>
    <span>Tên danh mục</span>
  </a>
</div>
```

## 🔤 Typography

### Thay đổi font chữ

File: `src/styles/global.css`

```css
:root {
  --font-sans: 'Your Font', -apple-system, BlinkMacSystemFont, sans-serif;
}
```

Nhớ import font trong `src/layouts/Layout.astro`:

```html
<head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>
```

### Thay đổi cỡ chữ

```css
:root {
  --text-base: 16px;  /* Cỡ chữ cơ bản */
  --text-lg: 18px;
  --text-xl: 20px;
  /* ... */
}
```

## 🌙 Dark Mode

Dark mode được bật tự động dựa trên system preference. Để thêm toggle button:

1. Button đã có sẵn trong topbar
2. Logic JavaScript đã được implement
3. Styles trong CSS variables với `@media (prefers-color-scheme: dark)`

## 📱 Responsive Design

### Breakpoints

```css
/* Mobile */
@media (max-width: 768px) {
  /* Styles cho mobile */
}

/* Tablet */
@media (min-width: 769px) and (max-width: 1024px) {
  /* Styles cho tablet */
}

/* Desktop */
@media (min-width: 1025px) {
  /* Styles cho desktop */
}
```

## 🚀 Performance

### Tối ưu hóa

1. **Lazy loading images:**
```html
<img src="..." loading="lazy" />
```

2. **Optimize fonts:**
```html
<link rel="preload" href="/fonts/..." as="font" type="font/woff2" crossorigin>
```

3. **Minify CSS:**
Astro tự động minify khi build production.

## 📦 Build Production

```bash
npm run build
```

Output sẽ nằm trong folder `dist/`

## 🎨 Custom Components

Tạo component mới trong `src/components/`:

```astro
---
// MyComponent.astro
export interface Props {
  title: string;
}

const { title } = Astro.props;
---

<div class="my-component">
  <h2>{title}</h2>
</div>

<style>
  .my-component {
    /* Styles */
  }
</style>
```

## 💡 Tips & Tricks

1. **Sử dụng CSS variables** cho mọi giá trị có thể tái sử dụng
2. **Giữ components nhỏ và focused** - mỗi component chỉ làm một việc
3. **Test responsive** trên nhiều devices
4. **Optimize images** trước khi thêm vào project
5. **Sử dụng semantic HTML** cho SEO tốt hơn

## 🐛 Troubleshooting

### Styles không apply

- Kiểm tra import CSS trong Layout.astro
- Xóa cache: `rm -rf .astro`
- Restart dev server

### Component không hiển thị

- Kiểm tra import path
- Verify Props types
- Check console for errors

### Dark mode không hoạt động

- Kiểm tra CSS variables trong `@media (prefers-color-scheme: dark)`
- Test system dark mode setting
- Verify JavaScript cho toggle button

---

Nếu có câu hỏi, tham khảo [Astro Documentation](https://docs.astro.build)
