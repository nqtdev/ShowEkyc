//@ Gửi data lên Client qua API
const WebSocket = require("ws");
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const port = 5000;

// Cấu hình CORS để chỉ cho phép truy cập từ http://localhost:5173
app.use(
  cors({
    origin: "http://localhost:5173",
  }),
  express.json()
);
// Tạo latesData là biến toàn cục
let latestData = {};
// Sử dụng npm dotenv để ẩn địa chỉ
dotenv.config();
// Kết nối địa chỉ WebSocket server
const wsUrl = process.env.WS_URL;
// Tạo kết nối đến WebSocket
const ws = new WebSocket(wsUrl, {
  rejectUnauthorized: false, // Bỏ qua kiểm tra chứng chỉ (chỉ dùng trong phát triển)
});
// Sự kiện khi kết nối mở
ws.on("open", () => {
  console.log("Đã kết nối tới WebSocket server");
});

// Sự kiện khi nhận được dữ liệu từ server
ws.on("message", (dataCard) => {
  try {
    const parsedData = JSON.parse(dataCard);
    // gắn parsedData sang latestData để sử dụng
    latestData = parsedData;
  } catch (error) {
    console.error("Error parsing data:", error);
  }
});
// Sự kiện khi kết nối bị đóng
ws.on("close", () => {
  console.log("Kết nối đã bị đóng");
});
// Sự kiện khi có lỗi xảy ra
ws.on("error", (err) => {
  console.error("Lỗi kết nối:", err);
});
app.get("/api/datacard", (req, res) => {
  res.json(latestData);
});

// Bắt đầu server HTTP
app.listen(port, () => {
  console.log(
    `HTTP server is running on http://localhost:${port}/api/datacard`
  );
});
