# Khởi chạy , từ thư mục SHOWEKYC, mở VisualCode.

- Lưu ý: Hiện có 2 cách kết nối, bắt Socket từ thiết bị và truyền lên Client thông qua API hoặc thông qua WebSocket

## Nhận qua websocket - Không cần xử lý lại đầu vào. Cd vào thư mục Client. Sau đó thay địa chỉ socket vào thư mục src/config/SocketContext

- npm install -> npm run dev

## Nhận qua API

- Cần sử lý CORS để có thể truyền API nên phải viết backend nhận socket , sau đó chuyển socket sang api để xử lý CORS.
- từ thư mục SHOWEKYC, mở VisualCode.
- npm install -> cd client -> npm install -> cd .. -> cd server -> npm install -> npm run start (Điều chỉnh lại thông tin kết nối tại .env, và trong mục .src)
