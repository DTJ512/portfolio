# CV Online - Trang web giới thiệu bản thân

Một trang web CV/Portfolio hiện đại với Frontend (React) và Backend (Express.js), với thiết kế đẹp mắt và responsive.

## Tính năng

### Frontend
- ✨ Giao diện hiện đại và đẹp mắt
- 📱 Responsive design (tương thích mobile, tablet, desktop)
- 🎨 Smooth scrolling và animations
- 📧 Form liên hệ tích hợp với backend API
- 🎯 Các phần: Giới thiệu, Kỹ năng, Kinh nghiệm, Dự án, Liên hệ

### Backend
- 🚀 RESTful API với Express.js
- 📧 Gửi email tự động qua Nodemailer
- ✅ Validation với express-validator
- 🔒 CORS và security middleware
- 📝 API endpoints cho contact form

## Cấu trúc dự án

```
cv_onl/
├── frontend/                 # React Frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Projects.jsx
│   │   │   └── Contact.jsx
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── backend/                  # Express.js Backend
│   ├── server.js
│   ├── package.json
│   ├── .gitignore
│   └── env.example
├── package.json              # Root package.json
└── README.md
```

## Cài đặt

### 1. Cài đặt tất cả dependencies

Từ thư mục root, chạy:

```bash
npm run install-all
```

Hoặc cài đặt từng phần:

```bash
# Cài đặt root dependencies
npm install

# Cài đặt frontend dependencies
cd frontend
npm install

# Cài đặt backend dependencies
cd ../backend
npm install
```

### 2. Cấu hình Backend

1. Copy file `backend/env.example` thành `backend/.env`:
```bash
cd backend
copy env.example .env
```

2. Chỉnh sửa file `backend/.env` và điền thông tin email của bạn:
```env
PORT=5000
EMAIL_USER=your.email@gmail.com
EMAIL_PASS=your_app_password
```

**Lưu ý về Gmail App Password:**
- Với Gmail, bạn cần tạo App Password để sử dụng
- Truy cập: https://myaccount.google.com/apppasswords
- Tạo App Password mới và sử dụng nó trong `EMAIL_PASS`

### 3. Chạy ứng dụng

#### Chạy cả Frontend và Backend cùng lúc (khuyến nghị):

Từ thư mục root:
```bash
npm run dev
```

Lệnh này sẽ chạy:
- Backend tại `http://localhost:5000`
- Frontend tại `http://localhost:3000`

#### Chạy riêng từng phần:

**Frontend:**
```bash
cd frontend
npm run dev
```

**Backend:**
```bash
cd backend
npm run dev
```

## API Endpoints

### `GET /api/health`
Kiểm tra trạng thái server
```json
{
  "status": "OK",
  "message": "Server is running"
}
```

### `GET /api/profile`
Lấy thông tin profile (có thể mở rộng)
```json
{
  "name": "Tên của bạn",
  "title": "Full Stack Developer",
  "email": "your.email@example.com",
  "phone": "+84 123 456 789",
  "location": "Hà Nội, Việt Nam",
  "github": "https://github.com",
  "linkedin": "https://linkedin.com"
}
```

### `POST /api/contact`
Gửi tin nhắn liên hệ

**Request Body:**
```json
{
  "name": "Tên người gửi",
  "email": "email@example.com",
  "message": "Nội dung tin nhắn"
}
```

**Response Success:**
```json
{
  "success": true,
  "message": "Tin nhắn đã được gửi thành công! Tôi sẽ phản hồi sớm nhất có thể."
}
```

**Response Error:**
```json
{
  "success": false,
  "errors": [
    {
      "msg": "Email không hợp lệ",
      "param": "email"
    }
  ]
}
```

## Build cho Production

### Build Frontend:
```bash
cd frontend
npm run build
```

Files build sẽ được tạo trong thư mục `frontend/dist`

### Chạy Backend Production:
```bash
cd backend
npm start
```

## Tùy chỉnh

### Thay đổi thông tin cá nhân

1. **Hero section** (`frontend/src/components/Hero.jsx`):
   - Thay đổi tên, chức danh, mô tả
   - Cập nhật links mạng xã hội

2. **About section** (`frontend/src/components/About.jsx`):
   - Cập nhật mô tả về bản thân
   - Thay đổi số liệu thống kê

3. **Skills section** (`frontend/src/components/Skills.jsx`):
   - Thêm/xóa kỹ năng
   - Điều chỉnh mức độ kỹ năng (%)

4. **Experience section** (`frontend/src/components/Experience.jsx`):
   - Cập nhật kinh nghiệm làm việc

5. **Projects section** (`frontend/src/components/Projects.jsx`):
   - Thêm các dự án của bạn
   - Cập nhật links GitHub và Demo

6. **Contact section** (`frontend/src/components/Contact.jsx`):
   - Cập nhật thông tin liên hệ

7. **Backend Profile** (`backend/server.js`):
   - Cập nhật thông tin trong endpoint `/api/profile`

### Thay đổi màu sắc

Chỉnh sửa các biến CSS trong `frontend/src/index.css`:
```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  /* ... */
}
```

## Công nghệ sử dụng

### Frontend
- React 18
- Vite
- React Icons
- Axios (HTTP client)
- CSS3 (Custom Properties, Grid, Flexbox)

### Backend
- Node.js
- Express.js
- Nodemailer (Gửi email)
- express-validator (Validation)
- CORS
- dotenv (Environment variables)

## Troubleshooting

### Lỗi kết nối API
- Đảm bảo backend đang chạy tại port 5000
- Kiểm tra proxy configuration trong `frontend/vite.config.js`

### Lỗi gửi email
- Kiểm tra file `.env` đã được tạo và cấu hình đúng
- Với Gmail, đảm bảo đã bật 2-Step Verification và tạo App Password
- Kiểm tra `EMAIL_USER` và `EMAIL_PASS` trong file `.env`

## License

MIT License - Tự do sử dụng cho mục đích cá nhân và thương mại.
