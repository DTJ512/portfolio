# Portfolio Frontend

Frontend portfolio được xây dựng với React và React Router.

## Cài đặt

```bash
npm install
```

## Chạy development server

```bash
npm run dev
```

Ứng dụng sẽ chạy tại `http://localhost:3000`

## Build cho production

```bash
npm run build
```

## Cấu trúc dự án

```
frontend/
├── src/
│   ├── components/      # Các component tái sử dụng
│   │   ├── Navigation.jsx
│   │   └── Card.jsx
│   ├── pages/          # Các trang
│   │   ├── About.jsx
│   │   ├── Project.jsx
│   │   ├── Tools.jsx
│   │   └── Contact.jsx
│   ├── App.jsx         # Component chính
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html
├── package.json
└── vite.config.js
```

## Màu sắc

- Primary: #72a85b
- Secondary: #4f6f52
- Background: #ffffff

